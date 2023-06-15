import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    bio: {type: String, default:''},
    schoolName: {type: String, required: true, default:'unknown'},
    isAvailable: {type: Boolean, required: true, default: true},
    hourlyRate: {type: Number, required: true, default: 5},
    isTutor: {type: Boolean, required: true, default: false}
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

