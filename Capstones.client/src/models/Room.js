import { Profile } from "./Account.js"
import { Channel } from "./Channel.js"

export class Room {
  constructor(data) {
    this.id = data.creator
    this.title = data.title
    this.Creator = new Profile(data.creator)
    if (data.channel) {
      this.Channel = new Channel(data.channel);
    }
  }
}