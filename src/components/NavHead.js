import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 0.3,
  },
}));

function NavHead({ title }) {
  const classes = useStyles();

  return (
    <Button color="secondary" variant="text" className={classes.title}>
      {title}
    </Button>
  );
}

export default NavHead;
