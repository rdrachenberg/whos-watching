var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var sampleData = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    sampleData.selectAll(function (data) {
        var hbsObject = {
        sampleData: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    sampleData.insertOne("name",
        req.body.name,
        function () {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    sampleData.updateOne({
        devoured: true
    }, {
        id: req.params.id
    }, function () {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;