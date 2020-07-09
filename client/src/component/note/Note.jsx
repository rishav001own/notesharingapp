import React, { useState,useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Note=(props)=>{
    const [obj,setobj]=useState({})
    const [load,setload]=useState(false)
    const [invalidurl,setinvalid]=useState(false)

    useEffect (() =>{
        
        const linking =props.match.params.id;
        
        fetch('http://localhost:9888/creatednotepost/'+ linking).then(res=>res.json())
        .then(res =>{
            if(res.length===0){
                setload(true)
                setinvalid(true)
            }
            else{
                setobj(res.notes[0])
                setinvalid(false)
                setload(true)
            }
        })
        .catch(err =>{
            setload(true)
            setinvalid(true)
        })
    },[load])
    if(load===false){
        return (
            <div>loading .....</div>
        )
    }
    else if(invalidurl===true){
        return (
            <div>wrong url</div>
        )
    }
    else{
        return (
            <Card className="root">
                <CardContent>
                <Typography className="username" color="textSecondary" gutterBottom>
                PostedBy:- {obj.postedby}
                </Typography>
                <Typography className="title" color="textSecondary" gutterBottom>
                Title:- {obj.title}
                </Typography>
                <Typography variant="body" component="p">
                    Body:-{obj.body}
                </Typography>
                </CardContent>
            </Card>
        )
    }
};

export default Note;