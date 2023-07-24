import { Profile } from "./Account.js"

export class Message{
  constructor(data){
this.id = data._id
this.body = data.body
this.roomId = data.roomId;
this.createdAt = data.createdAt
if(data.creator){
this.creator = new Profile(data.creator)
}
}
}