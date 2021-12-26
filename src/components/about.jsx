import React from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { ButtonBackTransition } from '../components/ImageTransition';

export default function Aboutone() {
  var mouseoriginX = 0,
    mouseoriginY = 0,
    mouseposX = 0,
    mouseposY = 0;

  function movingback(e) {
    if (mouseoriginX == 0) {
      mouseoriginX = e.pageX;
      mouseposX = e.pageX;
    }
    if (
      (mouseposX < e.pageX && e.pageX < mouseoriginX) ||
      (mouseposX > e.pageX && e.pageX > mouseoriginX)
    ) {
      mouseoriginX = mouseposX;
    }

    if (mouseoriginY == 0) {
      mouseoriginY = e.pageY;
      mouseposY = e.pageY;
    }
    if (
      (mouseposY < e.pageY && e.pageY < mouseoriginY) ||
      (mouseposY > e.pageY && e.pageY > mouseoriginY)
    ) {
      mouseoriginY = mouseposY;
    }

    var base = 1;
    var deltaX = e.pageX - mouseoriginX;
    var deltaY = e.pageY - mouseoriginY;
    var limit = 50;
    if (deltaX > limit) deltaX = limit;
    if (deltaX < -limit) deltaX = -limit;
    if (deltaY > limit) deltaY = limit;
    if (deltaY < -limit) deltaY = -limit;
    deltaY += 50;

    var rocket = document.getElementById('rocket');
    rocket.style.transform =
      'translate3d(' + deltaX * base + 'px, ' + deltaY * base + 'px, 0px)';
  }
  return (
    <Flex
      pt="68"
      px="115"
      id="aboutSection"
      direction="column"
      bgRepeat="no-repeat"
      backgroundSize="contain"
      fontFamily="Sk-Modernist-Regular"
      onMouseMove={(e) => movingback(e)}
      backgroundImage="url('/swirl.svg')"
    >
      <Flex direction="row">
        <Box direction="column">
          <Flex direction="row">
            <Text
              fontSize="18px"
              fontWeight="400"
              color="#FFFFFF8A"
              fontFamily="PilatExtended-Regular"
            >
              ABOUT WEFUND
            </Text>
          </Flex>
          <Flex direction="row">
            <Flex align="center" mr="15px">
              <Image alt="Wefund" src="/onegoal.svg" h="65px" />
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
          <Flex mt="22px" w="75%">
            <Text fontSize="20px" fontWeight="400" lineHeight="30px">
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
        <Flex w="100%" h="100%">
          <Flex
            id="rocket"
            position="relative"
            style={{ transition: 'transform 0.3s' }}
          >
            <Image h="500px" src="/rocket.svg" />
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="row" mt="20px" width="100%">
        <Flex
          w="16.7%"
          h="178px"
          justify="center"
          bg="#FFFFFF14"
          alignItems="center"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="25px"
        >
          <Box>
            <Image alt="Wefund" src="/gift.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              Yield Benefit for
              <br />
              Backers
            </Text>
          </Box>
        </Flex>
        <Flex
          w="16.7%"
          h="178px"
          justify="center"
          bg="#FFFFFF0D"
          alignItems="center"
        >
          <Box>
            <Image alt="phone" src="/phone.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              Secure Stable
              <br />
              Deposits
            </Text>
          </Box>
        </Flex>
        <Flex
          w="16.7%"
          h="178px"
          justify="center"
          bg="#FFFFFF14"
          alignItems="center"
        >
          <Box>
            <Image alt="Wefund" src="/lowriskinvestment.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              Low Risk
              <br />
              investement
            </Text>
          </Box>
        </Flex>
        <Flex
          w="16.7%"
          h="178px"
          justify="center"
          bg="#FFFFFF0D"
          alignItems="center"
        >
          <Box>
            <Image alt="Wefund" src="/governance.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              Governance
              <br />
              Voting Power
            </Text>
          </Box>
        </Flex>
        <Flex
          w="16.7%"
          h="178px"
          bg="#FFFFFF14"
          justify="center"
          alignItems="center"
        >
          <Box>
            <Image alt="Wefund" src="/deflationary.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              Deflationary Token
              <br />
              Value
            </Text>
          </Box>
        </Flex>
        <Flex
          w="16.7%"
          h="178px"
          bg="#FFFFFF0D"
          justify="center"
          alignItems="center"
          borderTopRightRadius="25px"
          borderBottomRightRadius="25px"
        >
          <Box>
            <Image alt="Wefund" src="/nftmirror.svg" h="60px" />
            <Text
              mt="15px"
              fontSize="15px"
              letterSpacing="1px"
              fontWeight="700"
            >
              NFT Mirror Real
              <br />
              World Asset
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex mt="30px" mb="59px">
        <ButtonBackTransition
          unitid="downwhitepaper"
          selected={false}
          width="100%"
          height="55px"
          rounded="100px"
        >
          <Flex justify="space-between" alignItems="center" w="100%" px="20px">
            <Box>Download Whitepaer</Box>
            <Image src="Download.svg" />
          </Flex>
        </ButtonBackTransition>
      </Flex>
    </Flex>
  );
}
