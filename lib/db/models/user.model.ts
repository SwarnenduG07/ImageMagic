import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId: {type: String, required: true, uniqer: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true,unique: true},
    photo: {type: String, required: true,},
    firstname: {type: String},
    lastName: {type: String},
    planId: {type: String, default: 1},
    creditBalance: {type: String, default: 10},

});

const User = models?.User || model("User", UserSchema)

export default User;