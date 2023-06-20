import { dbContext } from "../db/DbContext.js"


class MessageService {


  async createMessage(messageData) {
    const message = await dbContext.Messages.create(messageData)
    await message.populate('creator')
    return message
  }
}

export const messageService = new MessageService()