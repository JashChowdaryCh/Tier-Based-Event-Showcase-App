'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: 'free' | 'silver' | 'gold' | 'platinum';
};

const tierOrder = ['free', 'silver', 'gold', 'platinum'];
const fallbackImage = 'https://placehold.co/400x250/png?text=No+Image';

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [userTier, setUserTier] = useState<Event['tier']>('free');

  // ⏫ Tier Upgrade
  const upgradeTier = async (newTier: Event['tier']) => {
    if (!user) return;
    await fetch('/api/upgrade-tier', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: user.id,
    newTier,
  }),
});

    setUserTier(newTier);
    window.location.reload();
  };

  useEffect(() => {
    if (!isLoaded || !user) return;

    const fetchEvents = async () => {
      const supabase = createClient();
      const tier = (user.publicMetadata?.tier as Event['tier']) || 'free';
      setUserTier(tier);
      const { data, error } = await supabase.from('events').select('*');

      if (error) {
        console.error('Error fetching events:', error.message);
      } else {
        const allEvents = data as Event[];
        setEvents(allEvents);
      }

      setLoading(false);
    };

    fetchEvents();
  }, [isLoaded, user]);

  const allowedTiers = tierOrder.slice(0, tierOrder.indexOf(userTier) + 1);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Tier Events</h1>

      {/* Tier Upgrade Buttons */}
      <div className="flex gap-2 mb-6">
        {tierOrder.map((tier) => (
          <button
            key={tier}
            onClick={() => upgradeTier(tier)}
            className={`px-3 py-1 rounded text-white text-sm font-medium ${
              tier === 'free'
                ? 'bg-green-500'
                : tier === 'silver'
                ? 'bg-gray-500'
                : tier === 'gold'
                ? 'bg-yellow-500'
                : 'bg-purple-600'
            }`}
          >
            Upgrade to {tier.charAt(0).toUpperCase() + tier.slice(1)}
          </button>
        ))}
      </div>

      {/* Events List */}
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const isLocked = !allowedTiers.includes(event.tier);

            return (
              <div
                key={event.id}
                className={`bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-md border ${
                  isLocked ? 'opacity-60' : ''
                }`}
              >
                <Image
                  src={event.image_url || fallbackImage}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium text-white ${
                      event.tier === 'free'
                        ? 'bg-green-500'
                        : event.tier === 'silver'
                        ? 'bg-gray-500'
                        : event.tier === 'gold'
                        ? 'bg-yellow-500'
                        : 'bg-purple-600'
                    }`}
                  >
                    {event.tier.toUpperCase()}
                  </span>

                  {/* Locked message */}
                  {isLocked && (
                    <p className="text-red-500 mt-2 text-sm">
                      Upgrade to {event.tier.toUpperCase()} to access this event
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
