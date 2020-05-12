const chai = require('chai');
const expect = chai.expect;


const UserRepository = require('../src/UserRepository');

describe('User Repository', function() {
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of a User Repository', function () {
    let userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })
});