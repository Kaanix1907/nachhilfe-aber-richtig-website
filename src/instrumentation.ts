import * as Sentry from '@sentry/nextjs';

// Next.js App-Router-Instrumentation: lädt die runtime-spezifische Sentry-Server-Config.
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

// Fängt Fehler in Server-Components und Route-Handlers (api/*) automatisch — no-op ohne DSN.
export const onRequestError = Sentry.captureRequestError;
