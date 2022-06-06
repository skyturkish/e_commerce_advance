const express = require('express')
const bodyParser = require('body-parser')


const UserService = require('./services/user-service')
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/users/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('person', { users })
})

app.get('/users/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.send(user)
})

app.post('/users', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

app.delete('/users/:id', async (req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})

app.listen(3000, () => {
    console.log('Server listening')
})