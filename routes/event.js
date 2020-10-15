const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

//GET ALL
router.get("/", (req, res, next) => {
    Event.find()
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
    Event.create(req.body)
      .then((eventDoc) => {
        console.log(eventDoc);
        res.status(201).json(eventDoc);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });


//GET BY ID
router.get("/:id", (req, res, next) => {
    Event.findById(req.params.id)
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
    const updateEvent = req.body;
    Event.findByIdAndUpdate(req.params.id, updateEvent, {
      new: true,
    })
      .then((eventDoc) => res.status(200).json(eventDoc))
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

//DELETE
router.delete("/:id", (req, res, next) => {
    Event.findByIdAndRemove(req.params.id)
      .then((deletedDoc) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  module.exports = router;