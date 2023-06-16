import { dbContext } from "../db/DbContext.js"

 class TopicsService{

  async createTopic(topicData){
    const topic = await dbContext.Topics.create(topicData)
    return topic 

  }


 }

export const topicsService = new TopicsService()