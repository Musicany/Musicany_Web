import { MongoClient } from "mongodb";

// MongoDB 연결 URL
const url =
  "mongodb+srv://admin:c5752512@musicany.r4lll.mongodb.net/?retryWrites=true&w=majority&appName=Musicany";

let connectDBPromise: Promise<MongoClient> | null = null;

const connectDB = (async () => {
  if (!connectDBPromise) {
    if (process.env.NODE_ENV === "development") {
      if (!global.mongoClient) {
        global.mongoClient = new MongoClient(url).connect(); // global.mongoClient 사용
      }
      connectDBPromise = global.mongoClient;
    } else {
      connectDBPromise = new MongoClient(url).connect();
    }
  }
  return connectDBPromise;
})();

export { connectDB };
