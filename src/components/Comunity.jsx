import React from 'react'
import { Image, Text, Flex } from '@chakra-ui/react'
import { ButtonTransition } from './ImageTransition'

export default function Comunity() {
  return (
    <Flex id="comunityBackgroundHeight">
      <Image src="/EmailBg.png" className="EmailBg" />
      <Flex id="emailInnerBox">
        <Flex flexDirection="column" textAlign="center">
          <Flex className="emailInnerBoxTitle">
            <Text>Be Part of</Text>
            <Text color="#00A3FF" ml="8px">
              WeFund
            </Text>
          </Flex>
          <Text mt="10px" className="emailInnerBoxTitle">
            Private Sale is now open
          </Text>
        </Flex>
        <Flex justify="center" id="displayNoneInMobile">
          <ButtonTransition
            unitid="investinwefund"
            selected={false}
            width="210px"
            height="50px"
            rounded="100px"
          >
            <Text>Invest in WeFund</Text>
          </ButtonTransition>
        </Flex>
        <Flex justify="center" id="displayNoneInDesktop">
          <ButtonTransition
            unitid="investinwefund"
            selected={false}
            width="120px"
            height="20px"
            rounded="100px"
          >
            <Text fontSize="10px">Invest in WeFund</Text>
          </ButtonTransition>
        </Flex>
      </Flex>
    </Flex>
  )
}
