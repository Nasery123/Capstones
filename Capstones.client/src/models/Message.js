import { Profile } from "./Account.js"

export class Message{
  constructor(data){
this.id = data.id
this.body = data.body
this.img = data.img;
this.createdAt = data.createdAt
this.creator = new Profile(data.creator)
}
}