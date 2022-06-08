const express = require('express')
const router = express.Router()

const ProductService = require('../services/product-service')

router.get('/all', async (req, res) => {
  const products = await ProductService.findAll()
  res.render('list', { items: products })
})

router.get('/:id', async (req, res) => {
  const product = await ProductService.find(req.params.id)
  res.render('data', { data: product })
})

router.post('/', async (req, res) => {
  const product = await ProductService.add(req.body)
  res.send(product)
})

router.delete('/:id', async (req, res) => {
  const product = await ProductService.del(req.params.id)
  res.send(product)
})

module.exports = router