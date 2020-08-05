const express = require("express");
const errorHandler = require("./error_handler")

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
  
  return router

}

module.exports = createRouter;
