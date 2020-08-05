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
      .catch(err => errorHandler(err));
  });

  // CREATE
  router.post("/", (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then(result => res.json(result.ops[0]))
      .catch(err => errorHandler(err));
  });

  // DELETE
  router.delete('/:id', (req, res) => {
      const id = req.params.id;

      console.log('id :>> ', id);

      collection
      .deleteOne({ _id: ObjectID(id) })
      .then(result => {
          res.json(result)
      })
      .catch(err => errorHandler(err));
  })
  
  return router

}

module.exports = createRouter;
