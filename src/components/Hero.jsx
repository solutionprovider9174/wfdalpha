import React from 'react';
import {
  ButtonTransition,
  ButtonBackTransition,
} from '../components/ImageTransition';
import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

export default function Hero() {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      paddingTop="110px"
      alignItems="center"
    >
      <Image src="stars.svg" id="starsBg" />
      <Image src="cloud.svg" id="cloudBg" />
      <Image src="stage.png" id="stageBg" />
      <Image src="horizontallogo.svg" />
      <Text
        fontFamily="PilatExtended-Regular"
        fontWeight="bolder"
        lineHeight="110%"
        textAlign="center"
        fontSize="50px"
        mt="10px"
      >
        The foremost enabler of
        <br />
        crypto-blockchain
        <br />
        based crowdfunding
        <br />
        launchpad
      </Text>

      <Flex w="100%" mt="60px" justify="center" mb="65px">
        <ButtonBackTransition
          unitid="getstarted"
          selected={false}
          width="178px"
          height="50px"
          rounded="33px"
        >
          <Box variant="solid" color="white" justify="center" align="center">
            Get started
          </Box>
        </ButtonBackTransition>
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
          >
            <IoArrowForwardCircleOutline />
            &nbsp;How it works?
          </Flex>
        </ButtonTransition>
      </Flex>
      <Flex id="ArrowDownButton">
        <a href="#aboutSection">
          <Image src="ArrowDown.png" style={{ cursor: 'pointer' }} />
        </a>
      </Flex>
    </Flex>
  );
}
