import React from 'react';

import {
  Container,
} from '@material-ui/core';

import background from '../assets/homepage.jpg';
import styled from 'styled-components';
import HomeCategory from '../components/HomeCategory';


// eslint-disable-next-line require-jsdoc
function Home() {
  return (
    <HomeContainer>
      <HomeCategory title="In Evidenza"/>
      <HomeCategory title="Ultimi Arrivi" />
      <HomeCategory title="Potrebbero piacerti"/>

    </HomeContainer>
  );
}

const HomeContainer = styled(Container)`
  color:white;
  display: flex;
  flex-direction: column;
`;


export default Home;
