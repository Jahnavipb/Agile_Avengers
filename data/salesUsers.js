import {Router} from 'express';
import {ObjectId} from 'mongodb';
import {salesUsers} from '../config/mongoCollections.js'
import { bookDemos } from '../config/mongoCollections.js';
import { solarSelection } from '../config/mongoCollections.js';
import { normalUsers } from '../config/mongoCollections.js';
import { approvalRequests } from '../config/mongoCollections.js';
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
  
    console.log("Create User function of signup is called!!");
    console.log({ userType: userType, firstName: firstName, middleName: middleName, lastName: lastName, emailAddress: emailAddress, phoneNumber: phoneNumber, address: address, city: city, state: state, country: country, dob: dob, password: password});
    
    //check if inputs are empty or not
  
  
  
    try {
  
      
      
   
      //checking if this valid email id is already a user or not in our db
      const usersCollection = await salesUsers();
      const user = await usersCollection.findOne({emailAddress});

  
      if(user){
        throw `The email address - ${emailAddress} that you used to register as Sales user, already exist! please recheck your email and try registering, or else try loggin in if you already have an account as a Sales user!`
      }
  
      //Used professor's lecture code for password hashing
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      //since everything went well and nothing blew up !!so i will push it to the db
  
      let salesUserData = {
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
  
      const insertInfo = await usersCollection.insertOne(salesUserData);
  
      if (!insertInfo.acknowledged || !insertInfo.insertedId){
        throw 'Could not add user';
      }
  
      
  
      return salesUserData._id.toString();
  
  
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
  
      const usersCollection = await salesUsers();
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


  export const viewAllBookings = async () => {
    try {
      const bookDemoCollection = await bookDemos();
      const bookings = await bookDemoCollection.find({}).toArray();
  
      for (let i = 0; i < bookings.length; i++) {
        bookings[i]._id = bookings[i]._id.toString();
      }
  
      return bookings;
    } catch (error) {
      throw error;
    }
  };

  export const viewAllCustomers = async () => {
    try {
      const normalUsersCollection = await normalUsers();
      const customers = await normalUsersCollection.find({}).toArray();
  
      for (let i = 0; i < customers.length; i++) {
        customers[i]._id = customers[i]._id.toString();
      }
  
      return customers;
    } catch (error) {
      throw error;
    }
  };

  export const getUser = async (emailAddress) => {
    try {
      const normalUsersCollection = await normalUsers();
      const customer = await normalUsersCollection.findOne({emailAddress: emailAddress})
  
      customer._id = customer._id.toString();
  
      return customer;
    } catch (error) {
      throw error;
    }
  };

  export const getUserSelection = async (emailAddress) => {
    try {
        const solarSelectionCollection = await solarSelection();
        const solar = await solarSelectionCollection.findOne({userID: emailAddress});
  
        solar._id = solar._id.toString();
  
      return solar;
    } catch (error) {
      throw error;
    }
  };

  export const addApprovalRequest = async (emailAddress, selectionList) => {
    try {
        const approvalRequestCollection = await approvalRequests();
        let approvalReqData = {
            _id: new ObjectId(),
            userID: emailAddress,
            selectionList: selectionList
        }
        const approvalObj = await approvalRequestCollection.insertOne(approvalReqData);

  
      return approvalReqData._id.toString();
    } catch (error) {
      throw error;
    }
  };

  export const viewAllApprovalRequests = async () => {
    try {
        const approvalRequestCollection = await approvalRequests();
        
        const approvalList = await approvalRequestCollection.find({}).toArray();

        for(let i=0; i<approvalList.length; i++){
            approvalList[i]._id = approvalList[i]._id.toString();
        }

  
      return approvalList;
    } catch (error) {
      throw error;
    }
  };

  export const isApprovalPresent = async (emailAddress) => {
    try {
        const approvalRequestCollection = await approvalRequests();
        
        const approval = await approvalRequestCollection.findOne({userID: emailAddress});

        if(approval){
            return true;
        }else {
            return false
        }

    } catch (error) {
      throw error;
    }
  };

  export const updateProgressScore = async (emailAddress, value, installation, agreement, inspected, finished) => {
    try {
        const userCollections = await normalUsers();
        
        const updatedUser = await userCollections.updateOne(
            { emailAddress: emailAddress },
            { $set: { progress: value, installation: installation, agreement: agreement, inspected: inspected, finished: finished} }
          );

          const usr = await userCollections.findOne({emailAddress:emailAddress})
          usr._id = usr._id.toString();
        return usr;

    } catch (error) {
      throw error;
    }
  };




  
  

  export default {createUser, checkUser, viewAllBookings, viewAllCustomers, getUser, getUserSelection, addApprovalRequest, viewAllApprovalRequests, isApprovalPresent, updateProgressScore}