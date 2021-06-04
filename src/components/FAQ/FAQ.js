import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.faq.title} image={settings.faq.url}/>
    <h2>{settings.faq.title}</h2>
    <p>{settings.faq.description}</p>
  </Container>
);

export default FAQ;