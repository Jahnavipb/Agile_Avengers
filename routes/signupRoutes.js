//import {Router} from 'express';
// import { Router, request } from "express";
// const router = Router();

// router.route('/').post(async (res,req)=>
// {
//     console.log("Signup is called")
// })
// export default router;


const express = require("express");
const router = express.Router();

router.route('/').post(async (req, res) => {
    console.log("Signup is called");
});

module.exports = router;
