const express = require('express');
const app = express();
const port = 5000;
const chef = require('./data/chef.json')


app.get('/', (req, res)=>{
    res.send('welcome to RannaGhor')
})

app.get('/chef', (req, res) =>{
    res.send(chef)
})

app.listen(port, ()=>{
    console.log(`the port is running on ${port}`);
})