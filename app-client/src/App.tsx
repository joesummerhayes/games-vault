import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { Review } from './views/Review';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'
import history from './history';
import { Nav } from './components/Nav';
import {colors} from './theme';
import { Login } from './views/Login';
import Signup from './views/Signup';
import { getUserAction } from './actions/auth';


const useStyles = makeStyles({
  conatiner: {
    minHeight: '100vh',
    background: 'white',
    fontFamily: 'Quicksand, sans-serif',
    width: '100%'
  },
  root: {
    background: colors.white,
    marginBottom: '7rem'
  }
})

const App: React.FC = () => {
  const classes = useStyles();
  const token = localStorage.getItem('token');
  const expiryDate = localStorage.getItem('expiryDate');
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (token) {
      dispatch(getUserAction())
    }
  });

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Nav />
        <Container maxWidth="md" style={{paddingRight: '32px', paddingLeft: '32px'}}>
          <div className={`${classes.conatiner}`}>
            <header className="App-header">
            </header>
            <Route expact component={Review} path="/review" />
            <Route exact component={Login} path="/login" />
            <Route exact component={Signup} path="/signup" />
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
