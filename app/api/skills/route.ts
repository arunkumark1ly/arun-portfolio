import { NextResponse } from 'next/server';
import { storage } from '@/../../server/storage';

export async function GET() {
  try {
    const skills = await storage.getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}
