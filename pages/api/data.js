import connectionToMongodb from "../../util/mongodb";

export default async function Data(req, res) {
  
  try {
    const db = await connectionToMongodb();
    const myData = await db.collection("products").find({}).toArray();
    console.log('😀',myData);
    res.json(myData);
  } catch (error) {
    res.json(error);
  }
}
