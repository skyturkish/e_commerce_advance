const express = require('express')
const router = express.Router()

const SellerService = require('../services/seller-service')

router.get('/all', async (req, res) => {
    const sellers = await SellerService.findAll()
    res.render('list', { items: sellers })
})

router.get('/:id', async (req, res) => {
    const seller = await SellerService.find(req.params.id)
    res.render('data', { data: seller })
})

router.post('/', async (req, res) => {
    const seller = await SellerService.add(req.body)
    res.send(seller)
})

router.delete('/:id', async (req, res) => {
    const seller = await SellerService.del(req.params.id)
    res.send(seller)
})

module.exports = router