// require express
const express = require('express');
// create a new router
const router = express.Router();

router.get("/", (req, res) => {
    
    res.json({
        status: "success",
         message: "GET messages",
         //data: []
        });
    } );


router.post("/", (req, res) => {
        let message = req.body.message; // json pak dat binnenkomt
        res.json({
            status: "success",
            message: `POST ${message}`,
            //data: []
            });
        } );

module.exports = router;