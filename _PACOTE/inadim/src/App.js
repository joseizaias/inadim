import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Table from './components/Table';
import DataTableData from './components/TableData';
import DataTableValor from './components/TableValor';


const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Home />
      <Route exact path="/" component={Home} />
      <Route exact path="/table" component={Table} />
      <Route exact path="/tabledata" component={DataTableData} />
      <Route exact path="/tablevalor" component={DataTableValor} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
