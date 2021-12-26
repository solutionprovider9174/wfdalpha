import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import { ButtonTransition } from '../components/ImageTransition'

export default function Aboutone() {
  var mouseoriginX = 0,
    mouseposX = 0
  var mouseoriginY = 0,
    mouseposY = 0

  function movingback(e) {
    if (mouseoriginX == 0) {
      mouseoriginX = e.pageX
      mouseposX = e.pageX
    }
    if (
      (mouseposX < e.pageX && e.pageX < mouseoriginX) ||
      (mouseposX > e.pageX && e.pageX > mouseoriginX)
    ) {
      mouseoriginX = mouseposX
    }

    if (mouseoriginY == 0) {
      mouseoriginY = e.pageY
      mouseposY = e.pageY
    }
    if (
      (mouseposY < e.pageY && e.pageY < mouseoriginY) ||
      (mouseposY > e.pageY && e.pageY > mouseoriginY)
    ) {
      mouseoriginY = mouseposY
    }

    var base = 1
    var deltaX = e.pageX - mouseoriginX
    var deltaY = e.pageY - mouseoriginY
    var limit = 100
    if (deltaX > limit) deltaX = limit
    if (deltaX < -limit) deltaX = -limit
    if (deltaY > limit) deltaY = limit
    if (deltaY < -limit) deltaY = -limit
    deltaY += 100

    var rocket = document.getElementById('rocket')
    rocket.style.transform =
      'translate3d(' + deltaX * base + 'px, ' + deltaY * base + 'px, 0px)'
  }
  return (
    <Flex
      direction="column"
      px="115"
      pt="68"
      fontFamily="Sk-Modernist-Regular"
      onMouseMove={(e) => movingback(e)}
      backgroundImage="url('/swirl.svg')"
      backgroundSize="contain"
      bgRepeat="no-repeat"
    >
      <Flex direction="row">
        <Box direction="column">
          <Flex direction="row">
            <Text
              fontFamily="PilatExtended-Regular"
              fontWeight="400"
              fontSize="18px"
              color="#FFFFFF8A"
            >
              ABOUT WEFUND
            </Text>
          </Flex>
          <Flex direction="row">
            <Flex align="center">
              <Image alt="Wefund" src="/onegoal.svg" h="62px" />
            </Flex>
            <Flex>
              <Text
                fontFamily="PilatExtended-Regular"
                fontWeight="700"
                fontSize="31px"
                color="white"
              >
                GOAL
                <br />
                PASSION
              </Text>
            </Flex>
          </Flex>
          <Flex mt="22px">
            <Text
              fontWeight="400"
              fontSize="18px"
              color="#FFFFFF8A"
              lineHeight="29px"
            >
              WeFund is Decentralized crowdfunding for the crypto-startup
              project industry and beyond implemented for a real-life use case.
              <br />
              <br />
              The vision of WeFund is to become the connector of the blockchain
              ecosystem that exists on the market. to fulfill this vision,
              WeFund's initial development stage would be in the Terra ecosystem
              and will continue to use another ecosystem such as Solana,
              Etherium, Cardano, etc in near future
            </Text>
          </Flex>
        </Box>
        <Flex ml="0px" mt="0px" w="100%" h="100%">
          <Flex
            id="rocket"
            position="relative"
            style={{ transition: 'transform 0.3s' }}
          >
            <Image alt="feature image" h="449px" src="/rocket.svg" />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="row" mt="20px">
        <Box w="202px" h="178px" bg="#FFFFFF14">
          <Box ml="34px" mt="31px" w="120px" borderRadius="10% 0 0 10%">
            <Image alt="Wefund" src="/gift.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              Yield Benefit for Backers
            </Text>
          </Box>
        </Box>
        <Box w="202px" h="178px" bg="#FFFFFF0D">
          <Box ml="34px" mt="31px" w="120px">
            <Image alt="phone" src="/phone.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              Secure Stable Deposits
            </Text>
          </Box>
        </Box>
        <Box w="202px" h="178px" bg="#FFFFFF14">
          <Box ml="34px" mt="31px" w="120px">
            <Image alt="Wefund" src="/lowriskinvestment.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              Low Risk investement
            </Text>
          </Box>
        </Box>
        <Box w="202px" h="178px" bg="#FFFFFF0D">
          <Box ml="34px" mt="31px" w="120px" borderRadius="10% 0 0 10%">
            <Image alt="Wefund" src="/governance.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              Governance Voting Power
            </Text>
          </Box>
        </Box>
        <Box w="202px" h="178px" bg="#FFFFFF14">
          <Box ml="34px" mt="31px" w="120px">
            <Image alt="Wefund" src="/deflationary.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              Deflationary Token Value
            </Text>
          </Box>
        </Box>
        <Box w="202px" h="178px" bg="#FFFFFF0D">
          <Box ml="34px" mt="31px" w="120px" borderRadius="0 10% 10% 0">
            <Image alt="Wefund" src="/nftmirror.svg" h="60px" />
            <Text mt="14px" fontSize="15px" fontWeight="700">
              NFT Mirror Real World Asset
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex mt="30px" mb="59px">
        <ButtonTransition
          unitid="downwhitepaper"
          selected={false}
          width="100%"
          height="55px"
          rounded="md"
        >
          <Flex justify="space-between" w="100%" px="22px">
            <Box>Download Whitepaer</Box>
            <Box>
              <IoCloudDownloadOutline color="red" />
            </Box>
          </Flex>
        </ButtonTransition>
      </Flex>
    </Flex>
  )
}
