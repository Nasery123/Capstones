import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SessionSchema = new Schema({
  studentId: {type: ObjectId, required: true, ref: 'Account'},
  // creatorId: {type: ObjectId, required: true ref: },
  tutorId: {type: ObjectId, required: true, ref: 'Account'},
  topicId: {type: ObjectId, required: true, ref: 'Topic'},
  isCompleted: {type: Boolean, required: true || false},
  isConfirmed: {type: String, required: true, enum: ['pending', 'confirmed', 'denied']},
  description: {type: String, required: true}
  }, {timestamp: true, toJSON: {virtuals: true}} 
)


  
SessionSchema.virtual('student',{
  localField: 'studentId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

SessionSchema.virtual('tutor',{
  localField: 'tutorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
  
})