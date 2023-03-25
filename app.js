// Setting up server
var startTime = performance.now();

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
      let demo1 = await bookdemo.createDemo("Jahnavi", "jahnavi@gmail.com", "9000142462", "186 Kensington Avenue", "3/7/2023", "14:30");
      console.log('Your reference ID is : ' + demo1);
    } catch(e) {
    console.log(e);
  }

  await connection.closeConnection();
    console.log('Done!'); 
};

main();

var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);