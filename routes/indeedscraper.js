const indeed = require('indeed-scraper');
const router = require("express").Router();

// const queryOptions = {
//     host: 'www.indeed.com',
//     query: 'Software',
//     city: 'Seattle, WA',
//     radius: '25',
//     level: 'entry_level',
//     jobType: 'fulltime',
//     maxAge: '7',
//     sort: 'date',
//     limit: 100
// };

router.get("/", function (req, res) {
    const newObj = JSON.parse(req.query.queryOptions)
    indeed.query(newObj).then(result => {
        res.json(result); // An array of Job objects
        console.log(result);

    });
    console.log(req.query.queryOptions);
    // console.log(req.body);
    // console.log(req.params);

})


module.exports = router;