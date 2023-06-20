import { Profile } from "./Account.js"

export class Topic{
  constructor(data){
this.subject=data.subject 
this.hourlyRate=data.hourlyRate
this.accountId=data.accountId
this.level=data.level
this.tutor = new Profile(data.tutor)
  }
}