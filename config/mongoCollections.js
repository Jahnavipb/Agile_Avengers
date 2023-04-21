const dbConnection = require('./mongoConnection');

const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection.dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
    // add or change collections as required 
    bookdemo: getCollectionFn('bookdemo'),
    signin: getCollectionFn('signin'),
    signup: getCollectionFn('signup')
};