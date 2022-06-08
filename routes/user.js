const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const SellerService = require('../services/seller-service')


router.get('/all', async (req, res) => {
    const people = await UserService.findAll()
    res.render('list', { items: people })
})

router.get('/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.render('data', { data: user })
})

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user) // send kısmı bizim konsole yazdıktan sonra bize cevap dönen yer
})

router.post('/:id/sellers', async (req, res) => {
    const user = await UserService.find(req.params.id)
    const seller = await SellerService.find(req.body.seller)
    await UserService.attendSeller(user, seller)

    res.send(user)
})

router.get('/:id/peers-over-18', async (req, res) => {
    const user = await UserService.find(req.params.id)
    const peers = await user.findPeersOver18()
    res.send(peers)
})


module.exports = router