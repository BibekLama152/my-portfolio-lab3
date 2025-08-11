// config/index.js

import dotenv from 'dotenv';
dotenv.config(); // Load from .env into process.env

// Ensure critical env vars are present
['MONGODB_URI', 'JWT_SECRET'].forEach((name) => {
  if (!process.env[name]) {
    console.error(`❌  Missing required environment variable: ${name}`);
    process.exit(1);
  }
});

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 5000,
  jwtSecret: process.env.JWT_SECRET,        // from .env → JWT_SECRET
  mongoUri: process.env.MONGODB_URI,       // from .env → MONGODB_URI
};

console.log('🔧 Server configuration:' , {
  env: config.env,
  port: config.port,
  mongoUri: config.mongoUri.slice(0, 30) + '…', // mask most of it
});

export default config;
