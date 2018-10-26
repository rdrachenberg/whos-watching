var express = require("express");
var router = express.Router();
var db = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq
}

// Import the model (index.js) to use its database functions.
var student = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.redirect("/students");
});

router.get("/students", function (req, res) {
    // replace old function with sequelize function
    db.Student.findAll({
        include: [db.SampleData],
        
    // Here we specify we want to return our burgers in ordered by ascending burger_name
        order: [
            ["last_name", "ASC"]
            ]
        })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            return res.render("index", hbsObject);
        });
});

router.get("/students/sort/id/:id", function (req, res) {
    db.SampleData.findAll({

            where: {
                id: [req.params.id]
            },
            include: [db.Student],

            // Here we specify we want to return our burgers in ordered by ascending burger_name
            // order: [
            //     ["last_name", "ASC"]
            //     ]
        })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);

            return res.render("index", hbsObject);
        })
});

router.get("/students/sort/:zip", function (req, res) {
    db.SampleData.findAll({
        
        where: {
            ZIP: [req.params.zip]
        },
        include: [db.Student],
        
    // Here we specify we want to return our burgers in ordered by ascending burger_name
        // order: [
        //     ["last_name", "ASC"]
        //     ]
    })
    // use promise method to pass the students...
    .then(function (dbStudent) {
        // into the main index, updating the page
        var hbsObject = {
        student: dbStudent
        };
        console.log(hbsObject);
            
        return res.render("index", hbsObject);
    })
});
        
router.get("/students/sort/fname/:first_name", function (req, res) {
    db.Student.findAll({
        where: {
        first_name: [req.params.first_name]
        },
        include: [db.SampleData],
        
    // return our first in ordered by ascending last_name
        order: [
            ["last_name", "ASC"]
            ]
    })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);
            
            return res.render("index", hbsObject);
        })
});
router.get("/students/sort/lname/:last_name", function (req, res) {
    db.Student.findAll({
        where: {
        last_name: [req.params.last_name]
        },
        include: [db.SampleData],
        
    // return our first in ordered by ascending last_name
        order: [
            ["last_name", "ASC"]
            ]
    })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);
            
            return res.render("index", hbsObject);
        })
});
router.get("/students/sort/state/:state", function (req, res) {
    db.SampleData.findAll({
        where: {
            state: {
            [Op.notLike]: [req.params.state]
            }
        },
        include: [db.Student],
        
    // return our first in ordered by ascending state
        order: [
            ["state", "ASC"]
            ]
    })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);
            
            return res.render("index", hbsObject);
        })
});
router.get("/students/sort/state_sort/:state", function (req, res) {
    db.SampleData.findAll({
        where: {
            state: [req.params.state]
        },
        include: [db.Student],
        
    // return our first in ordered by ascending state
        order: [
            ["state", "ASC"]
            ]
    })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);
            
            return res.render("index", hbsObject);
        })
});
router.get("/students/sort/dob/:dob", function (req, res) {
    db.Student.findAll({
        where: {
            dob: [req.params.dob]
        },
        include: [db.SampleData],
        
    // return our first in ordered by ascending state
        order: [
            ["dob", "ASC"]
            ]
    })
        // use promise method to pass the students...
        .then(function (dbStudent) {
            // into the main index, updating the page
            var hbsObject = {
                student: dbStudent
            };
            console.log(hbsObject);
            
            return res.render("index", hbsObject);
        })
});

router.post("/", function (req, res) {
    student.insertOne("name",
        req.body.name,
        function () {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    student.updateOne({
        devoured: true
    }, {
        id: req.params.id
    }, function () {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;