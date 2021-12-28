import React from 'react';

import { Image, Text, Flex, Box } from '@chakra-ui/react';
import { ButtonTransition } from '../components/ImageTransition';

export default function Email() {
  return (
    <Flex
      w="100%"
      h="600px"
      mt="150px"
      alignItems="center"
      position="relative"
      flexDirection="column"
      justifyContent="center"
    >
      <Image src="/EmailBg.png" className="EmailBg" />
      <Flex
        h="350px"
        zIndex={5}
        width="80%"
        position="relative"
        direction="column"
        bg="url(saft2.svg)"
        bgRepeat="no-repeat"
        backgroundSize="contain"
      >
        <Flex mt="66px" justify="center">
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="400"
            fontSize="22px"
          >
            GET IN WEFUND
          </Text>
        </Flex>
        <Flex mt="14px" justify="center">
          <Text
            fontFamily="PilatExtended-Regular"
            fontWeight="700"
            fontSize="35px"
          >
            Grow With Us Now
          </Text>
        </Flex>
        <Flex mt="50px" justify="center">
          <ButtonTransition
            unitid="investinwefund"
            selected={false}
            width="210px"
            height="50px"
            rounded="100px"
          >
            <Flex direction="row">
              Invest in WeFund
              <Image ml="10px" alt="startfunding" src="/investface.svg" />
            </Flex>
          </ButtonTransition>
        </Flex>
      </Flex>
    </Flex>
  );
}
