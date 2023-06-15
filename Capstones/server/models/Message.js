import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const MessageSchema = new Schema({
  creatorId: {type: ObjectId, required: true},
  body: {type: String, requied: true},
  isRead: {type: Boolean, required: true || true},
  recipientId: {type: ObjectId, required: true}
})