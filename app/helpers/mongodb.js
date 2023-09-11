import { MongoClient, ServerApiVersion } from 'mongodb';

const createClient = () => {
  const uri = `mongodb+srv://aavery:${process.env.MONGODB_PASSWORD}@dinero.t63o5hq.mongodb.net/?retryWrites=true&w=majority`;

  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
};

export const findData = async (requests) => {
  const client = createClient();

  try {
    const data = {};
    const database = client.db('dinero');
    for (const request of requests) {
      const { collectionName, query, singleDocument } = request;
      const collection = database.collection(collectionName);
      if (singleDocument) {
        data[collectionName] = await collection.findOne(query);
      } else {
        data[collectionName] = await collection.find(query).toArray();
      }
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
