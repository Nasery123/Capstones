import { Profile } from "./Account.js"

export class Channel {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.creatorId = data.creatorId
    if (data.creator) {
      this.Profile = new Profile(data.creator)
    }
  }
}