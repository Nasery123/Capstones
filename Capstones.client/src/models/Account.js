export class Account extends User {
  constructor(data) {
    super(data)
    this.email = data.email
    // TODO add additional properties if needed
  }
}

export class User{
  constructor(data){
this.id = data.id
this.name = data.name
this.picture = data.picture
this.bio = data.bio 
this.schoolName = data.schoolName
this.isAvailable = data.isAvaialable || true
this.hourlyRate = data.hourlyRate || 5 
this.isTutor = data.isTutor || false 
  }
}

// export class Student {
// constructor(data){
//   this.id = data.id
// this.name = data.name
// this.picture = data.picture
// this.schoolName = data.schoolName
// this.isTutor = data.isTutor || false 
// }
// }
