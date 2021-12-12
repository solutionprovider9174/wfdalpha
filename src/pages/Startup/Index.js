import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../../theme';

import Hero from '../../components/Hero';
import About from '../../components/about';
import Industry from '../../components/Industry';
import RoadMap from '../../components/Roadmap';
import Emailsub from '../../components/Email';
import Projectfeature from '../../components/Featured';
import FooterCenter from '../../components/Footer_land';
import Navbar from '../../components/Navbar';
import { Container } from '../../components/Container';


export default() => {
    return(
        <ChakraProvider resetCSS theme={theme}>
            <Container>
                <Navbar/>
                <Hero/>
                <About/>
                <Industry/>
                <RoadMap/>
                <Emailsub/>
                <Projectfeature/>
                <FooterCenter/>
            </Container>
        </ChakraProvider>
    )
}