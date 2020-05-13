class UserRepository {
  constructor(data) {   
    if (data) {
      this.data = data;     
    }
  }
  getDataById(userId) {
    return this.data.find(element => element.id === userId);
  }
  
  averageUserStepGoal() {
    let average = this.data.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc
    }, 0) / this.data.length;
    return Math.round(average)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}