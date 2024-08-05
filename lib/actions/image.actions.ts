"use server"

import { log } from "console"
import { handleError } from "../utils"
import { connectToDatabase } from "../database/mongoose"
import { revalidatePath } from "next/cache";
import path from "path";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";
import { model } from "mongoose";


const populateUser = (query: any) => query.populate({
    path: "author",
    model: User,
    select:"_id firstname lastName"
})

//ADD IMAGE
export async function Addimage({image, userId, path}: AddImageParams) {
    try {
        await connectToDatabase();
 
     const author = await User.findById(userId);

     if (!author) {
        throw new Error("User not found")
     }
     const newImage = await Image.create({
        ...image,
        author: author._id,
     })

        revalidatePath(path);
        return JSON.parse(JSON.stringify(newImage));
    } catch (e) {
        handleError(e)
    }
}
//UPDATEIMAGE
export async function UpdateImage({image, userId, path}: UpdateImageParams) {
    try {
        await connectToDatabase();

        const imagetoUpdate = await Image.findById(image._id)

        if (!imagetoUpdate || imagetoUpdate.author.toHexString() !==userId) {
            throw new Error("UnAuthorized or Image not Found")
        }

        const updateImage = await Image.findByIdAndUpdate(imagetoUpdate._id, image,{new: true})

        revalidatePath(path);
        return JSON.parse(JSON.stringify(updateImage));
    } catch (e) {
        handleError(e)
    }
}
 //DELET up
export async function DeletImage(imageId: string) {
    try {
        await connectToDatabase();
          
         await Image.findByIdAndDelete(imageId)
    } catch (e) {
        handleError(e)
    } finally {
        redirect("/dashboard")
    }
}


//GET IMAGE
export async function getImageById(imageId: string) {
    try {
        await connectToDatabase();
           
        const image = await populateUser(Image.findById(imageId))
    if(!image) {
        throw new Error("Image not found")
    }
        return JSON.parse(JSON.stringify(image));
    } catch (e) {
        handleError(e)
    }
}