import React from 'react';
import { game1 } from '../dummy-data/game1';
import { Title } from '../components/Title';
import { makeStyles } from '@material-ui/core/styles';
import { SliderComponent } from '../components/Slider';
// import {colors, Typography} from '@material-ui/core';
import { colors } from '../theme';

const styles = makeStyles({
  image: {
    maxWidth: "50rem"
  },
  title: {
    color: colors.monoOrange,
  }
})

export const Review: React.FC = () => {
  const classes = styles();
  return (
    <>
    <div className="flex flex-column items-center">
      <Title title={game1.title} bold size="large" className={classes.title} />
        <p className="mb5">
          {game1.synopsis}
        </p>
    </div>
    <SliderComponent />
    <div className="flex flex-column items-center">
      <div className="f3 mt5">
        {game1.body}
      </div>
    </div>
    </>
    
  )
};
