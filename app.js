// Setting up server

//var startTime = performance.now();

const express = require('express');
const app = express();
const configRoutes = require('./routes');
const bookdemo = require('./data/bookdemo');
const connection = require('./config/mongoConnection');

app.use(express.json());
configRoutes(app);


app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});

const main = async () => {
  const db = await connection.dbConnection();
  await db.dropDatabase();

  try{
    let demo1 = await bookdemo.createDemo("Jahnavi", "jahnavi@gmail.com", "6462886335", "186 Kensington Avenue", "4/12/2023", "14:30");
    console.log('Your reference ID is : ' + demo1);
  } catch(e) {
  console.log(e);
  }

  try{
    let demo1 = await bookdemo.createDemo("James", "james@gmail.com", "6462000099", "382 Ogden Avenue", "4/15/2023", "10:30");
    console.log('Your reference ID is : ' + demo1);
  } catch(e) {
  console.log(e);
  }

  try{
    let demo1 = await bookdemo.createDemo("Jhones", "jhones@gmail.com", "5516566390", "786 Lincoln Street", "5/1/2023", "09:00");
    console.log('Your reference ID is : ' + demo1);
  } catch(e) {
  console.log(e);
  }

  await connection.closeConnection();
  console.log('Done!'); 
};

main();

//var endTime = performance.now();
//console.log(`Call to do Something took ${endTime - startTime} milliseconds`);
