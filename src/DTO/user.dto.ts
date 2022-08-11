import mongoose from "mongoose";

export interface UserDto extends mongoose.Document
{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}