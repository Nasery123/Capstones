import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const TopicSchema = new Schema({
  id:{type:ObjectId, required:true},
  subject: {type: String, required: true, enum: ['math', 'science', 'econ', 'art', 'english']},
  hourlyRate: {type: Number, required: true},
  accountId: {type: ObjectId, required: true},
  level: {type: String, required: true, enum: ['100','200','300','400','500']}
})