import { AppBar, Container, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import NavHead from "./NavHead";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
}));

function Layout(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <AppBar>
        <Toolbar>
          <NavHead title="Home" />
          <NavHead title="About" />
          <NavHead title="Services" />
          <NavHead title="Team" />
          <NavHead title="Donation" />
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Layout;
