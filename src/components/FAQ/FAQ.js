import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.faq.title} image={FAQData.faq.url}/>
    <h2>{FAQData.faq.title}</h2>
    <p>{FAQData.faq.description}</p>
  </Container>
);

export default FAQ;