import { Auth0Provider } from "@bcwdev/auth0provider"
import { messageService } from "../services/MessageService.js"
import BaseController from "../utils/BaseController.js"

export class MessageController extends BaseController {
  constructor() {
    super('api/messages')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMessage)
      .delete('/:sessionId', this.deleteMessageThread)

  }

  async createMessage(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const message = await messageService.createMessage(req.body)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
    async deleteMessageThread(req, res, next) {
    try {
      const messageId = req.params.messageId
      const userId = req.userInfo.id
      await messageService.deleteMessageThread(messageId)
      return res.send(`${messageId} deleted`)
    } catch (error) {
      next(error)
    }
  }
}