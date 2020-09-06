import React, {useEffect, useState} from 'react';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";

const Cardss = (props) => {




    const {title,body,id} = props.post;



    const useStyles = makeStyles({
        root: {
            minWidth: 275,
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
                <Card className={classes.root} variant="outlined" >
                    <CardContent>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <Link  to={`/Fullpost/${id}`}><Button size="small" color="primary">Show details</Button>
                        </Link>
                    </CardContent>

                </Card>
            </Container>
        </React.Fragment>



    );

};

export default Cardss;
