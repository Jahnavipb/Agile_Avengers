// Setting up server

//var startTime = performance.now();

const express = require('express');
const configRoutes = require('./routes');
const bookdemo = require('./data/bookdemo');
const { dbConnection, closeConnection } = require('./config/mongoConnection');

const app = express();
const port = 3000;

app.use(express.json());
configRoutes(app);

const createDemo = async (name, email, phone, address, date, time) => {
  try {
    const demo = await bookdemo.createDemo(name, email, phone, address, date, time);
    console.log('Your reference ID is : ' + demo);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();

  await createDemo("Jahnavi", "jahnavi@gmail.com", "6462886335", "186 Kensington Avenue", "4/12/2023", "14:30");
  await createDemo("James", "james@gmail.com", "6462000099", "382 Ogden Avenue", "4/15/2023", "10:30");
  await createDemo("Jhones", "jhones@gmail.com", "5516566390", "786 Lincoln Street", "5/1/2023", "09:00");

  await closeConnection();
  console.log('Done!');
};

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

main();
