import { dbContext } from "../db/DbContext.js"

  class TopicsService{
  

  async createTopic(topicData){
    const topic = await dbContext.Topics.create(topicData)
    return topic 

  }
  async getTopics(query) {
  const topics = await dbContext.Topics.find(query).populate('tutor')
  //  TODO populate tutor virtual
  return topics
  }

  async findSessionTopic(sessionId) {
    const topics = await dbContext.Topics.find({sessionId: sessionId}).populate('session creator')
    return topics
  }


}

export const topicsService = new TopicsService()