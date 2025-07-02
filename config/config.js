const config = {
  env: process.env.NODE_ENV || 'development',
  
  //  Server Port
  port: process.env.PORT || 3000,

  // JWT Secret Key (used for authentication)
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",

  //  MongoDB URI (Atlas first, fallback to local Mongo if needed)
  mongoUri: process.env.MONGODB_URI ||
            "mongodb+srv://kdie1277:Bibek1235@cluster0.17u3wqj.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0" ||
            process.env.MONGO_HOST ||
            'mongodb://' + (process.env.IP || 'localhost') + ':' +
            (process.env.MONGO_PORT || '27017') +
            '/mernproject'
};

export default config;
