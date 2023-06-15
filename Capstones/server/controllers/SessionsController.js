import { sessionService } from "../services/SessionService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class SessionsController extends BaseController{ 
 constructor(){
  super('api/sessions')
  this.router 
  .use (Auth0Provider.getAuthorizedUserInfo)
  .post('', this.createSession)
  // .get('/:tutorId', this.getSessionsByTutorId )
  // .get('/:studentId', this.getSessionsByStudentId)
  .delete('/:sessionId', this.deleteSessionById)
}
  
  

  
  


async createSession(req,res,next) {
 try {
  req.body.studentId = req.userInfo.id
   const session= await sessionService.createSession(req.body)
   
   return res.send(session)


 } catch (error) {
  next(error)
 }
}
// async getAllTutorsByTopicId(req,res,next){
//   try {
//     const res = await sessionService.getAllSessionsByTopicId
//   } catch (error) {
//     next(error)
//   }
// }

//   async getSessionsByTutorId(req, res,next) {
//     try {
//      const session = await sessionService.getSessionByTutorId(req.params.tutorId)

// return res.send(session)

//     } catch (error) {
//       next(error)
//     }
//   }

  async getSessionsByStudentId(req,res,next) {
    try {
      const session = await sessionService.getSessionsByStudentId(req.params.studentId)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }
  async deleteSessionById(req,res,next) {
    try {
      const userId = req.userInfo.id
      const sessionId= req.params.sessionId 
      
      await sessionService.deleteSessionById(sessionId,userId)
      return res.send(`Session at ${sessionId} was deleted`)
    } catch (error) {
      next(error)
    }
  }
}
