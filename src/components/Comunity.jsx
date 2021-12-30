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
            <Text color="#bfdbeb">WeFund&nbsp;</Text>
            <Text>was born from the community,</Text>
          </Flex>
          <Text mt="10px" className="emailInnerBoxTitle">
            for the community.
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
            <Flex direction="row">
              Invest in WeFund
              <Image ml="10px" alt="startfunding" src="/investface.svg" />
            </Flex>
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
            <Flex direction="row" fontSize="10px">
              Invest in WeFund
            </Flex>
          </ButtonTransition>
        </Flex>
      </Flex>
    </Flex>
  )
}
