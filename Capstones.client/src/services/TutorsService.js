import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TutorsService{





  async searchTutor(searchSubject){
    logger.log('search subject', searchSubject)
    // const res = await api.get(`api/topics?subject=${searchSubject}`)
    const res = await api.get('api/topics',{
      params:{subject:searchSubject}
    })
    AppState.query = searchSubject
    logger.log(res.data, '[here is topics]')
    // AppState.tutors = res.data.map(t => new Tutor(t))

  }
}
export const tutorsService = new TutorsService()