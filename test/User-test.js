const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const User = require('../src/User');
const testUserData = require('../data/user-test-data.js')

describe('User', function() {
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of a User', function () {
    let user = new User(testUserData);
    expect(user).to.be.an.instanceof(User);
  });

  it('should not require an argument to create a new User', () => {
    expect(() => {
      new User() 
    }).to.not.throw(Error);
  });

  it('should not require a property to create a new User', function () {
    let user = new User(testUserData);
    assert.equal(user.name, undefined)
    assert.equal(user.dailyStepGoal, undefined)
  });
   
  it('should know the user Id', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.id).to.equal(1)
  });

  it('should know the user name', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.name).to.equal('Luisa Hane')
  });

  it('should know the email', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com')
  });

  it('should know the users stride length', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.strideLength).to.equal(4.3)
  });

  it('should know the users daily step goal', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.dailyStepGoal).to.equal(10000)
  });

  it('should know the users friends', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.friends).to.deep.equal([16, 4, 8])
  });

  it('should be able to return the first name', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('Luisa')
  });

  it('should be able to return the first name even if there is an apostrophe ', function() {
    let user = new User(testUserData[0]);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('Luisa')
  });

  it('should be able to return the first name, even if there is a middle name listed', function() {
    let user = new User(testUserData[1]);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('Jarvis')
  });
  
});