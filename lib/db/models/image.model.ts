
import { model, models, Schema } from "mongoose";


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
