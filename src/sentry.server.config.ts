import * as Sentry from '@sentry/nextjs';

// Runtime-Error-Monitoring (Server-Runtime). Init NUR mit gesetztem DSN — ohne ENV komplett inert
// (lokal/CI/Preview): kein Netzwerk, kein Verhalten geändert. errors-only (tracesSampleRate:0,
// kein Tracing), kein PII: Request-Body/Cookies/Headers werden vor dem Versand gestrippt
// (die Route-Handler verarbeiten Kontaktformular-/Review-Daten).
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
