import { NextResponse } from 'next/server';
import { storage } from '@/../../server/storage';
import { insertMessageSchema } from '@shared/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = insertMessageSchema.parse(body);
    
    // Store message
    const message = await storage.createMessage(validatedData);
    
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    
    if (error instanceof Error && error.message.includes('ZodError')) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
}
