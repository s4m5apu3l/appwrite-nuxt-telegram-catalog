// appwrite.ts
import { Client, Databases, Account, Storage } from 'appwrite';

const url = process.env.APPWRITE_ENDPOINT;
const project = process.env.APPWRITE_PROJECT_ID;

const client = new Client();

client.setEndpoint(url).setProject(project);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
