// import { Auth0Provider } from "@bcwdev/auth0provider"
// import { messageService } from "../services/MessageService.js"
// import BaseController from "../utils/BaseController.js"

// export class MessageController extends BaseController {
//   constructor() {
//     super('api/messages')
//     this.router
//       .use(Auth0Provider.getAuthorizedUserInfo)
//       .post('', this.createMessage)
//       .delete('/:sessionId', this.deleteMessageThread)

//   }

//   async createMessage(req, res, next) {
//     try {
//       req.body.creatorId = req.userInfo.id
//       const message = await messageService.createMessage(req.body)
//       return res.send(message)
//     } catch (error) {
//       next(error)
//     }
//   }
//     async deleteMessageThread(req, res, next) {
//     try {
//       const messageId = req.params.messageId
//       const userId = req.userInfo.id
//       await messageService.deleteMessageThread(messageId)
//       return res.send(`${messageId} deleted`)
//     } catch (error) {
//       next(error)
//     }
//   }
// }
import { socketProvider } from "../SocketProvider";
import { channelsService } from "../services/ChannelsService.js";
import { messagesService } from "../services/MessagesService";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";
export class MessagesController extends BaseController {
  constructor() {
    super("api/messages");
    this.router
      .get("/:id", this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getOne(req, res, next) {
    try {
      let messageId = req.params.id;
      let message = await messagesService.getOne(messageId);
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let messageBody = req.body;
      messageBody.creatorId = req.userInfo.id;
      let message = await messagesService.create(messageBody);
      socketProvider.messageRoom(
        // @ts-ignore
        message.roomId.toString(),
        "s:creating:message",
        message
      );

      socketProvider.messageUser(
        // @ts-ignore
        message.channel.creatorId.toString(),
        "s:channelOwner:messageCreated",
        message
      );
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let messageId = req.params.id;
      let userId = req.userInfo.id;
      let message = await messagesService.delete(messageId, userId);
      return res.send(message);
    } catch (error) {
      next(error);
    }
  }
}







