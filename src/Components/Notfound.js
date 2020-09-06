import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const Notfound = () => {
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
            <h3>Aww! Snap!!</h3>
            <h1>404</h1>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Notfound;
