const express = require("express");
const errorHandler = require("./error_handler")
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(err => errorHandler(res, err));
  });

  // CREATE
  router.post("/", (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then(result => res.json(result.ops[0]))
      .catch(err => errorHandler(res, err));
  });

  // DELETE
  router.delete('/:id', (req, res) => {
      const id = req.params.id;

      collection
      .deleteOne({ _id: ObjectID(id) })
      .then(result => {
          res.json(result)
      })
      .catch(err => errorHandler(res, err));
  })
  
  return router

}

module.exports = createRouter;
