import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/clerk-sdk-node';

export async function POST(req: NextRequest) {
  const { userId, newTier } = await req.json();

  if (!userId || !newTier) {
    return NextResponse.json({ error: 'Missing userId or newTier' }, { status: 400 });
  }

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        tier: newTier,
      },
    });

    return NextResponse.json({ success: true });
  }  catch (error) {
  if (error instanceof Error) {
    console.error('Metadata update failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
}

}
