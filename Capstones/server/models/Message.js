import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MessageSchema = new Schema({
  creatorId: { type: ObjectId, required: true },
  body: { type: String, required: true },
  isRead: { type: Boolean, required: true },
  recipientId: { type: ObjectId, required: true },
  senderId: { type: ObjectId, required: true },
  sessionId: { type: ObjectId, required: true }
})

MessageSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
MessageSchema.virtual('session', {
  localField: 'sessionId',
  foreignField: '_id',
  justOne: true,
  ref: 'Session'
}
)