import React from 'react';
import {
  ButtonTransition,
  ButtonBackTransition,
} from '../components/ImageTransition';
import { Image, Flex, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Flex id="heroSection" direction="column">
      <Image src="stars.svg" id="starsBg" />
      <Image src="cloud.svg" id="cloudBg" />
      <Image src="stage.png" id="stageBg" />
      <Image src="horizontallogo.svg" id="heroLogo" />
      <Text id="heroHeading">
        Community Crowdfunding
        <br />
        Incubator For Blockchain
        <br />
        And Real-World
        <br />
        Projects.
      </Text>

      <Flex w="100%" mt="60px" justify="center" mb="65px">
        <ButtonBackTransition
          unitid="getstarted"
          selected={false}
          width="190px"
          height="55px"
          rounded="50px"
        >
          <Text ml="10px" fontWeight="700" fontSize="17px" letterSpacing="1px">
            Get started
          </Text>
        </ButtonBackTransition>
        <ButtonTransition
          unitid="howitworks"
          selected={false}
          width="190px"
          height="55px"
          rounded="50px"
          ml="20px"
        >
          <Flex
            direction="row"
            variant="solid"
            color="white"
            justify="center"
            align="center"
          >
            <Image src="play.svg" />
            <Text
              ml="10px"
              fontWeight="700"
              fontSize="17px"
              letterSpacing="1px"
            >
              How it works?
            </Text>
          </Flex>
        </ButtonTransition>
      </Flex>
      <Flex id="ArrowDownButton">
        <a href="#aboutSection">
          <Image src="ArrowDown.png" id="ArrowDownButtonImage" />
        </a>
      </Flex>
    </Flex>
  );
}
