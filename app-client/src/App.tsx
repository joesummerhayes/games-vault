import React from 'react';
import { Review } from './views/Review';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'
import { Nav } from './components/Nav';
import { SliderComponent } from './components/Slider';
import {colors} from './theme';


const useStyles = makeStyles({
  conatiner: {
    minHeight: '100vh',
    background: 'white',
    fontFamily: 'Quicksand, sans-serif',
    width: '100%'
  },
  root: {
    // make this color lighter
    background: colors.white,
    marginBottom: '7rem'
  }
})

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <Container maxWidth="md" style={{paddingRight: '32px', paddingLeft: '32px'}}>
        <div className={`${classes.conatiner}`}>
          <header className="App-header">
          </header>
          <Review />
        </div>
      </Container>
    </div>
  );
}

export default App;
