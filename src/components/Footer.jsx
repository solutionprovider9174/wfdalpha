import React from 'react'
import {
  TwitterLogo,
  TelegramLogo,
  InstagramLogo,
  YoutubeLogo,
} from 'phosphor-react'
import theme from '../theme'
import { ButtonBackTransition } from './ImageTransition'
import { Box, Flex, Text, Input, Img, ChakraProvider } from '@chakra-ui/react'

export default function Footer() {
  return (
    <footer
      className="container-fluid"
      style={{
        background:
          'linear-gradient(90deg, rgba(54, 8, 71, 0.7) 0%, rgba(24, 7, 91, 0.7) 104.34%)',
        padding: '0px',
      }}
    >
      <ChakraProvider resetCSS theme={theme}>
        <div
          style={{
            width: '100%',
            height: '100px',
            position: 'relative',
            borderBottom: '1.5px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Flex mt="20px">
            <Text
              position="relative"
              height="34px"
              top="33px"
              left="99px"
              fontFamily="PilatExtended-Regular"
              color="white"
              width="474px"
            >
              Wana Know more about WeFund?
            </Text>
            <Input
              position="relative"
              style={{
                bacground: 'border: 1.5px solid rgba(255, 255, 255, 0.2)',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                position: 'absolute',
                borderRadius: '36px',
                right: '15%',
                top: '22px',
              }}
              h="50px"
              w="296px"
              type="text"
              rounded="md"
              placeholder="Enter email Adresses"
            />
            <div
              style={{
                top: '22px',
                right: '5%',
                display: 'flex',
                position: 'absolute',
              }}
            >
              <ButtonBackTransition
                unitid="Subscribe"
                selected={false}
                width="133px"
                height="50px"
                rounded="33px"
              >
                <Box
                  variant="solid"
                  color="white"
                  justify="center"
                  align="center"
                  onClick={() => {
                    document.location = '/createproject'
                  }}
                >
                  Subscribe
                </Box>
              </ButtonBackTransition>
            </div>
          </Flex>
        </div>
        <div
          style={{
            width: '100%',
            height: '100px',
            borderBottom: '1.5px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Flex>
            <Img
              width="56px"
              left="99px"
              height="30px"
              position="relative"
              top="34px"
              src="/WeFund%20Logos%20only.png"
              alt="UST Avatar"
            />
            <Text
              top="25px"
              left="115px"
              height="30px"
              fontSize="30px"
              position="relative"
            >
              We<b>Fund</b>
            </Text>
            <div>
              <Flex>
                <div
                  key="about"
                  className="btn-group"
                  style={{
                    cursor: 'pointer',
                    right: '40%',
                    position: 'absolute',
                  }}
                >
                  <a
                    href=""
                    className="btn btn-danger "
                    style={{
                      top: '31px',
                      height: '20px',
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: 'rgba(255, 255, 255, 0.84)',
                    }}
                  >
                    About
                  </a>
                </div>
                <div
                  key="about"
                  className="btn-group"
                  style={{
                    cursor: 'pointer',
                    right: '34%',
                    position: 'absolute',
                  }}
                >
                  <a
                    href=""
                    className="btn btn-danger "
                    style={{
                      top: '31px',
                      height: '20px',
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: 'rgba(255, 255, 255, 0.84)',
                    }}
                  >
                    Contact
                  </a>
                </div>
                <div
                  key="about"
                  className="btn-group"
                  style={{
                    right: '25%',
                    cursor: 'pointer',
                    position: 'absolute',
                  }}
                >
                  <a
                    href=""
                    className="btn btn-danger "
                    style={{
                      top: '31px',
                      height: '20px',
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: 'rgba(255, 255, 255, 0.84)',
                    }}
                  >
                    Parnterships
                  </a>
                </div>
                <div
                  key="about"
                  className="btn-group"
                  style={{
                    right: '16%',
                    cursor: 'pointer',
                    position: 'absolute',
                  }}
                >
                  <a
                    href=""
                    className="btn btn-danger "
                    style={{
                      top: '31px',
                      height: '20px',
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: 'rgba(255, 255, 255, 0.84)',
                    }}
                  >
                    White Papers
                  </a>
                </div>
                <div
                  key="about"
                  className="btn-group"
                  style={{
                    right: '5%',
                    cursor: 'pointer',
                    position: 'absolute',
                  }}
                >
                  <a
                    href=""
                    className="btn btn-danger "
                    style={{
                      top: '31px',
                      height: '20px',
                      fontSize: '15px',
                      lineHeight: '18px',
                      color: 'rgba(255, 255, 255, 0.84)',
                    }}
                  >
                    Terms of Service
                  </a>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
        <Flex style={{ width: '100%', height: '65px' }}>
          <Text mt="15px" position="relative" left="99px">
            @ 2021 WeFund. All rights reserved
          </Text>
          <InstagramLogo
            style={{ right: '20%', bottom: '13px', position: 'absolute' }}
            size={31}
          />
          <TelegramLogo
            style={{ right: '15%', bottom: '13px', position: 'absolute' }}
            size={31}
          />
          <YoutubeLogo
            style={{ right: '10%', bottom: '13px', position: 'absolute' }}
            size={31}
          />
          <TwitterLogo
            style={{ right: '5%', bottom: '13px', position: 'absolute' }}
            size={31}
          />
        </Flex>
      </ChakraProvider>
    </footer>
  )
}
