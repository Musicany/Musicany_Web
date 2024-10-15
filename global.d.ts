import { MongoClient } from "mongodb";

declare global {
  // global 객체에 mongoClient를 추가
  // eslint-disable-next-line no-var,vars-on-top
  var mongoClient: Promise<MongoClient> | undefined;
}

export {};
