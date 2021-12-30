import React from 'react'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

import Hero from '../components/Hero'
import About from '../components/about'
import Industry from '../components/Industry'
import OurMissions from '../components/OurMissions'
import RoadMap from '../components/Roadmap'
import Email from '../components/Email'
import Comunity from '../components/Comunity'
import Footer from '../components/Footer'
import { Container } from '../components/Container'
import '../styles/transition.css'

export default () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Hero />
        <About />
        <OurMissions />
        <Comunity />
        <Industry />
        <RoadMap />
        <Email />
        <Footer />
      </Container>
    </ChakraProvider>
  )
}
