import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Sentry = require("@sentry/node");

export default ({ init }, { env }) => {
  Sentry.init({
    dsn: env.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });

  init("routes.before", ({ app }) => {
    app.use(Sentry.Handlers.requestHandler());
    console.log("-- Sentry Request Handler Added --");
  });

  init("routes.custom.after", ({ app }) => {
    app.use(Sentry.Handlers.errorHandler());
    console.log("-- Sentry Error Handler Added --");
  });
};
