import React, { Component } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

const images = [
  {
    url:
      'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25471.jpg?quality=90&resize=620,413',
    title: 'Vegan',
    body:
      'We carry many products that support those that follow a vegan diet including oat milk, almond milk, cashew cheese, and much more! ',
    width: '45%',
  },
  {
    url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F1610p34-white-bean-vegetable-bowls-frizzled-eggs-1.jpg%3Fitok%3Dp_bNHGNB&q=85',
    title: 'Vegetarian',
    body:
      'Not only do we have offer our customers the freshest vegetables from local farms, but provide customers a variety of fresh and frozen vegetarian meals they can pick up! Healthy and all at a low price!',
    backgroundPosition: 'center',
    width: '45%',
  },
  {
    url:
      'https://www.petalumaseared.com/wp-content/uploads/2020/04/meattemp.jpg',
    title: 'Meat, Fish & Poultry',
    body:
      'We believe in providing our users with fresh and ethically obtained meat. ',
    width: '45%',
  },
  {
    url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190430-cheesy-bacon-ranch-chicken-226-1556829090.jpg?crop=1.00xw:0.752xh;0,0.151xh&resize=980:*',
    title: 'Keto',
    body:
      'We offer our costumers all the necessary ingrediants that fit their keto needs, along with various frozen keto meals for easy prep!',
    width: '45%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 350,
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
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(45% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'px',
    width: '100%',
  },
}));

function CoolButtons() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(); // getter and setter respectively

  const handleOpen = (index) => {
    setOpen(true);
    setOption(index); // knowing which one we're clicking
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*stylish box is for the all the options*/
  const StylishBox = styled(Box)({
    background: 'linear-gradient(45deg,#abb94f 10%, ##ffed59 50%, #ffed59 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
    color: 'white',
    width: '100%',
    height: '100%',
    padding: '0 30px',
    margin: '0 auto',
  });

  /*stylish box small is for the tiny popups*/
  const StylishBoxSmall = styled(Box)({
    background: 'linear-gradient(45deg, #ABB94F 20%, #006400 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
    color: 'white',
    width: '300px',
    height: 'auto',
    padding: '0 30px',
    margin: '0 auto',
  });
  return (
    <StylishBox>
      <div className={classes.root}>
        {images.map((image, index) => (
          <ButtonBase
            onClick={() => handleOpen(index)}
            name={index}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              margin: '16px auto',
              borderRadius: 15,
              overflow: 'hidden',
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <StylishBoxSmall>
              <div>
                <h2 id="transition-modal-title">{images[option]?.title}</h2>
                <p id="transition-modal-description">{images[option]?.body}</p>
              </div>
            </StylishBoxSmall>
          </Fade>
        </Modal>
      </div>
    </StylishBox>
  );
  // return images.map((image, index) => (
  //   <Box key={`${image.title}_${index}`}>
  //     <Img src={image.url} />
  //     <Typography>{image.title}</Typography>
  //   </Box>
  // ));
}

export default class Options extends Component {
  render() {
    return (
      <Grid container>
        <CoolButtons />
      </Grid>
    );
  }
}
