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


     try{
        let demo2 = await bookdemo.createDemo("SinduPabba", "sindupabba22@gmail.com", "5513447595", "19 Hancock Ave", "4/01/2023", "20:00");
        console.log('Your reference ID is : ' + demo2);
      } catch(e) {
      console.log(e);
    }
    
     try{
        let demo3 = await bookdemo.createDemo("James", "james@gmail.com", "5513447777", "59 Ogden Ave", "4/21/2023", "15:30");
        console.log('Your reference ID is : ' + demo3);
      } catch(e) {
      console.log(e);
    }











    connection.closeConnection();

}

main();
