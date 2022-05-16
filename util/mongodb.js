//This file is for establising connection to mongodb atlas

import { MongoClient } from "mongodb";

export default async function connectionToMongodb() {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    return db;
  } catch (error) {
    console.log("connection to db failed");
  }
}

