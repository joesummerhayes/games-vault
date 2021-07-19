import React, { Component } from "react";
import Slider from "react-slick";
import { game1 } from '../dummy-data/game1';
import Box from '@material-ui/core/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {colors} from "../theme";
import { makeStyles } from '@material-ui/core/styles';
import './slider.css';

const useStyles = makeStyles({})

interface ISlider {
  images: string[]
}

export const SliderComponent: React.FC<ISlider> = ({ images }: ISlider) => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = images.map((image) => {
    return (
      <div>
        <img src={image} style={{width: '100%' }} alt={image} key={image} />
      </div>
    )
  });

  return (
    <Box>
      <Slider {...settings}>
        {slides}
      </Slider>
    </Box>
  );
  }