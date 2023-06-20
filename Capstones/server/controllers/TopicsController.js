import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { topicsService } from "../services/TopicsService.js";

export class TopicsController extends BaseController {
  constructor() {
    super('api/topics')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTopic)
      .get('', this.getTopics)
      .delete('/:topicId', this.deleteTopic)
  }
  async createTopic(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id

      const topic = await topicsService.createTopic(req.body)
      res.send(topic)
    } catch (error) {
      next(error)
    }
  }
  async getTopics(req, res, next) {
    try {
      const query = req.query
      const topics = await topicsService.getTopics(query)
      res.send(topics)
    } catch (error) {
      next(error)
    }
  }

  async deleteTopic(req, res, next) {
    try {
      const topicId = req.params.topicId
      const userId = req.userInfo.id
      await topicsService.deleteTopic(topicId, userId)
      return res.send(`${topicId} deleted`)
    } catch (error) {
      next (error)
    }
  }
}
