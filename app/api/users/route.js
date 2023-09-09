import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://aavery:${process.env.MONGODB_PASSWORD}@dinero.t63o5hq.mongodb.net/?retryWrites=true&w=majority`;

export const POST = async (request) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    const database = client.db('dinero');
    const users = database.collection('users');
    const document = await request.json();
    const result = await users.insertOne(document);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
