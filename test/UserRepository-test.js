const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const UserRepository = require('../src/UserRepository');
// const userData = require('../data/users.js');
// const testData = require('../data/test-data');

describe('User Repository', function() {
  let userRepository;
  beforeEach(() => {
    testData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          2,
          3
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          1,
          3
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          1,
          2
        ]
      }
    ]
    userRepository = new UserRepository(testData);
  });
  
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of a User Repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should have a parameter of user data', function() {
    expect(userRepository.data).to.equal(testData);
  })

  it('should not require a property to create a new User Repository', function () {

    let userRepository = new UserRepository();
    assert.equal(userRepository.data, undefined);
  })

  it('should log an error if no user data is passed in', function() {
    userRepository = new UserRepository();
    expect(userRepository.data).to.equal(undefined)
  })

  it('should find user data based on their ID', function() {
    expect(userRepository.getDataById(1)).to.equal(testData[0]);
  })

  it('should average all users step goal', function() {
    expect(userRepository.averageUserStepGoal()).to.equal(6667);
  })
});