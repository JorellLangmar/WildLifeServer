const express = require("express");
const router = express.Router();
const User = require("../models/User");

//GET ALL
router.get("/", (req, res, next) => {
    User.find()
      .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch((dbErr) => {
        console.log(dbErr);
        res.status(500).json(dbErr);
      });
  });


//CREATE 
router.post("/", (req, res, next) => {
    console.log(req.body);
    User.create(req.body)
      .then((userDoc) => {
        console.log(userDoc);
        res.status(201).json(userDoc);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });


//GET BY ID
router.get("/:id", (req, res, next) => {
    User.findById(req.params.id)
      .then((dbRes) => {
        console.log(dbRes);
        res.status(200).json(dbRes);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


//UPDATE
router.patch("/:id", (req, res, next) => {
    const updateUser = req.body;
    console.log(updateUser);
    console.log(("You're editing the user"));
    User.findByIdAndUpdate(req.params.id, updateUser, {
      new: true,
    })
      .then((userDoc) => res.status(200).json(userDoc))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//DELETE
router.delete("/:id", (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then((deletedDoc) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  module.exports = router;