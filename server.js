// server.js
import 'dotenv/config';
import mongoose from 'mongoose';
import app from './server/express.js';  // ← import the app instance

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!uri) {
  console.error('  No MongoDB URI found');
  process.exit(1);
}
console.info(' Connecting to MongoDB at', uri);

mongoose
  .connect(uri)
  .then(() => {
    console.info('  MongoDB connected');
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.info(`  Server listening on http://localhost:${port}`)
    );
  })
  .catch(err => {
    console.error('  MongoDB connection error:', err);
    process.exit(1);
  });
