const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const User = require('../src/User');

describe('User', function() {
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of a User', function () {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
  });
  
  
  it('should know the user Id', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.id).to.equal(1)
  });

  it('should know the user name', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.name).to.equal('Luisa Hane')
  });

  it('should know the email', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com')
  });

  it('should know the users stride length', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.strideLength).to.equal(4.3)
  });

  it('should know the users daily step goal', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.dailyStepGoal).to.equal(10000)
  });

  it('should know the users friends', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.friends).to.deep.equal([16, 4, 8])
  });

  it('should be able to return the first name', function() {
    let userData =   {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('Luisa')
  });
});