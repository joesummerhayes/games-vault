import React, { useEffect } from 'react';
import { game1 } from '../dummy-data/game1';
import { Title } from '../components/Title';
import { makeStyles } from '@material-ui/core/styles';
import { SliderComponent } from '../components/Slider';
// import {colors, Typography} from '@material-ui/core';
import { colors } from '../theme';
import { RouteComponentProps } from 'react-router-dom';

const styles = makeStyles({
  image: {
    maxWidth: "50rem"
  },
  title: {
    color: colors.monoOrange,
  }
})

type TParams = { id: string };

export const Review: React.FC<RouteComponentProps<TParams>> = ({ match, location }) => {
  console.log('11111', match, location);
  const { params: { id } } = match;
  
  useEffect(() => {
    // use ID to get review data from graphQl
  });

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
