// import { applyStyles } from "@popperjs/core/index.js"
import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Topic } from "../models/Topic.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TopicService {
  async searchTutor(searchSubject) {
    logger.log('search subject', searchSubject)
    // const res = await api.get(`api/topics?subject=${searchSubject}`)
    const res = await api.get('api/topics', {
      params: { subject: searchSubject }
    })
    AppState.query = searchSubject
    logger.log(res.data, '[here is topics]')
    AppState.topics = res.data.map(t => new Topic(t))
    // AppState.tutors = res.data.map(t => new Tutor(t))

  }

  async createTopic(formData) {
    const res = await api.post('api/topics', formData)
    logger.log('CREATING TOPIC', res.data)
    AppState.topics = AppState.topics.filter(t => new Topic(res.data))
  }

  async getMyTopics() {
    const res = await api.get(`account/topics`)
    logger.log('[GETTING MY TOPICS]', res.data)
    // AppState.myTopics = res.data
    AppState.myTopics = res.data.filter(t => t.id == AppState.account.id)
  }
}
export const topicsService = new TopicService()
