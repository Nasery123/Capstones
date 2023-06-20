import { AppState } from "../AppState.js"
import { Topic } from "../models/Topic.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TopicService{
 async searchTutor(searchSubject){
    logger.log('search subject', searchSubject)
    // const res = await api.get(`api/topics?subject=${searchSubject}`)
    const res = await api.get('api/topics',{
      params:{subject:searchSubject}
    })
    AppState.query = searchSubject
    logger.log(res.data, '[here is topics]')
    AppState.topics = res.data.map(t => new Topic(t))
    // AppState.tutors = res.data.map(t => new Tutor(t))

  }
}
export const topicsService = new TopicService()