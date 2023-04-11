const mongoCollections = require('../config/mongoCollections');
const bookdemo = mongoCollections.bookdemo;
const {ObjectId} = require('mongodb');
//const validation = require('../helpers');

const createDemo = async (
    name,
    email,
    contact,
    address,
    scheduleDate,
    scheduleTime
) => {

    //add validations
    const bookDemoCollection = await bookdemo();

    let newDemo = {
        name : name,
        email : email,
        contact : contact,
        address : address,
        scheduleDate : scheduleDate,
        scheduleTime : scheduleTime
    }

    const insertInfo = await bookDemoCollection.insertOne(newDemo);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add details.';
  
    const newId = insertInfo.insertedId.toString();
    //const demo = await getDemoById(newId);
    return newId;
};

const getAllDemos = async () => {
    const bookDemoCollection = await bookdemo();
    const bookDemoList = await bookDemoCollection.find({}).toArray();
    if (!bookDemoList) throw 'Could not get all details.';
    return bookDemoList;
};

const getDemoById = async (bookingDemoId) => {
    let id = bookingDemoId;
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0) throw 'Id cannot be an empty string or just spaces';
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'Invalid object ID';
    const bookDemoCollection = await bookdemo();
    const demo = await bookDemoCollection.findOne({_id: ObjectId(id)});
    if (demo === null) throw 'No booking with that id';
    return demo;
};



module.exports = {
    createDemo,
    getAllDemos,
    getDemoById
};