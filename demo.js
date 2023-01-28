// var moment = require("moment");
// var unique = require("unique");

// var myDate = new Date();
// var myCoolDate = moment(myDate).format("MMM Do YY");

// var mylist = [1, 2, 1, 1, 1, 1, 3, 3, 4, 5, 6, 4, 4, 6];
// var list = unique(mylist)
// console.log(list);
// console.log("Hello")

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
