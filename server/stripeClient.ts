// Stripe client — uses STRIPE_LIVE_* environment variables

import Stripe from 'stripe';

async function getCredentials(): Promise<{ publishableKey: string; secretKey: string }> {
  const liveSecretKey = process.env.STRIPE_LIVE_SECRET_KEY;
  const livePublishableKey = process.env.STRIPE_LIVE_PUBLISHABLE_KEY;

  if (liveSecretKey && livePublishableKey) {
    console.log('[Stripe] Using live business account credentials');
    return {
      publishableKey: livePublishableKey,
      secretKey: liveSecretKey,
    };
  }

  throw new Error('No Stripe credentials found. Please configure STRIPE_LIVE_SECRET_KEY and STRIPE_LIVE_PUBLISHABLE_KEY environment variables.');
}

// Get a fresh Stripe client
export async function getUncachableStripeClient() {
  const { secretKey } = await getCredentials();

  return new Stripe(secretKey, {
    apiVersion: '2025-04-30.basil' as any,
  });
}

// Get publishable key for client-side
export async function getStripePublishableKey() {
  const { publishableKey } = await getCredentials();
  return publishableKey;
}

// Get secret key for server-side operations
export async function getStripeSecretKey() {
  const { secretKey } = await getCredentials();
  return secretKey;
}
