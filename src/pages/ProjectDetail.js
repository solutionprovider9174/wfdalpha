import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, Stat, Span,
    Input, InputGroup,  StatNumber, StatLabel, Textarea, Avatar, Icon, Button,  VisuallyHidden, Image, Select, Checkbox,  RadioGroup, Radio, HStack, VStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { useStore } from '../store'
import { IoChevronUpOutline, IoChevronDownOutline, IoCheckmark, IoCloudUploadOutline, IoCheckbox } from 'react-icons/io5';

import Pagination from "@choc-ui/paginator"
import { MdHeadset, MdEmail, MdOutlinePlace, MdWork, MdOutlineAccountBalanceWallet, MdOutlineCategory } from "react-icons/md";

import '../styles/CreateProject.css';
import { BsArrowUpRight,BsBookmarksFill, BsBox, BsPerson, BsCashCoin } from "react-icons/bs"
import { ImageTransition, InputTransition, InputTransitiongrey } from "../components/ImageTransition";

export default function NewProject() {
  const [isUST, setIsUST] = useState(true);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [whitepaper, setWhitepaper] = useState('');
  const [prjCategory, setPrjCategory] = useState('');
  const [prjName, setPrjName] = useState('');


  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'500' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", 
        boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", width:'100%', width:'100%', zIndex:'11',backgroundPosition:'left', backgroundRepeat:'no-repeat', backgroundSize:'cover',zIndex:'11'}}>
          <Flex pt='64px' ml='100px' justify="left">
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Projects &gt;&nbsp;</Text>
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Lynx</Text>
          </Flex>
          <Flex mt='11px' ml={'100px'} pb='75px' mb="75px" justify='left'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize='40px' fontWeight={'900'}>Lynx</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='50px'>
        <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
          
        <Flex width='100%' justify='center' zIndex={'1'}>
        <SimpleGrid width={'100%'} alignContent={'center'} spacing={100} mb={'40px'} columns={2} marginLeft={'100px'}>
          <Flex width={'100%'}>
              <VStack>
              <Flex alignSelf={'flex-start'}>
                    <chakra.p color={"gray.100"} fontSize="15px">
                    Date - <span style={{color:"#FE8600"}}>10 Dec, 2021</span>
                    </chakra.p>
                    <Icon as={MdOutlinePlace} h={6} w={6} mr={2} />

            <chakra.h1 fontSize="sm">
              Cardano
            </chakra.h1>
                </Flex>
                <Flex mt={'75px'}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                    <Stat
                        px={{ base: 2, md: 4 }}
                        py={'5'}
                        shadow={'xl'}
                        border={'1px solid'}
                        borderColor={'gray.800'}
                        rounded={'lg'}>
                        <Flex justifyContent={'space-between'}>
                        <Box pl={{ base: 2, md: 4 }}>
                            <StatLabel fontWeight={'medium'} isTruncated>
                            'Backer'
                            </StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                            2000
                            </StatNumber>
                        </Box>
                        <Box
                            my={'auto'}
                            color={'gray.200'}
                            alignContent={'center'}>
                            <BsPerson size={'2em'} />
                        </Box>
                        </Flex>
                    </Stat>
                    <Stat
                        px={{ base: 2, md: 4 }}
                        py={'5'}
                        shadow={'xl'}
                        border={'1px solid'}
                        borderColor={'gray.800'}
                        rounded={'lg'}>
                        <Flex justifyContent={'space-between'}>
                        <Box pl={{ base: 2, md: 4 }}>
                            <StatLabel fontWeight={'medium'} isTruncated>
                            'Funding Pool'
                            </StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                            20,000
                            </StatNumber>
                        </Box>
                        <Box
                            my={'auto'}
                            color={'gray.200'}
                            alignContent={'center'}>
                            <BsCashCoin size={'2em'} />
                        </Box>
                        </Flex>
                    </Stat>
                    <Stat
                        px={{ base: 2, md: 4 }}
                        py={'5'}
                        shadow={'xl'}
                        border={'1px solid'}
                        borderColor={'gray.500'}
                        rounded={'lg'}>
                        <Flex justifyContent={'space-between'}>
                        <Box pl={{ base: 2, md: 4 }}>
                            <StatLabel fontWeight={'medium'} isTruncated>
                            'Category'
                            </StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                            Charity
                            </StatNumber>
                        </Box>
                        <Box
                            my={'auto'}
                            color={'gray.200'}
                            alignContent={'center'}>
                            <BsBookmarksFill size={'2em'} />
                        </Box>
                        </Flex>
                    </Stat>
                    <Stat
                        px={{ base: 2, md: 4 }}
                        py={'5'}
                        shadow={'xl'}
                        border={'1px solid'}
                        borderColor={'gray.800'}
                        rounded={'lg'}>
                        <Flex justifyContent={'space-between'}>
                        <Box pl={{ base: 2, md: 4 }}>
                            <StatLabel fontWeight={'medium'} isTruncated>
                            'Platform'
                            </StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                            Cardano
                            </StatNumber>
                        </Box>
                        <Box
                            my={'auto'}
                            color={'gray.200'}
                            alignContent={'center'}>
                            <BsBox size={'2em'} />
                        </Box>
                        </Flex>
                    </Stat>
                                </SimpleGrid>
                </Flex>
                <Flex mt="40px">
                    <chakra.p py={2} color={"rgba(255, 255, 255, 0.84)"} fontSize= {"18px"} lineHeight={"150%"}>
                    Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. 
                    Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                    Magna non irure qui ex est laborum nulla excepteur. Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                    Magna non irure qui ex est laborum nulla excepteur qui. <br/><br/>

                    Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute.
                     Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.<br/><br/>

                     Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. 
                    Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                    Magna non irure qui ex est laborum nulla excepteur. Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                    Magna non irure qui ex est laborum nulla excepteur qui.<br/><br/>

                    Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute.
                     Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.<br/><br/>
                    </chakra.p>
                </Flex>
                <Flex  as={Stack}>
                    <chakra.h1 color="white" fontWeight="900" fontSize="22px" fontFamily={'Pilat Extended'} mb="20px">
                     Project Founder Speaks
                    </chakra.h1>
                    <Box background="rgba(255, 255, 255, 0.05)" border="1.5px solid rgba(255, 255, 255, 0.15)" boxSizing="border-box" borderRadius="10px">
                        <Text fontSize={'18px'} fontWeight={'bold'}>Incredible Experience</Text>
                        <Text color= {"rgba(255, 255, 255, 0.54)"}>Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. 
                            Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. 
                            Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. 
                            Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. 
                            Laborum incididunt commodo ullamco proident quis.</Text>
                            <HStack>
                    
              <Image mt='23px' height='35px' objectFit='cover' src='/WeFund Logos only.png' alt='UST Avatar'/>
                        <VStack><Text>Founder Name</Text>
                        <Text>CEO</Text></VStack>
                    </HStack>
                    </Box>
                    
              </Flex>
              </VStack>
                
          </Flex>
          <Flex width={'300px'}>
              <VStack>
                <Flex 
        my={"6px"}
        mx={"6px"}
        width="240px"
        height="249px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        justify={'center'}>
        
        <Image
        src="sheep.svg"
        alt="avatar"
        />
                </Flex>
                <Flex >
          <ImageTransition 
              unitid='visit'
              border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
              background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='240px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                Visit Website  <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
              </Box>
            </ImageTransition>
                </Flex>
                <Flex>
          <ImageTransition 
              unitid='view'
              border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
              background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
              border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='240px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                See Whitepaper
              </Box>
            </ImageTransition>
                </Flex>
                <Flex>
          <ImageTransition 
              unitid='back'
              border1='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)' 
              background1='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB  100%)'
              border2='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='240px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                Back Lynx
              </Box>
            </ImageTransition>
                </Flex>
              </VStack>
          </Flex>
          </SimpleGrid>
        </Flex>
        </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}