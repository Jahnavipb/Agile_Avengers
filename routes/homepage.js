const express = require('express');
const router = express.Router();
//const index = require('../data/index');
const path = require('path');


router.use(express.static(__dirname));

// define the home page route
router.get('/', (req, res) => {
    res.sendFile("homepage.html", {root: path.join(__dirname, '../static')});
  
})

// router.route('/')
// .get(async (req, res) => {
//     if (!req.session.user) {
//         res.redirect('/');
//     } 
    // else {
    //     if(req.session.user.userType=='customer'){
    //         res.redirect('/signin'); //change
    //     }
    //     else{
    //         res.redirect('/signin'); //change
    //     }
    // }
    // res.redirect('/signin');
// })



module.exports = router;