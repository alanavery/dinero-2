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

export const findData = async (collectionName, query) => {
  let data;
  const client = createClient();

  try {
    const database = client.db('dinero');
    const collection = database.collection(collectionName);
    if (query) {
      data = await collection.findOne(query);
    } else {
      data = await collection.find().toArray();
    }
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
