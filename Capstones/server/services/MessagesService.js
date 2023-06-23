import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"




class MessagesService {
  async getOne(messageId) {
    let message = await dbContext.Messages.findById(messageId).populate("creator")
    if (message == null) {
      throw new BadRequest("That Message Doesn't Exist")
    }
    return message;
  }
  async create(messageBody) {
    let message = await dbContext.Messages.create(messageBody)
    await message.populate("creator")
    await message.populate("channel")
    return message
  }
  async delete(messageId, userId) {
    let message = await this.getOne(messageId)
    if (message.creatorId != userId) {
      throw new Forbidden("YOu can't do that, bub")
    }
    await message.remove()
    return "You Deleted The Message"
  }
}


export const messagesService = new MessagesService()