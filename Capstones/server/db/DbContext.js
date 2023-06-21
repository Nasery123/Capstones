import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { MessageSchema } from "../models/Message.js";
import { SessionSchema } from "../models/Session.js";
import { TopicSchema } from "../models/Topic.js";
import { ReviewSchema } from "../models/Review.js";
import { RoomsSchema } from "../models/Room.js";
import { ChannelSchema } from "../models/Channel.js";
class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Sessions = mongoose.model('Session', SessionSchema);
  Messages = mongoose.model('Message', MessageSchema);
  Topics = mongoose.model('Topic', TopicSchema);
  Reviews = mongoose.model('Review', ReviewSchema)
  Rooms = mongoose.model("Room", RoomsSchema)
  Channels = mongoose.model("Channel", ChannelSchema)




}

export const dbContext = new DbContext()
