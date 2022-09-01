import mongoose from "mongoose";

export interface SystemDto extends mongoose.Document
{
    uid: number;
    topic: string;
    objectName: string;
    owner: string;
}