import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class SessionService {
  
 
  
  async createSession(sessionData) {
    const session = await dbContext.Sessions.create(sessionData)
    await session.populate('tutor student topic')
    return session 
  }

  async getSessionByTutorId(tutorId) {
    const session = await dbContext.Sessions.find(tutorId).populate('tutor')
    return session
  }


   async getSessionsByStudentId(studentId) {
  const session = await dbContext.Sessions.find(studentId).populate('student')
  return session
  }

  async deleteSessionById(sessionId, userId){
   const session = await dbContext.Sessions.findById(sessionId)
   if(!session){throw new BadRequest('Session ${sessionId} does not exist')}
if (session.studentId != userId){
  throw new Forbidden("unauthorized to delete this session")
}
await session.remove()
return
  }


  async getMyStudentSessions(accountId){
    const studentSessions = await dbContext.Sessions.find({studentId:accountId})
    return studentSessions
  }

  async getMyTutorSessions(accountId){
    const tutorSessions = await dbContext.Sessions.find({tutorId:accountId})
    return tutorSessions
  }

  async getSessionTopic(sessionId) {
    const topics = await dbContext.Topics.find({sessionId: sessionId}).populate ('session')
    return topics
  }

}

export const sessionService = new SessionService()