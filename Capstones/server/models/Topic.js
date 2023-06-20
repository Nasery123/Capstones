import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const TopicSchema = new Schema({
  subject: {type: String, required: true, enum: ['math', 'science', 'econ', 'art', 'english']},
  hourlyRate: {type: Number, required: true},
  accountId: {type: ObjectId, required: true, ref:'Account'},
  level: {type: String, required: true, enum: ['100','200','300','400','500']}
}, {timestamps:true, toJSON: {virtuals:true}}
)
// TODO create virtual for the tutor

TopicSchema.virtual('tutor',{
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne:true
})