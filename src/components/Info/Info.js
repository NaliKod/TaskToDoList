import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { InfoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.info.title} image={InfoData.info.url}/>
    <h2>{InfoData.info.title}</h2>
    <p>{InfoData.info.description}</p>
  </Container>
);


export default Info;