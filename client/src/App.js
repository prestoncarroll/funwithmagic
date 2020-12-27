import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "../src/components/Form/Form.js";
import Posts from "../src/components/Posts/Posts.js";

import memories from "./images/image0.jpeg";
const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
