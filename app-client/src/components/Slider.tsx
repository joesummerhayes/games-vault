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

export const SliderComponent = () => {
    const classes = useStyles();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Box>
        <Slider {...settings}>
          <div>
            <img src={game1.image[0]} style={{width: '100%' }} />
          </div>
          {/* <div>
            <img src={game1.image[1]} style={{width: '100%' }} />
          </div> */}
          <div>
            <img src={game1.image[2]} style={{width: '100%' }} />
          </div>
          <div>
            <img src={game1.image[3]} style={{width: '100%' }} />
          </div>
        </Slider>
      </Box>
    );
  }