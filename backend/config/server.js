module.exports = ({ env }) => ({
  host: env("HOST", env.array("HOST")),
  port: env.int("PORT", env.array("PORT")),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
