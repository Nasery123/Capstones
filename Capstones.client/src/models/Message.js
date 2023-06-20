export class Message{
  constructor(data){
this.creatorId = data.creatorId
this.body = data.body
this.isRead= data.isREad ||true
this.recipientId = data.recipientId
  }
}
