class User {
	constructor(userData) {
		if (userData) {
			this.id = userData.id,
			this.name = userData.name,
			this.address = userData.address,
			this.email = userData.email,
			this.strideLength = userData.strideLength,
			this.dailyStepGoal = userData.dailyStepGoal,
			this.friends = userData.friends
}}
  
  returnFirstName() {
    let name = this.name.split(' ');
    return name[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}