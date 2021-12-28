import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function Roadmaps() {
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      var movingpad = document.getElementById('roadmappad');
      if (window.scrollY > 4700 && window.scrollY < 4800) {
        movingpad.style.transform = 'translateY(-100px)';
      } else if (window.scrollY > 4800 && window.scrollY < 4900) {
        movingpad.style.transform = 'translateY(-200px)';
      } else if (window.scrollY > 4900 && window.scrollY < 5000) {
        movingpad.style.transform = 'translateY(-500px)';
      } else if (window.scrollY > 5000 && window.scrollY < 5100) {
        movingpad.style.transform = 'translateY(-600px)';
      } else if (window.scrollY > 5100 && window.scrollY < 5200) {
        movingpad.style.transform = 'translateY(-700px)';
      } else if (window.scrollY > 5200) {
        movingpad.style.transform = 'translateY(-800px)';
      } else if (window.scrollY < 4500) {
        movingpad.style.transform = 'translateY(0px)';
      }
    });
  }, []);

  return (
    <Flex
      mt="117px"
      direction="column"
      w="100%"
      px="115px"
      pt="47px"
      fontFamily="Sk-Modernist-Regular"
    >
      <Text fontFamily="PilatExtended-Regular" fontWeight="400" fontSize="22px">
        RoadMap
      </Text>
      <Flex
        mt="15px"
        direction="row"
        fontFamily="PilatExtended-Regular"
        fontWeight="700"
        fontSize="35px"
      >
        <Text color="#00A3FF">WeFund&nbsp;</Text>
        <Text>RoadMap</Text>
      </Flex>
      <Flex mt="45px" direction="row" cursor="pointer">
        <Flex
          id="parentroadmappad"
          direction="column"
          w="50%"
          overflow="hidden"
          userSelect="none"
          pointerEvents="none"
          position="relative"
        >
          <Flex
            overflow="hidden"
            position="absolute"
            h="20px"
            align="baseline"
            zIndex="2"
            style={{ backgroundImage: 'inherit' }}
          >
            <Image
              alt={'Wefund'}
              src="/RoadMap_Horz.svg"
              w="100%"
              objectFit="cover"
            />
          </Flex>
          <Flex
            id="roadmappad"
            overflow="hidden"
            position="absolute"
            style={{ transition: 'transform 1s' }}
          >
            <Image
              alt={'Wefund'}
              src="/RoadMap_Horz.svg"
              w="100%"
              objectFit="cover"
            />
          </Flex>
        </Flex>
        <Flex
          id="sphere"
          position="relative"
          style={{ transition: 'transform 0.5s' }}
        >
          <Image alt={'Wefund'} src="/sphere.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
}
