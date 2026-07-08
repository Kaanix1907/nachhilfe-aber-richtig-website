import * as Sentry from '@sentry/nextjs';

// Runtime-Error-Monitoring (Browser). Init NUR mit gesetztem DSN — ohne ENV komplett inert.
// errors-only (tracesSampleRate:0), kein PII: Cookies/Header werden vor dem Versand gestrippt.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 0,
    sendDefaultPii: false,
    beforeSend(event) {
      if (event.request) {
        delete event.request.cookies;
        delete event.request.headers;
      }
      delete event.user;
      return event;
    },
  });
}

// App-Router-Navigations-Hook — no-op, solange Sentry nicht initialisiert ist.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
