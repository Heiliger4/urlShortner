// app/api/stats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET(request: NextRequest) {
  try {
    const snapshot = await getDocs(collection(db, 'urls'));
    let totalClicks = 0;
    const totalUrls = snapshot.size;

    snapshot.forEach(doc => {
      const data = doc.data();
      totalClicks += data.clicks || 0;
    });

    const stats = {
      totalUrls,
      totalClicks,
      databaseStatus: 'connected',
      usingMemoryFallback: false,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error retrieving stats:', error);
    return NextResponse.json(
      {
        error: 'Database connection failed',
        databaseStatus: 'unavailable',
        usingMemoryFallback: false,
      },
      { status: 500 }
    );
  }
}
