import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewsService } from "../services/ReviewsService.js";

export class ReviewsController extends BaseController{ 
  constructor(){
    super('api/reviews')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createReview)
  }
  async createReview(req,res,next) {
    try {
      req.body.studentId = req.userInfo.id
      const review = await reviewsService.createReview(req.body)
      return res.send(review)
    } catch (error) {
      next(error)
      
    }
  }
 
  


}