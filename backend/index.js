import express from 'express'


const app = express();


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Server is up and running ')
})

const Port = 5000;

app.listen(Port, (req, res) => {
    console.log(`Server is listening in port ${Port}`)
})