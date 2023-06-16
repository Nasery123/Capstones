import { dbContext } from "../db/DbContext.js"

class ReviewsService{
 
  async createReview(reviewData) {
    const review = await dbContext.Reviews.create(reviewData)
    await review.populate('student')
    return review
    
  }
  async getTutorReviews(tutorId) {
    const reviews = await dbContext.Reviews.find(tutorId).populate('tutor student')
    return reviews 
       
  }



}

export const reviewsService = new ReviewsService()