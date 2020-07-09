require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 9888;

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',() =>{
    console.log("Hey Your db connected so dont worry only your will application enjoy ")
})

mongoose.connection.on('error',(err)=>{
    console.log("error while connecting db please check me");
})

const app=express();


require('./models/note');

app.use(express.json())
app.use(cors());
app.use(require('./routes/note'))


app.listen(port, () => console.log(`Server running on port ${port} `));