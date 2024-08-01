import { channel } from "diagnostics_channel";
import mongoose, {mongo, Mongoose} from "mongoose";

const MONDODB_URL= process.env.DB_URL;

interface MOngoDBCOnnection  {
    conn :Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached : MOngoDBCOnnection = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectTODb = async () => {
    if(cached.conn) return cached.conn;

    if(!MONDODB_URL) 
        throw new Error("NO MongoDb URL Present");

     cached.promise =
            cached.promise || mongoose.connect(MONDODB_URL, {dbName: 'Image-Magic' , bufferCommands: false }) 
           cached.conn = await cached.promise;
} 