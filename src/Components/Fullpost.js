import React, {useEffect, useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {

    useParams
} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const Fullpost = (props) => {

    let {id} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));

    },[]);


    const [comments,setComments] = useState([]);

  useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res=>res.json())
      .then(data=>setComments(data))



  });








    const useStyles = makeStyles({
        root: {
            minWidth: 300,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();


    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>


                <Card className={classes.root} variant="outlined" m={2}>
                    <CardContent>

                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
                 </CardContent>
                </Card>

                {
                    comments.map(p=>

                    <Card className={classes.root} variant="outlined" m={2}>
                    <CardContent>
                       <Avatar alt="Remy Sharp" src={'https://cdn.pixabay.com/photo/2020/03/19/22/28/boy-4948961_1280.jpg'} />
                        <p><b>{"name: "}</b> {   p.name}<b>{" email : "}</b>{p.email}</p>
                    <p>{p.body}</p>

                    </CardContent>
                    </Card>
                    )
                }



            </Container>
        </React.Fragment>
    );
};

export default Fullpost;
