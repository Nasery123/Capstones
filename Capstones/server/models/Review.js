import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const ReviewSchema = new Schema({
  ratingCount: {type: Number, required: true},
  studentId: { type: ObjectId, required: true, ref: 'Account'},
  tutorId: { type: ObjectId, required: true, ref: 'Account'},
}, {timestamps: true, toJSON: { virtuals: true}}
)

ReviewSchema.virtual('student',{
  localField: 'studentId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

ReviewSchema.virtual('tutor',{
  localField: 'tutorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
  
})