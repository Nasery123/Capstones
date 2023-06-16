import { dbContext } from "../db/DbContext.js"
import { profileService } from '../services/ProfileService.js'
import { reviewsService } from "../services/ReviewsService.js"
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .get('/:profileId/reviews', this.getTutorReviews)
      .get('/:profileId/topics', )
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }
  async getTutorReviews(req, res, next){
    try {
      const reviews = await reviewsService.getTutorReviews(req.params.tutorId)
      res.send(reviews)
    } catch (error) {
      next(error)
    }

  }
}
