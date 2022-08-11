import mongoose from "mongoose";

export class userDto extends mongoose.Document
{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}