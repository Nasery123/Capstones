import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class SessionService {


  async createSession(topic, userId) {

    const sessionData = {
      tutorId: topic.accountId,
      topicId: topic.id,
      studentId: userId
    }

    const session = await dbContext.Sessions.create(sessionData)
    await session.populate('topic')
    await session.populate('tutor student', 'name picture')
    return session
  }

  async getSessionByTutorId(tutorId) {
    const session = await dbContext.Sessions.find({ tutorId }).populate('student', 'name picture')
    return session
  }


  async getSessionsByStudentId(studentId) {
    const session = await dbContext.Sessions.find({ studentId }).populate('tutor', 'name picture')
    return session
  }

  async deleteSessionById(sessionId, userId) {
    const session = await dbContext.Sessions.findById(sessionId)
    if (!session) { throw new BadRequest('Session ${sessionId} does not exist') }
    if (session.studentId != userId) {
      throw new Forbidden("unauthorized to delete this session")
    }
    await session.remove()
    return
  }
  async getSessionById(sessionId) {
    const session = await dbContext.Sessions.findById(sessionId).populate('student topic tutor')
    if (!session) {
      throw new BadRequest('hey this session could not be found')
    }
    return session
  }


  // async getMyStudentSessions(accountId) {
  //   const studentSessions = await dbContext.Sessions.find({ studentId: accountId })
  //   return studentSessions
  // }

  // async getMyTutorSessions(accountId) {
  //   const tutorSessions = await dbContext.Sessions.find({ tutorId: accountId })
  //   return tutorSessions
  // }

  async getSessionTopic(sessionId) {
    const topics = await dbContext.Topics.find({ sessionId: sessionId }).populate('session')
    return topics
  }
  async sessionStatus(sessionId, tutorId, wantsToAccpet) {
    const originalSession = await this.getSessionById(sessionId)
    // if (originalSession.creatorId != tutorId) {
    //   throw new Forbidden('unauthorized to accept / deny request')
    // }

    if (originalSession.status == 'denied') {
      throw new BadRequest("this session has already been denied")
    }
    if (originalSession.status == 'confirmed') {
      throw new BadRequest("this session has already been confiremd")
    }
    // originalSession.studentId = originalSession.studentId
    // originalSession.tutorId = originalSession.tutorId
    // originalSession.sessionId = originalSession.$sessionId

    if (wantsToAccpet) {
      originalSession.status = 'confirmed'

    }
    else {
      originalSession.status = 'denied'

    }




    await originalSession.save()
    return originalSession
  }

  // async sessionDenyStatus(sessionId, tutorId, sessionData) {
  //   const originalSession = await this.getSessionById(sessionId)
  //   if (originalSession.status == 'denied') {
  //     throw new BadRequest("this session has already been denied")
  //   }
  //   if (originalSession.status == 'confirmed') {
  //     throw new BadRequest('this session has already been confiremd')
  //   }
  //   originalSession.status = 'denied' || originalSession.status
  //   await originalSession.save()
  //   return originalSession


  // }



}

export const sessionService = new SessionService()
