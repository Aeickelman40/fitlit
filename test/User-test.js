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

  it('should not require an argument to create a new User', () => {
    expect(() => { new User() }).to.not.throw(Error);
  });

  it('should not require a property to create a new User', function () {
  let userData =   {
    "id": 1,

    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    
    "friends": [
      16,
      4,
      8
    ]
  }

  let user = new User(userData);
  assert.equal(user.name, undefined)
  assert.equal(user.dailyStepGoal, undefined)
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

  it('should be able to return the first name even if there is an apostrophe ', function() {
    let userData =  {
      "id": 45,
      "name": "Jennie O'Hara",
      "address": "492 Stracke Mews, East Jazlyn OH 58002-5475",
      "email": "Elenor.Block12@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 7000,
      "friends": [
        35,
        39,
        31,
        25,
        33
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('Jennie')
  });

  it('should be able to return the first name, even if there is a middle name listed', function() {
    let userData =  {
      "id": 45,
      "name": "William John Wilke",
      "address": "492 Stracke Mews, East Jazlyn OH 58002-5475",
      "email": "Elenor.Block12@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 7000,
      "friends": [
        35,
        39,
        31,
        25,
        33
      ]
    }

    let user = new User(userData);
    expect(user).to.be.an.instanceof(User);
    expect(user.returnFirstName()).to.equal('William')
  });
  
});