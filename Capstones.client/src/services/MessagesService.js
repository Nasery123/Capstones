import { Message } from "../models/Message.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class MessagesService {
async createMessage(messageData) {
  const res = await api.post("api/message", messageData);
  logger.log(new Message(res.data))
} 
}
export const messagesService = new MessagesService()