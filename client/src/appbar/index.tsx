import React from 'react';
import {
  Container,
} from '@material-ui/core';
import lemonflixlogo from '../assets/lemonflix_tr.png';


const LemonflixAppBar=()=> {
  return (
    <Container>
      <img src={lemonflixlogo} height={70} />
    </Container>
  );
};


export default LemonflixAppBar;
