// app/api/shorten/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { nanoid } from 'nanoid';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
} from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Get the base URL from the request
    const getBaseUrl = () => {
      if (process.env.NEXT_PUBLIC_BASE_URL) {
        return process.env.NEXT_PUBLIC_BASE_URL;
      }
      
      const host = request.headers.get('host');
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      
      if (host) {
        return `${protocol}://${host}`;
      }
      
      return 'http://localhost:3000';
    };

    const baseUrl = getBaseUrl();

    // ✅ Validate the URL
    let validUrl: string;
    try {
      validUrl = new URL(url).toString();
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    // ✅ Check if originalUrl already exists in Firestore
    const urlsRef = collection(db, 'urls');
    const q = query(urlsRef, where('originalUrl', '==', validUrl));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const existingData = querySnapshot.docs[0].data();
      const shortUrl = `${baseUrl}/${existingData.shortCode}`;

      return NextResponse.json({
        originalUrl: validUrl,
        shortUrl,
        shortCode: existingData.shortCode,
        createdAt: existingData.createdAt,
      });
    }

    // ✅ Generate unique short code and use it as the document ID
    let shortCode = nanoid(8);
    let docRef = doc(db, 'urls', shortCode);
    let docSnap = await getDoc(docRef);

    while (docSnap.exists()) {
      shortCode = nanoid(8);
      docRef = doc(db, 'urls', shortCode);
      docSnap = await getDoc(docRef);
    }

    const createdAt = new Date().toISOString();

    const newDoc = {
      originalUrl: validUrl,
      shortCode,
      createdAt,
      clicks: 0,
    };

    await setDoc(docRef, newDoc);

    const shortUrl = `${baseUrl}/${shortCode}`;

    return NextResponse.json({
      originalUrl: validUrl,
      shortUrl,
      shortCode,
      createdAt,
    });
  } catch (error) {
    console.error('Error shortening URL:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
