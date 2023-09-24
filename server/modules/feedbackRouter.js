// feedbackRouter.js

const { error } = require('console');
const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.post('/', (req,res)=> {
    console.log('in the feedback POST', req.body);
    // const feedbackToAdd = req.body;
    let queryText = 
    'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);'
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error)=> {
        console.log(error);
        res.sendStatus(500);
});
});

module.exports = router;