import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  flex: {
    flex: 1,
  },
};
  
const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        :...Inadimplentes...:     
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/table">Lista Cliente</Button>
      <Button color="inherit" component={Link} to="/tabledata">Lista Cliente (Data)</Button>
      <Button color="inherit" component={Link} to="/tablevalor">Lista Cliente (Valor)</Button>
      <div className={classes.flex} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
