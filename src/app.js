const express = require('express')
const migrateDb = require('./migrate')
const bookController = require('./controllers/book')
const userController = require('./controllers/user')
const client = require('./connections')
const app = express()
const port = 3000


app.use(express.json())

// Auth
app.post('/sign-up', async (req, res) => {
    const r = await userController.signUp(req.body.email, req.body.password)
    res.send(r)

})
app.post('/sign-in', async (req, res) => {
    const r = await userController.signUp(req.body.email, req.body.password)
    res.send(r)
})




// Books
app.get('/book', (req, res) => {
    res.send('Hello World!')
})
app.get('/book/:id', (req, res) => {
    res.send('Hello Nigga!')
})
app.post('/book', async (req, res) => {
    const book = await bookController.createBook(req.body.title, req.body.year)
    res.send(book)
})
app.put('/book/:id', (req, res) => {

})
app.delete('/book/:id', (req, res) => {

})

app.listen(port, async () => {
    console.log("Connecting to db")
    await client.connect()
    console.log(`Example app listening on port ${port}`)
})