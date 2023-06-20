import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { sessionService } from "../services/SessionService.js"


export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/student/sessions', this.getStudentSessions)
      .get('/tutor/sessions', this.getTutorSessions)
      .put('', this.updateAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  

  async getStudentSessions(req,res,next){
    try {
      const studentSessions = await sessionService.getMyStudentSessions(req.userInfo.id)
      res.send(studentSessions)
    } catch (error) {
      next(error)  
      }
  }

  async getTutorSessions(req,res,next){
    try {
      const tutorSessions = await sessionService.getMyTutorSessions(req.userInfo.id)
      res.send(tutorSessions)
    } catch (error) {
      next(error)
    }
  }

  async updateAccount(req, res, next){
    try {
      const editProfile = await accountService.updateAccount(req.userInfo, req.body)
      res.send(editProfile)
    } catch (error) {
      next(error)
    }
  }

//  getReviewsByTutorId(req,res,next) {
//     try {
//       const review = 
//       res.send(review)

//     } catch (error) {
//       next(error)
//     }
//   }
}
