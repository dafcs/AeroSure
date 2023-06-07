const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {

  const router = express.Router()

  //get all items (get)
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ status: 500, error: err })
    })
  })

  //get one item (get) /:id
  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
    .findOne({ _id: ObjectID(id) })
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err)
      res.status(404)
      res.json({ status: 404, error: err })
    })
  })

  //add item - (post)
  router.post('/', (req, res) => {
    const newData = req.body
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ status: 500, error: err })
    })
  })

  //remove item - (delete) /:id
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ status: 500, error: err })
    })
  })

  return router
}

module.exports = createRouter;