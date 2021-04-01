import {Button} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';


import background from '../assets/homepage.jpg';
// eslint-disable-next-line require-jsdoc
function Welcome() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img style={{position: 'absolute', objectFit: 'cover'}}
        src={background} width={'100%'}></img>
      <Button style={{
        zIndex: 1,
        position: 'absolute',
        top: '80vh',
        margin: 'auto',
        width: 400,
        height: 100,
        fontSize: '2rem',
        backgroundColor: '#EC2724',
      }} variant="contained"
      color="primary"
      component={Link}
      to="/home"
      disableElevation>
  Accedi a LemonFlix
      </Button>
    </div>
  );
}

export default Welcome;
