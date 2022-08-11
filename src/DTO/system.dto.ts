import mongoose from "mongoose";

export class systemDto extends mongoose.Document
{
    uid: number;
    topic: string;
    objectName: string;
    owner: string;
}