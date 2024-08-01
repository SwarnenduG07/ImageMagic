
import { model, models, Schema } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType : string
    publicID:string
    secureURL: string
    width: number,
    hight: number,
    config:object,
    transformationURL: string,
    aspectRation: string,
    color: string,
    prompt: string
    author: {
        _id: string,
        firstName: string,
        lastName: string,
    }
    createdAt: Date,
    updatedAt: Date,
}


const imageSchema = new Schema({
    title :{type: String , required: true},
    transformationType: {type: String , required: true},
    publicID: {type: String , required: true},
    secureURL: {type: URL , required: true},
    width: {type: Number},
    hight: {type: Number},
    config: {type: Object},
    transformationURL: {type: URL , required: true},
    aspectRation: {type: String },
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});
const Image = models?.Image || model('Image', imageSchema);

export default Image;