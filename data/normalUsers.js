//import mongo collections, bcrypt and implement the following data functions
//took reference from lab6
import {Router} from 'express';
import {ObjectId} from 'mongodb';
import {normalUsers} from '../config/mongoCollections.js'
import { bookDemos } from '../config/mongoCollections.js';
import helpers from '../helpers.js'

import bcrypt from 'bcryptjs';

const saltRounds = 12;

const router = Router();

export const bookDemo = async (name,
  emailAddress,
  phoneNumber,
  address,
  scheduleDate,
  scheduleTime) => {

  console.log("Book Demo Data method is called!");

  try {
    
    let bookDemoData = {
      _id: new ObjectId(),
      name: name, 
      emailAddress: emailAddress, 
      phoneNumber: phoneNumber, 
      address: address, 
      scheduleDate: scheduleDate, 
      scheduleTime: scheduleTime}
  
    const bookDemoCollection = await bookDemos();
  
    const insertInfo = await bookDemoCollection.insertOne(bookDemoData);

    if (!insertInfo.acknowledged || !insertInfo.insertedId.toString()){
      throw 'Could not record Booking Details';
    }

    let refID =  bookDemoData._id.toString()
    console.log("Successfully recorded : ", refID);

    return {referenceID: refID};

  } catch (error) {
    
    throw error;
  }




};

export const createUser = async (
  userType,
  firstName,
  middleName,
  lastName,
  emailAddress,
  phoneNumber,
  address,
  city,
  state,
  country,
  dob,
  password
) => {

  console.log("Create User function of signup is called!!");
  console.log({ userType: userType, firstName: firstName, middleName: middleName, lastName: lastName, emailAddress: emailAddress, phoneNumber: phoneNumber, address: address, city: city, state: state, country: country, dob: dob, password: password});
  
  //check if inputs are empty or not



  try {

    
    
 
    //checking if this valid email id is already a user or not in our db
    const usersCollection = await normalUsers();
    const user = await usersCollection.findOne({emailAddress});

    if(user){
      throw `The email address - ${emailAddress} that you used to register as primary user, already exist! please recheck your email and try registering, or else try loggin in if you already have an account as a primary user!`
    }

    //Used professor's lecture code for password hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //since everything went well and nothing blew up !!so i will push it to the db

    let normalUserData = {
      _id: new ObjectId(),
      firstName: firstName, 
      middleName: middleName, 
      lastName: lastName, 
      emailAddress: emailAddress,
      phoneNumber: phoneNumber, 
      address: address,
      city: city, 
      state: state, 
      country: country, 
      dob: dob,
      role: userType,
      password: hashedPassword,
    }

    const insertInfo = await usersCollection.insertOne(normalUserData);

    if (!insertInfo.acknowledged || !insertInfo.insertedId){
      throw 'Could not add user';
    }

    

    return normalUserData._id.toString();


  } catch (error) {
    throw error;
  }


};

export const checkUser = async (emailAddress, password) => {

  try {

    emailAddress = helpers.checkEmptyInputString(emailAddress, "Email Address");
    emailAddress.toLowerCase();
    helpers.checkEmptyInputString(password, "Password");

    helpers.checkValidEmail(emailAddress);
    helpers.checkValidPassword(password);

    //since nothing blew up till here, let's query the db to check if an user collection with given email is present or not

    const usersCollection = await normalUsers();
    const user = await usersCollection.findOne({emailAddress});

    if(!user){
      throw `Either the email address or password is invalid`
    }

    //took the code from professor's lecture code
    let compareToMatch = await bcrypt.compare(password, user.password);

    if (compareToMatch) {
      console.log('The passwords match.. this is good');
      return {_id: user._id.toString(), firstName: user.firstName, middleName: user.middleName, lastName: user.lastName, emailAddress: user.emailAddress, phoneNumber: user.phoneNumber, address:user.address, city: user.city, state: user.state, country: user.country, dob: user.dob, role: user.role}
    } else {
      //console.log('The passwords do not match, this is not good, they should match');
      throw `Either the email address or password is invalid`
    }

    //return {firstName: user.firstName, lastName: user.lastName, emailAddress: user.emailAddress, role: user.role}



  } catch (error) {
    throw error;
  }

};

//confirm with TAs if this additional code is required since we are already exporting functions individually
export default {bookDemo,createUser,checkUser}