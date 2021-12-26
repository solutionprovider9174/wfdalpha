import React from 'react'
import { Image, Flex, Text, Box } from '@chakra-ui/react'
import { ButtonTransition } from '../components/ImageTransition'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

export default function Hero(props) {
  return (
    <Flex
      id="part1"
      className="movingup_normal"
      w="100%"
      height="100vh"
      bg="url(/herobackground.svg),linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"
      backgroundSize="cover"
      bgRepeat="no-repeat"
      direction="column"
      onClick={props.onClick}
      onTransitOpacity={props.onTransitOpacity}
      style={props.style}
    >
      <Flex justify="center" pt="122px">
        <Image src="horizontallogo.svg"></Image>
      </Flex>
      <Box ml="100px" mr="100px">
        <Text
          fontFamily="PilatExtended-Regular"
          fontWeight="900"
          fontSize="50px"
          lineHeight="110%"
          textAlign="center"
        >
          The foremost enabler of
          <br />
          crypto-blockchain
          <br />
          based crowdfunding
          <br />
          launchpad
        </Text>
      </Box>
      <Flex w="100%" mt="60px" justify="center" mb="65px">
        <ButtonTransition
          unitid="getstarted"
          selected={false}
          width="178px"
          height="50px"
          rounded="33px"
        >
          <Box
            variant="solid"
            color="white"
            justify="center"
            align="center"
            onClick={() => {}}
          >
            Get started
          </Box>
        </ButtonTransition>
        <ButtonTransition
          unitid="howitworks"
          selected={false}
          width="178px"
          height="50px"
          rounded="33px"
          ml="20px"
        >
          <Flex
            direction="row"
            variant="solid"
            color="white"
            justify="center"
            align="center"
            onClick={() => {}}
          >
            <IoArrowForwardCircleOutline />
            &nbsp;How it works?
          </Flex>
        </ButtonTransition>
      </Flex>
      <Flex mt="30px" mb="30px" justify="center">
        <a href="#RoadMap">
          <Image src="ArrowDown.png" style={{ cursor: 'pointer' }} />
        </a>
      </Flex>
    </Flex>
  )
}
