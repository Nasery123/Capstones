import { dbContext } from "../db/DbContext.js"


class MessageService {


  async createMessage(messageData) {
    const message = await dbContext.Messages.create(messageData)
    await message.populate('creator')
    return message
  }
  async findSessionMessages(sessionId) {
    const messages = await dbContext.Messages.find({ sessionId: sessionId }).populate('creator')
    return messages
  }
}


export const messageService = new MessageService()