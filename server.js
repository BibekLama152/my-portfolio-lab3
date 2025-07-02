import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

//  Connect to MongoDB using dynamic URI from config
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" Connected to the database!"))
.catch((err) => {
  console.error(" DB connection failed:", err);
  process.exit(1); // Exit if failed
});

//  Optional: Handle runtime connection errors
mongoose.connection.on("error", () => {
  throw new Error(` Unable to connect to database: ${config.mongoUri}`);
});

//  Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio API." });
});

//  Start server
app.listen(config.port, (err) => {
  if (err) {
    console.error(" Server start error:", err);
  } else {
    console.info(` Server started on port ${config.port}`);
  }
});
