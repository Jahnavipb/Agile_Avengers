const homepage = require('./homepage.js');
//const signin = require('./signin.js');
//const signup = require('./signup.js');
//const bookDemo = require('./bookdemo.js');


const constructorMethod = (app) => {
    app.use('/', homepage);  
   // app.use('/signin', signin); 
   // app.use('/signup', signup); 
   // app.use('/bookdemo', bookDemo);

};

module.exports = constructorMethod;