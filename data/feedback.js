//import mongo collections, bcrypt and implement the following data functions
//took reference from lab6'
//use users.js to complete this
import {Router} from 'express';
import {ObjectId} from 'mongodb';
import { feedbacks } from '../config/mongoCollections.js';
import helpers from '../helpers.js'

import bcrypt from 'bcryptjs';

const saltRounds = 12;

const router = Router();



export const createFeedback = async (
    navigation,
    findInfo,
    encounterIssues,
    bookingSatisfaction,
    bookingExperience,
    websiteSatisfaction,
    recommendation,
    suggestions,
) => {

  console.log("Create feedback data function is called!!");
  
  

  try {

    let feedbackData = {
        _id: new ObjectId(),
        navigation: navigation,
        findInfo: findInfo,
        encounterIssues: encounterIssues,
        bookingSatisfaction: bookingSatisfaction,
        bookingExperience: bookingExperience,
        websiteSatisfaction: websiteSatisfaction,
        recommendation: recommendation,
        suggestions: suggestions,
    
      }

    const feedbacksCollection = await feedbacks();
  
    const insertInfo = await feedbacksCollection.insertOne(feedbackData);

    if (!insertInfo.acknowledged || !insertInfo.insertedId.toString()){
      throw 'Could not record Feedback Details';
    }

    let refID =  feedbackData._id.toString()
    console.log("Successfully recorded : ", refID);

    return {referenceID: refID};
    
  } catch (error) {
    error
  }
  

};


//confirm with TAs if this additional code is required since we are already exporting functions individually
export default {createFeedback}