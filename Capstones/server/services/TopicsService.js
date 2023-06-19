import { dbContext } from "../db/DbContext.js"

 class TopicsService{
  

  async createTopic(topicData){
    const topic = await dbContext.Topics.create(topicData)
    return topic 

  }
   async getTopics(query) {
   const topics = await dbContext.Topics.find(query)
  //  TODO populate tutor virtual
   return topics
  }


 }

export const topicsService = new TopicsService()