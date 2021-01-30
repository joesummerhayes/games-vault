import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../theme';

const useStyles = makeStyles({
  root: {
    background: colors.orange,
    color: colors.white,
    height: '3rem',
    alignItems: 'center',
    // boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)',
    // borderBottom: `1px solid ${colors.orange}`
  },
  foo: {
    marginRight: 'auto'
  }
})

export const Nav: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} flex flex-row`}>
      <div className={`${classes.foo} ma3`}>Item 1</div>
      <div className="ma3">Item 1</div>
      <div className="ma3">Item 1</div>
    </div>
  )
}