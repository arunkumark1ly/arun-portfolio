import { NextResponse } from 'next/server';
import { storage } from '@/../../server/storage';
import { insertResumeAccessSchema } from '@shared/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = insertResumeAccessSchema.parse(body);
    
    // Store resume access
    const access = await storage.createResumeAccess(validatedData);
    
    return NextResponse.json(access, { status: 201 });
  } catch (error) {
    console.error('Error creating resume access:', error);
    
    if (error instanceof Error && error.message.includes('ZodError')) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create resume access' },
      { status: 500 }
    );
  }
}
