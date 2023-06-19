

export class Profile{
  constructor(data){
this.id = data.id
this.name = data.name
this.picture = data.picture
this.bio = data.bio 
this.schoolName = data.schoolName

this.isAvailable = data.isAvaialable || true
this.hourlyRate = data.hourlyRate
this.isTutor = data.isTutor || false 
  }
}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
    // TODO add additional properties if needed
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
