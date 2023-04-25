const mongoCollections = require('../config/mongoCollections');
const signup = mongoCollections.signup;
const {ObjectId} = require('mongodb');

const  createUser = async (
    userType, 
    nameInput, 
    email, 
    password, 
    phone
  ) => {
  const signupCollection = await signup();

  let newUser = {
      _id : new ObjectId(),
      name : nameInput,
      email : email,
      phone : phone,
      userType : userType,
      password : password
  }

  const insertInfo = await signupCollection.insertOne(newUser);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw 'Could not add user.';

  const newId = insertInfo.insertedId.toString();
  //const demo = await getDemoById(newId);
  return newId;

}

module.exports = {
    createUser
};