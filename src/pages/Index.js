import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useStore } from '../store';
import theme from '../theme';

import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import About from '../components/about';
import Industry from '../components/Industry';
import RoadMap from '../components/Roadmap';
import Email from '../components/Email';
import Projectfeature from '../components/Featured';
import Footer from '../components/Footer';
import { Container } from '../components/Container';
// import '../styles/transition.css';

export default() => {
    function transitOpacity()
    {
        if(typeof document !== 'undefined'){
            var main_part = document.getElementById('main_part');
            main_part.classList.add('hidden_show');
        }
    }
    return(
        <ChakraProvider resetCSS theme={theme}>
            <Container>
                <Flex direction='column'  maxWidth='1440px'>
                    <Hero style={{zIndex:'2', position:'absolute'}}   
                        onTransitOpacity={() => {transitOpacity()}}
                    />
                    <Flex id="main_part" style={{zIndex:'1'}} className="hidden" direction='column'>
                        <About/>
                        <Industry/>
                        <RoadMap/>
                        <Email/>
                        <Projectfeature/>
                        <Footer/>
                    </Flex>

                </Flex>
            </Container>
        </ChakraProvider>
    )
}