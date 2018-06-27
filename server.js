const express = require('express');
const bodyParser= require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(__dirname + '/public'));


app.listen(3002, ()=>{
    console.log(`working on 3002`);
})