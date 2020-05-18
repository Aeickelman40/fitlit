const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const UserRepository = require('../src/UserRepository');
const testUserData = require('../data/user-test-data.js')

describe('User Repository', function() {
  let userRepository;
  beforeEach(() => {
    userRepository = new UserRepository(testUserData);
  });
  
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of a User Repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should have a parameter of user data', function() {
    expect(userRepository.data).to.equal(testUserData);
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
    expect(userRepository.getDataById(1)).to.equal(testUserData[0]);
  })

  it('should average all users step goal', function() {
    expect(userRepository.averageUserStepGoal()).to.equal(6200);
  })
});