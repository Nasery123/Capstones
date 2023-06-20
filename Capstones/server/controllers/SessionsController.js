import { sessionService } from "../services/SessionService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { messageService } from "../services/MessageService.js";
import { topicsService } from "../services/TopicsService.js";

export class SessionsController extends BaseController {
  constructor() {
    super('api/sessions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSession)
      // .get('/:tutorId', this.getSessionsByTutorId )
      // .get('/:studentId', this.getSessionsByStudentId)
      .delete('/:sessionId', this.deleteSessionById)
      .get('/:sessionId/messages', this.findSessionMessages)
      // .delete('/:sessionId/messages', this.deleteMessageThread)
      .get('/:sessionId/topics', this.getSesssionTopic)
  }







  async createSession(req, res, next) {
    try {
      req.body.studentId = req.userInfo.id
      const session = await sessionService.createSession(req.body)

      return res.send(session)


    } catch (error) {
      next(error)
    }
  }
  // async getTutorsByTopicId(req,res,next){
  //   try {
  //     const res = await sessionService.getTutorsByTopicId()
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  //   async getSessionsByTutorId(req, res,next) {
  //     try {
  //      const session = await sessionService.getSessionByTutorId(req.params.tutorId)

  // return res.send(session)

  //     } catch (error) {
  //       next(error)
  //     }
  //   }

  async getSessionsByStudentId(req, res, next) {
    try {
      const session = await sessionService.getSessionsByStudentId(req.params.studentId)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }
  async deleteSessionById(req, res, next) {
    try {
      const userId = req.userInfo.id
      const sessionId = req.params.sessionId

      await sessionService.deleteSessionById(sessionId, userId)
      return res.send(`Session at ${sessionId} was deleted`)
    } catch (error) {
      next(error)
    }
  }
  async findSessionMessages(req, res, next) {
    try {
      const messages = await messageService.findSessionMessages(req.params.sessionId)
      res.send(messages)
    } catch (error) {
      next(error)
    }
  }
  // async deleteMessageThread(req, res, next) {
  //   try {
  //     const messageId = req.params.messageId
  //     const userId = req.userInfo.id
  //     await messageService.deleteMessageThread(messageId)
  //     return res.send(`${messageId} deleted`)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async getSesssionTopic(req, res, next) {
    try {
      const topic = await sessionService.getSessionTopic(req.params.sessionId)
      return res.send(topic)
    } catch (error) {
      next(error)
    }
  }
}
