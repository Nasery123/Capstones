import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class TopicsService {


  async createTopic(topicData) {
    const topic = await dbContext.Topics.create(topicData)
    return topic

  }
  async getTopics(query) {
    const topics = await dbContext.Topics.find(query).populate('tutor')
    //  TODO populate tutor virtual
    return topics
  }

  async getTopicsById(accountId) {
    const topics = await dbContext.Topics.findById(accountId)
    return topics
  }

  async deleteTopic(topicId, userId) {
    const topic = await dbContext.Topics.findById(topicId)
    if (!topic) throw new BadRequest("This Topic Doesn't Exist")
    if (topic.accountId != userId) {
      throw new Forbidden("No way, Jose")
    }
    await topic.remove()
    return
  }

  async getAccountTopics(accountId) {
    const topics = await dbContext.Topics.find({ accountId: accountId }).populate('tutor')
    return topics
  }


}

export const topicsService = new TopicsService()
