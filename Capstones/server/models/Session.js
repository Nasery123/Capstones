import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SessionSchema = new Schema({
  studentId: { type: ObjectId, required: true, ref: 'Account' },
  tutorId: { type: ObjectId, ref: 'Account', required: true },
  topicId: { type: ObjectId, ref: 'Topic', required: true },

  isCompleted: { type: Boolean, default: false },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'denied'] },
  description: { type: String, default: '' }
}, { timestamp: true, toJSON: { virtuals: true } }
)

SessionSchema.virtual('student', {
  localField: 'studentId',
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
