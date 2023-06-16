import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { topicsService } from "../services/TopicsService.js";

export class TopicsController extends BaseController{
  constructor(){
    super('api/topics')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createTopic)
  }


  async createTopic(req,res,next){
    try {
      req.body.accountId= req.userInfo.id

      const topic = await topicsService.createTopic(req.body)
      res.send(topic)
    } catch (error) {
      
    }
  }
  
}