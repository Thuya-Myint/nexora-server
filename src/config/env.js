import "dotenv/config";

const env = {
  nodeEnv: process.env.NODE_ENV || "DEV",
  port: Number(process.env.PORT) || 8080,
  mongoUri: process.env.MONGO_URI,
  redis: {
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  logLevel: process.env.LOG_LEVEL || "info"
}

export default env