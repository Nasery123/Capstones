export class Session{

  constructor(data){
 this.studentId = data.studentId 
 this.tutorId=data.tutorId
 this.topicId = data.topicId
 this.isCompleted = data.isCompleted || false
 this.isConfirmed=data.isConfirmed || 'pending'
 this.description = data.description 

  }
}
