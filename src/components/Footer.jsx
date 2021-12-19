import React, { useState } from 'react'

import { TwitterLogo, TelegramLogo, Files, InstagramLogo, YoutubeLogo } from 'phosphor-react'
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, FormControl, FormLabel,
    Input, InputGroup,  InputLeftAddon, FormHelperText, Textarea, Avatar, Icon, Button,  VisuallyHidden, Select, Checkbox,  RadioGroup, Radio, HStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import { ButtonTransition, ImageTransition, InputTransition } from "./ImageTransition";

export default function Footer() {
    return (
        <footer
            className="container-fluid"
            style={{ background: 'linear-gradient(90deg, rgba(54, 8, 71, 0.7) 0%, rgba(24, 7, 91, 0.7) 104.34%)' }}
        >
            {/* <div className="social-share py-5">
                <p className="mb-2">
                    Stay in touch with <strong>LoTerra</strong>
                </p>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            href="https://twitter.com/LoTerra_LOTA"
                        >
                            <TwitterLogo size={31} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/LoTerra">
                            <TelegramLogo size={31} />
                        </a>
                    </li>
                </ul>
                <p className="mt-4 mb-2">
                    Learn more about <strong>LoTerra</strong>?
                </p>
                <a
                    href="https://docs.loterra.io"
                    target="_blank"
                    className="btn btn-plain"
                    style={{ fontSize: '16px', color: '#a69fbb' }}
                >
                    Documentation <Files size={21} />
                </a>
            </div> */}
            <ChakraProvider resetCSS theme={theme}>
            <div style={{width:'100%', height:'100px'}}>
            <Flex mt='20px'>
                <Text position='relative' height='34px' top='33px' left='99px' color='white' width='474px'>Wana Know more about WeFund?</Text>
                <Input position='relative' style={{border: '1.5px solid rgba(255, 255, 255, 0.2)', top:'22px',
                    bacground:'border: 1.5px solid rgba(255, 255, 255, 0.2)', borderRadius:'36px', 
                }} type="text" h='50px' w='296px' rounded="md" placeholder='Enter email Adresses'  />
                <Box position='relative' variant="solid" color="white" align='center' style={{
                    background: 'linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)', borderRadius:'33px',
                    top:'22px', border:'1px solid rgba(255, 255, 255, 0.05)'

                }} width= '133px' height='50px' top='33px'
                  onClick = {()=>{}} >
                Subscribe
              </Box>
            </Flex>
            </div>
            <div style={{width:'100%', height:'100px'}}>
            <Flex justify='center'>
                <Img width='56px' height='30px' position='relative' top='34px' src='/WeFund%20Logos%20only.png' alt='UST Avatar'/>
                <Text mt='13px'>WeFund</Text>
                
            </Flex>
            </div>
            <div style={{width:'100%', height:'65px'}}>
            <Flex>
                <Text mt='13px'>@ 2021 WeFund. All rights reserved</Text>
                <InstagramLogo size={31}/>
                <TelegramLogo size={31}/>
                <YoutubeLogo size={31}/>
                <TwitterLogo size={31}/>
            </Flex>
            </div>
            </ChakraProvider>
        </footer>
    )
}
