const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");

//GET ALL
router.get("/", (req, res, next) => {
    Animal.find()
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
    Animal.create(req.body)
      .then((animalDoc) => {
        console.log(animalDoc);
        res.status(201).json(animalDoc);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });


//GET BY ID
router.get("/:id", (req, res, next) => {
    Animal.findById(req.params.id)
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
    const updateAnimal = req.body;
    Animal.findByIdAndUpdate(req.params.id, updateAnimal, {
      new: true,
    })
      .then((animalDoc) => res.status(200).json(animalDoc))
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

//DELETE
router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
    Animal.findByIdAndRemove(req.params.id)
      .then((deletedDoc) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  module.exports = router;