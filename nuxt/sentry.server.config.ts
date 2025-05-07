import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://2df491a0a294cfb9602d346954725f30@o4509275280900096.ingest.de.sentry.io/4509280467484752",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
