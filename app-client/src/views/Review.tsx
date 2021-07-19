import React, { useEffect } from 'react';
import { game1 } from '../dummy-data/game1';
import { Title } from '../components/Title';
import { makeStyles } from '@material-ui/core/styles';
import { SliderComponent } from '../components/Slider';
// import {colors, Typography} from '@material-ui/core';
import { colors } from '../theme';
import { RouteComponentProps } from 'react-router-dom';
import getReview from '../data/get-review';
import GVType from '../../../@types';

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
  const [ review, setReview ] = React.useState<GVType.Review>();
  const { params: { id } } = match;
  
  useEffect(() => {
    // use ID to get review data from graphQl
    async function fetchReview(id: string) {
      const review = await getReview({id});
      setReview(review);
    };
    fetchReview(id);
  }, []);

  const classes = styles();
  console.log(review);
  return review ? (
    <>
    <div className="flex flex-column items-center">
      <Title title={review.title} bold size="large" className={classes.title} />
        <p className="mb5">
          {review.synopsis}
        </p>
    </div>
    <SliderComponent images={review.images} />
    <div className="flex flex-column items-center lf-copy">
      <div className="f3 mt5">
        {review.review}
      </div>
    </div>
    </>
  ) : null
};
