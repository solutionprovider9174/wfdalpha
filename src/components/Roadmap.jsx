import { Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Roadmaps() {
  const [down_position, setdown_position] = useState(-1)

  function movingroadmappadDown(e) {
    setdown_position(e.pageY)
  }

  function movingroadmappadUp(e) {
    setdown_position(-1)
    movingroadmappadMove(e)
  }

  function movingroadmappadMove(e) {
    if (down_position != -1) {
      var parentPos = document
        .getElementById('parentroadmappad')
        .getBoundingClientRect()
      var childPos = document
        .getElementById('roadmappad')
        .getBoundingClientRect()
      var top = childPos.top - parentPos.top
      var offset = e.pageY - down_position

      var movingpad = document.getElementById('roadmappad')
      movingpad.style.transform = 'translateY(' + (top + offset) + 'px)'
      if (top + offset > 0) movingpad.style.transform = 'translateY(0px)'

      var spheregpad = document.getElementById('sphere')
      spheregpad.style.transform =
        'rotate(' + ((top + offset) / 3000) * 360 + 'deg)'
    }
  }

  return (
    <Flex
      mt="117px"
      direction="column"
      w="100%"
      px="115px"
      pt="47px"
      id='RoadMap'
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
        onMouseMove={movingroadmappadMove}
        onMouseDown={movingroadmappadDown}
        onMouseUp={movingroadmappadUp}
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
  )
}
