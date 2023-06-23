import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MessageSchema = new Schema({
  // isRead: { type: Boolean, required: true },
  // recipientId: { type: ObjectId, required: true },
  // senderId: { type: ObjectId, required: true },
  body: { type: String, required: true },
  img: {type: String, maxLength: 1000},
  sessionId: { type: ObjectId, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
  roomId: {type: Schema.Types.ObjectId, required: true, ref: "Room"},
  friendId: { type: Schema.Types.ObjectId, ref: "Friend" }
}, { timestamps: true, toJson: { virtuals: true } })

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
})
MessageSchema.virtual('channel', {
  localField: 'roomId',
  foreignField: '_id',
  ref: 'Channel',
  justOne: true
})