"use server"

import { log } from "console"
import { handleError } from "../utils"
import { connectToDatabase } from "../database/mongoose"
import { revalidatePath } from "next/cache";
import path from "path";


//ADD IMAGE
export async function Addimage({image, userId, path}: AddImageParams) {
    try {
        await connectToDatabase();
        revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
    } catch (e) {
        handleError(e)
    }
}
//UPDATEIMAGE
export async function UpdateImage({image, userId, path}: UpdateImageParams) {
    try {
        await connectToDatabase();
        revalidatePath(path);
        return JSON.parse(JSON.stringify(image));
    } catch (e) {
        handleError(e)
    }
}
 //DELET IMAGE
// export async function DeletImage(imageId: string) {
//     try {
//         await connectToDatabase();
//         revalidatePath(path);
//         return JSON.parse(JSON.stringify(image));
//     } catch (e) {
//         handleError(e)
//     }
// }

// export async function getImageById(imageId: string) {
//     try {
//         await connectToDatabase();
//         revalidatePath(path);
//         return JSON.parse(JSON.stringify(image));
//     } catch (e) {
//         handleError(e)
//     }
// }