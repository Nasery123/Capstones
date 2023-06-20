import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    bio: {type: String, required:true},
    schoolName: {type: String, required: true},
    isAvailable: {type: Boolean, required: true, default:true},
    hourlyRate: {type: Number, required: true},
    isTutor: {type: Boolean, required: true, default: false}
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

