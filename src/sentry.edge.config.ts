import * as Sentry from '@sentry/nextjs';

// Runtime-Error-Monitoring (Edge-Runtime, z. B. Middleware/Edge-Routes). Identische Policy wie
// die Server-Config: DSN-gated, errors-only, kein PII, Request-Details vor Versand gestrippt.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.VERCEL_ENV || 'production',
    tracesSampleRate: 0,
    sendDefaultPii: false,
    beforeSend(event) {
      if (event.request) {
        delete event.request.data;
        delete event.request.cookies;
        delete event.request.headers;
        delete event.request.query_string;
      }
      delete event.user;
      return event;
    },
  });
}
