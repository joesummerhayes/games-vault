import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

enum Size {
  small = "small",
  medium = "medium",
  large = "large"
}

interface ITitle {
  title: string;
  size?: "large" | "medium" | "small";
  bold?:  true;
  className?: string;
}

const useStyles = makeStyles({
  root: {},
  Sbold: {
    fontWeight: 700,
  },
  smallSize: {
    fontSize: '17px'
  },
  mediumSize: {
    fontSize: '25px'
  },
  largeSize: {
    fontSize: '30px'
  },
})

export const Title: React.FC<ITitle> = (props: ITitle) => {
  const { title, size, bold, className} = props;
  const classes = useStyles();

  const getSize = () => {
    switch (size) {
      case Size.small: {
        return classes.smallSize
      }
      case Size.medium: {
        return classes.mediumSize
      }
      case Size.large: {
        return classes.largeSize
      }
      default: return classes.mediumSize
    }
  };

  return (
    <div className={`${bold && classes.Sbold} ${getSize()} ma4 ${className}`}>{title}</div>
  )
};
