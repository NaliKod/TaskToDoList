import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} image={settings.info.url}/>
    <h2>{settings.info.title}</h2>
    <p>{settings.info.description}</p>
  </Container>
);


export default Info;