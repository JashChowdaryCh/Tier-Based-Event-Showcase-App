'use client';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Tier-Based Event Showcase</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <p className="mt-4 text-lg">You're signed in 🎉</p>
        <Link
          href="/events"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Events
        </Link>
      </SignedIn>
    </main>
  );
}
