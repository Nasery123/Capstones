import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SessionSchema = new Schema({
  // studentId: {type: ObjectId, required: true, ref: 'Account'},
  creatorId: { type: ObjectId, required: true, ref: 'Account' },
  tutorId: { type: ObjectId, ref: 'Account' },
  topicId: { type: ObjectId, ref: 'Topic' },
  // isCompleted: { type: Boolean, required: true || false },
  isCompleted: { type: Boolean },
  isconfirmed: { type: String },
  // isConfirmed: { type: String, required: true, enum: ['pending', 'confirmed', 'denied'] },
  description: { type: String }
  // add required true to description
}, { timestamp: true, toJSON: { virtuals: true } }
)

SessionSchema.virtual('student', {
  // localField: 'studentId',
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})

SessionSchema.virtual('tutor', {
  localField: 'tutorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true

})

SessionSchema.virtual('topic', {
  localField: 'topicId',
  foreignField: '_id',
  ref: 'Topic',
  justOne: true
})
