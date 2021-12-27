import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

export default function Roadmaps() {
  const [down_position, setdown_position] = useState(-1);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      var movingpad = document.getElementById('roadmappad');
      if (window.scrollY > 4600 && window.scrollY < 4650) {
        movingpad.style.transform = 'translateY(-200px)';
      } else if (window.scrollY > 4650 && window.scrollY < 4700) {
        movingpad.style.transform = 'translateY(-600px)';
      } else if (window.scrollY > 4700 && window.scrollY < 4750) {
        movingpad.style.transform = 'translateY(-900px)';
      } else if (window.scrollY > 4900) {
        movingpad.style.transform = 'translateY(-1200px)';
      } else if (window.scrollY > 5000) {
        movingpad.style.transform = 'translateY(-1000px)';
      } else if (window.scrollY > 5100) {
        movingpad.style.transform = 'translateY(-1200px)';
      } else if (window.scrollY > 5200) {
        movingpad.style.transform = 'translateY(-1400px)';
      } else if (window.scrollY > 5300) {
        movingpad.style.transform = 'translateY(-1600px)';
      } else movingpad.style.transform = 'translateY(0px)';
      console.log('window.scrollY', window.scrollY);
    });
  }, []);

  // function movingroadmappadDown(e) {
  //   setdown_position(e.pageY);
  // }

  // function movingroadmappadUp(e) {
  //   setdown_position(-1);
  //   movingroadmappadMove(e);
  // }

  // function movingroadmappadMove(e) {
  //   // if (down_position != -1) {
  //   var parentPos = document
  //     .getElementById('parentroadmappad')
  //     .getBoundingClientRect();
  //   var childPos = document
  //     .getElementById('roadmappad')
  //     .getBoundingClientRect();
  //   var top = childPos.top - parentPos.top;
  //   var offset = e.pageY - down_position;
  //   console.log(
  //     '🚀 ~ file: Roadmap.jsx ~ line 33 ~ movingroadmappadMove ~ offset',
  //     offset
  //   );
  //   console.log(
  //     '🚀 ~ file: Roadmap.jsx ~ line 26 ~ movingroadmappadMove ~ down_position',
  //     down_position
  //   );
  //   console.log(
  //     '🚀 ~ file: Roadmap.jsx ~ line 26 ~ movingroadmappadMove ~ e.pageY',
  //     e.pageY
  //   );

  //   var movingpad = document.getElementById('roadmappad');
  //   movingpad.style.transform = 'translateY(' + (top + offset) + 'px)';
  //   if (top + offset > 0) movingpad.style.transform = 'translateY(0px)';
  //   // }
  // }

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
      <Flex
        mt="45px"
        direction="row"
        cursor="pointer"
        // onMouseMove={movingroadmappadMove}
        // onMouseDown={movingroadmappadDown}
        // onMouseUp={movingroadmappadUp}
      >
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
