const express = require('express');
const app = express();
const port = 5000;
const chef = require('./data/chef.json')
var cors = require('cors')

app.use(cors())


app.get('/', (req, res)=>{
    res.send('welcome to RannaGhor')
})

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id
    const selectedChef = chef.find(i => i.id === id)
    res.send(selectedChef)
})

app.listen(port, ()=>{
    console.log(`the port is running on ${port}`);
})



// https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-khorsed667.git