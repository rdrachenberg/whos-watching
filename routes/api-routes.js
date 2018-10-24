// var express = require("express");
// var db = require("../models");

// module.exports = function(app) {


// app.get("/", function(req, res) {
//   db.Student.findAll({
//     where: {},
//     include: [{
//         model: db.SampleData
//       }]
//   }).then(function (dbStudent) {
//     console.log(dbStudent);
//     var studentObj = {students: dbStudent};
//     res.render("index", studentObj);
//   })
// });

// app.post("/", function(req, res) {
//   db.Student.create({name: req.body.name}).then(function(dbStudent) {
//       res.redirect("/");
//     });
// });

// app.post("/:id", function(req, res) {
//   var SampleDataName = req.body.SampleData;
//   var studentId = req.params.id;
//   var resVar = res;
//   db.SampleData.findAll({}).then(function(dbSampleDatas) {
//     var flag = false;
//     for (var i; i < dbSampleDatas.length; i++) {
//       if (SampleDataName === dbSampleData[i].name) {
//         flag = true;
//       }
//       else {
//         console.log("not a match");
//       }
//     }
//     if (!flag) {
//       db.SampleData.create({
//           name: SampleDataName
//       }).then(function (dbCreate) {
//         studentUpdate(SampleDataName, studentId, resVar);
//       });
//     }
//     else {
//       studentUpdate(SampleDataName, studentId, resVar);
//     }
//   });
// });

// function studentUpdate (SampleDataName, studentId, resVar) {
//   db.SampleData.findOne({
//     where: {
//       name: sampleDataName
//     }
//   }).then(function (dbSampleData) {
//     var id = dbSampleData.id;
//     db.Student.update(
//       {
//         devoured: true,
//         SampleDataId: id
//       },
//       {
//         where: {
//           id: studentId
//         }
//       }).then(function(dbStudent) {
//         resVar.redirect("/");
//       });
//   });
// };

// }

