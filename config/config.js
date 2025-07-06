import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
  mongoUri: process.env.MONGO_URI //  Use ONLY env, remove all fallback
};

console.log("MONGO URI BEING USED:", config.mongoUri); //  Check again

export default config;
