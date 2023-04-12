const{ bookdemo } = require('./config/mongoCollections');
const connection = require('./config/mongoConnection');
const index = require('./data/index');

const main = async () => {
    const db = await connection.dbConnection();
    db.dropDatabase();

    try{
        let demo1 = await bookdemo.createDemo("Jahnavi", "jahnavi@gmail.com", "6462886335", "13 Cornelia Street", "4/13/2023", "13:30");
        console.log('Your reference ID is : ' + demo1);
      } catch(e) {
      console.log(e);
    }


    









    connection.closeConnection();

}

main();