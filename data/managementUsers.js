import {Router} from 'express';
import {ObjectId} from 'mongodb';
import {normalUsers} from '../config/mongoCollections.js'
import { bookDemos } from '../config/mongoCollections.js';
import { solarSelection } from '../config/mongoCollections.js';
import { managementUsers } from '../config/mongoCollections.js';
import { approvedRequests } from '../config/mongoCollections.js';
import helpers from '../helpers.js'

import bcrypt from 'bcryptjs';

const saltRounds = 12;

const router = Router();

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
  
    console.log("Create User function of Management is called!!");
    console.log({ userType: userType, firstName: firstName, middleName: middleName, lastName: lastName, emailAddress: emailAddress, phoneNumber: phoneNumber, address: address, city: city, state: state, country: country, dob: dob, password: password});
    
    //check if inputs are empty or not
  
  
  
    try {
  
      
      
   
      //checking if this valid email id is already a user or not in our db
      const usersCollection = await managementUsers();
      const user = await usersCollection.findOne({emailAddress});

  
      if(user){
        throw `The email address - ${emailAddress} that you used to register as Management user, already exist! please recheck your email and try registering, or else try loggin in if you already have an account as a Management user!`
      }
  
      //Used professor's lecture code for password hashing
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      //since everything went well and nothing blew up !!so i will push it to the db
  
      let managementUserData = {
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
        password: hashedPassword
      }
  
      const insertInfo = await usersCollection.insertOne(managementUserData);
  
      if (!insertInfo.acknowledged || !insertInfo.insertedId){
        throw 'Could not add user';
      }
  
      
  
      return managementUserData._id.toString();
  
  
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
  
      const usersCollection = await managementUsers();
      const user = await usersCollection.findOne({emailAddress});
  
      if(!user){
        throw `Either the email address or password is invalid`
      }
  
      //took the code from professor's lecture code
      let compareToMatch = await bcrypt.compare(password, user.password);
  
      if (compareToMatch) {
        console.log('The passwords match.. this is good');
        user._id = user._id.toString()
        return user;
      } else {
        //console.log('The passwords do not match, this is not good, they should match');
        throw `Either the email address or password is invalid`
      }
  
      //return {firstName: user.firstName, lastName: user.lastName, emailAddress: user.emailAddress, role: user.role}
  
  
  
    } catch (error) {
      throw error;
    }
  
  };

  export const addApprovedRequest = async (emailAddress, selectionList) => {
    try {
        const approvedRequestCollection = await approvedRequests();
        let approvedReqData = {
            _id: new ObjectId(),
            userID: emailAddress,
            selectionList: selectionList
        }
        const approvedObj = await approvedRequestCollection.insertOne(approvedReqData);

  
      return approvedReqData._id.toString();
    } catch (error) {
      throw error;
    }
  };

  export const viewAllApprovedRequests = async () => {
    try {
        const approvedRequestCollection = await approvedRequests();
        
        const approvedList = await approvedRequestCollection.find({}).toArray();

        for(let i=0; i<approvedList.length; i++){
            approvedList[i]._id = approvedList[i]._id.toString();
        }

  
      return approvedList;
    } catch (error) {
      throw error;
    }
  };






  export default {createUser, checkUser, addApprovedRequest, viewAllApprovedRequests}