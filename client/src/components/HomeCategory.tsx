/* eslint-disable require-jsdoc */

import React from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

function FilmCard({filmId}: {filmId:string}) {
  return (
    <FilmCardContainer>
      <Link to={`/film/${filmId}`}>
        <FilmCoverImage src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hZZpqv9bKo9tUMmQY54HIJcgyqx.jpg'} ></FilmCoverImage>
      </Link>
    </FilmCardContainer>
  );
}

const FilmCoverImage = styled.img`
max-height:100%;
object-fit: contain;
`;

const FilmCardContainer = styled.div`

  border-radius: 5px;
  height: 200px;
  width: 20vh;

  transition: 0.2s ease-out;

  &:hover {
  filter: drop-shadow(0 0 0.75rem #d1bbc0);
  color:red;
  transform: scale(1.1,1.1);
  transition: 0.2s ease-in;
}
`;

// eslint-disable-next-line require-jsdoc
function HomeCategory({title} : {title:string}) {
  return (
    <HomeCategoryContainer>
      <Typography variant={'h4'}>{title}</Typography>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly',
        marginTop: '20px',
      }}>
        <FilmCard filmId={'test'}></FilmCard>
        <FilmCard filmId={'test'}></FilmCard>
        <FilmCard filmId={'test'}></FilmCard>
        <FilmCard filmId={'test'}></FilmCard>
        <FilmCard filmId={'test'}></FilmCard>
        <FilmCard filmId={'test'}></FilmCard>
      </div>
    </HomeCategoryContainer>
  );
}

const HomeCategoryContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 40px;
`;

export default HomeCategory;
