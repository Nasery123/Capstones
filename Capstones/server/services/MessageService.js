import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"




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

  async deleteMessageThread(messageId, userId) {

    const message = await dbContext.Messages.findById(messageId)
    if (!message) throw new BadRequest("This Message Doesn't Exist")
    if (message.creatorId != userId) {
    throw new Forbidden("Nuh uh, buddy")
    }
    await message.remove()
    return
  }
}


export const messageService = new MessageService()