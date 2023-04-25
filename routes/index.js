const homepage = require('./homepage.js');
//const signin = require('./signin.js');
const signupRoutes = require('./signupRoutes.js');
//const bookDemo = require('./bookdemo.js');
//import signupRoutes from './signupRoutes.js';

const constructorMethod = (app) => {
   app.use('/', homepage);  
    //app.use('/signup',signupRoutes);
   // app.use('/signin', signin); 
   // app.use('/signup', signup); 
   // app.use('/bookdemo', bookDemo);

};

module.exports = constructorMethod;