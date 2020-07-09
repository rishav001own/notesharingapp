const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Note =  mongoose.model("Note")
const ObjectId=mongoose.Types.ObjectId

router.get('/creatednotepost/:id',(req,res)=>{
    Note.find({_id:ObjectId(req.params.id)})
    .then((notes)=>{
        res.json({notes})
    }).catch(err=>{
        console.log(err)
    })
    
})

router.post('/createnotepost',(req,res)=>{
    const {title,body,postedby} = req.body 
    if(!title || !body || !postedby){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    const note = new Note({
        title,
        body,
        postedby
    })
    note.save().then(result=>{
        res.json({note:result})
    })
    .catch(err=>{
        console.log(err)
    })
})



module.exports = router