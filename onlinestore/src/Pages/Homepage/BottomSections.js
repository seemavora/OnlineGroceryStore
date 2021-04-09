import React, { Component } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default class BottomSections extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
            <Typography align="center" variant="h4">
              Bottom Section
            </Typography>
        </Grid>
        <Grid item xs={3}>
        <Box
            py={20}
            bgcolor="#ff000059"
            style={{
              backgroundImage:
                'url(/images/LemonLite_bites.png',
              backgroundPosition: 'center',
            }}
            color="#7fff00"
          >
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#00ffe759">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#0043ff59">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#1cff0059">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
