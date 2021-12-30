import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack,Progress, Stat, Span,
    Input, InputGroup,  StatNumber, StatLabel,CircularProgress, CircularProgressLabel, Textarea, Avatar, Icon, Button,  VisuallyHidden, Image, Select, Checkbox,  RadioGroup, Radio, HStack, VStack, InputLeftElement, InputRightElement, Img
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
          <div style={{backgroundImage:"url('/projectbanner.svg')", width:'100%', width:'100%', zIndex:'11',backgroundPosition:'left', backgroundRepeat:'no-repeat', backgroundSize:'cover',zIndex:'11'}}>
            <Flex pt='64px' ml='100px' justify="left" height="200px">
            </Flex>
          </div>
        </div>
          <Flex width='100%' justify='center' mt='50px'>
            <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
              
              {/* ------------Details------------ */}
              <Flex width='100%' justify='center' alignItems={'center'} zIndex={'1'} mt={'-180px'}>
                <VStack>
                      <Flex alignContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                      <Flex 
                            width={{lg:'300px'}}
                            marginRight={{lg:'25px'}}
                            height={"490px"}
                            bg="rgba(20, 0, 75, 0.74)"
                            boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                            border='2px solid rgba(255, 255, 255, 0.05)'
                            borderRadius={"2xl"}
                            justify={'center'}
                            backdropFilter={'blur(54px)'}
                            >
                          <Image
                            marginTop={'50%'}
                            height={'40%'}
                            src="sheep.svg"
                            alt="avatar"
                          />
                      </Flex>
                      <VStack width={{lg:'880px'}} height={{lg:'484px'}}  paddingLeft= {{lg:'55px'}} style={{ backdropFilter:'blur(54px)', paddingTop:'45px', background:'rgba(20, 0, 75, 0.74)', border:'2px solid rgba(255, 255, 255, 0.05)', borderRadius: '25px'}}>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                          <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
                          <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Projects &gt;&nbsp;</Text>
                          <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Lynx</Text>
                        </Flex>
                        <Flex 
                          style={{fontFamily:'PilatExtended-Bold'}} 
                          alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                          <Text fontSize='40px' fontWeight={'900'}>Lynx</Text>
                        </Flex>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}} marginBottom={'40px !important'}>
                            <chakra.p color={"gray.100"} fontSize="15px">
                              Date - <span style={{color:"#FE8600"}}>10 Dec, 2021</span>
                            </chakra.p>
                            <Icon as={MdOutlinePlace} h={6} w={6} mr={2} ml={3} />

                            <chakra.h1 fontSize="sm" marginTop={"4px"}>
                              Cardano
                            </chakra.h1>
                        </Flex>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                        {/* The progress - Replace with functional ones*/}
                        <VStack alignSelf={'flex-start'}>
                        <Flex>
                        <Text>Backed Funds :  4 / 10 Millions UST</Text>
                        </Flex>
                        <Flex 
                          alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                            <CircularProgress value={40} size='120px' color='#00A3FF;'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                        {/* The progress - Replace with functional ones*/}
                          </Flex> 
                          </VStack>
                          </Flex> 
                        {/* The Buttons*/}
                        <Flex  alignSelf={{base:'center', md:'center', lg:'flex-start'}} spacing={5} direction={{base:'column',md:'column',lg:'row'}} > 
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}} ml={{base:'0px', md:'0px', lg:'0px'}}>
                            <ImageTransition
                                unitid='visit'
                                border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
                                background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                            >
                              <Box variant="solid" color="white" justify='center' align='center'
                                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                                Visit Website  <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
                              </Box>
                            </ImageTransition>
                          </Flex>
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}}  ml={{base:'0px', md:'-30px', lg:'10px'}}>
                            <ImageTransition 
                                unitid='view'
                                border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                              >
                          <Box variant="solid" color="white" justify='center' align='center'
                              onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                            See Whitepaper
                          </Box>
                        </ImageTransition>
                          </Flex>
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}} mb={{base:'40px', md:'40px', lg:'20px'}}  ml={{base:'0px', md:'-30px', lg:'10px'}}>
                            <ImageTransition 
                                unitid='back'
                                border1='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)' 
                                background1='linear-gradient(180deg, #DEDBDB 0%, #DEDBD/B  100%)'
                                border2='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                              >
                              <Box variant="solid" color="white" justify='center' align='center'
                                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                                Back Lynx
                              </Box>
                            </ImageTransition>
                          </Flex>
                        </Flex>
                      </VStack>
                      </Flex>
                    <Flex>
                        <VStack>
                          <Flex mt={'45px'} mb={'45px'} >
                            {/* ------------Details on key factors, as SimpleGrid with 1 Col at base, and 4 when in medium res. Stack of Stats------------ */}
                            <Flex borderTop="1.5px solid rgba(255, 255, 255, 0.15)" borderBottom="1.5px solid rgba(255, 255, 255, 0.15)" width={'100%'}>
                              <Flex spacing={{ base: 5, lg: 8 }} gridColumn={{ base:1, lg:4 }} direction={{base:'column',md:'column',lg:'row'}} justifyContent={"center"} paddingLeft={{lg:'110px'}}>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderLeft={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderRight={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                      <HStack>
                                        <BsPerson size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Backer'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        2000
                                        </StatNumber>
                                        
                                    </Box>
                                    
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderRight={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsCashCoin size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Funding Pool'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        20,000
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderRight={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsBookmarksFill size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Category'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        Charity
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    visibility={{base:'hidden', md:'hidden', lg:'visible'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsPerson size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Platform'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        Cardano
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                              </Flex>
                            </Flex>
                          </Flex>
                          <Flex  px={'45px'} paddingTop={"35px"} mt="40px" width={'80%'} height={{lg:'570px'}} background={'rgba(255, 255, 255, 0.05)'}  border={'1.5px solid rgba(255, 255, 255, 0.15)'} borderRadius='25px'>
                            {/* ------------Description of Project------------ */}
                              <chakra.p py={2} color={"rgba(255, 255, 255, 0.84)"} fontSize= {"18px"} lineHeight={"150%"}>
                              <span style={{color:"white",fontWeight:"900" ,fontSize:"18px" ,marginBottom:"20px"}}>
                                Introducing
                              </span>
                              <br/><br/>    
                              Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. 
                              Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                              Magna non irure qui ex est laborum nulla excepteur. Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                              Magna non irure qui ex est laborum nulla excepteur qui.Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est. <br/><br/>

                              Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute.
                              Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.<br/><br/>

                              Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. 
                              Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                              Magna non irure qui ex est laborum nulla excepteur. Aliquip consectetur labore consectetur dolor exercitation est min quis. 
                              Magna non irure qui ex est laborum nulla excepteur qui.Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.<br/><br/>

                              Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute.
                              Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.<br/><br/>
                              </chakra.p>
                          </Flex>
                          <Flex as={Stack} paddingTop={"35px"} mt="40px" width={'80%'} mb={'50px'} height={{lg:'325px'}}>
                            {/* ------------Descriptions on Founder of project------------ */}
                            <Text fontSize='28px' fontWeight={'900'} lineHeight={'36px'} mb={'20px'}>Project <span style={{color:'#00A3FF'}} mb='25px'>Founder Speaks</span></Text>
                            <Box background="rgba(255, 255, 255, 0.05)" border="1.5px solid rgba(255, 255, 255, 0.15)" boxSizing="border-box" borderRadius="10px" mt={'30px'}>
                              <Box px={'45px'} paddingTop={"35px"} paddingBottom={"35px"} >
                              <Text fontSize={'18px'} fontWeight={'bold'}>Incredible Experience</Text>
                              <br/>
                              <Text color= {"rgba(255, 255, 255, 0.54)"}>Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. 
                                      Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. 
                                      Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. 
                                      Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. 
                                      Laborum incididunt commodo ullamco proident quis.</Text>
                              </Box>
                              <HStack borderTop={"1.5px solid rgba(255, 255, 255, 0.15)"} spacing={10} paddingLeft={'45px'} paddingTop={"35px"} paddingBottom={"35px"}>
                                <Image height='35px' objectFit='cover' src='/WeFund Logos only.png' alt='UST Avatar'/>
                                <VStack textAlign={'left'}> 
                                  <Text fontWeight={'bold'} textAlign={'left'} alignSelf={'flex-start'}>Founder Name</Text>
                                  <Text textAlign={'left'}>CEO at ABC Corporation</Text>
                                </VStack>
                              </HStack>
                            </Box>
                              
                          </Flex>
                        </VStack>
                          
                    </Flex>
                </VStack>    
              </Flex>
              <Flex height={'200px'}>

              </Flex>
            </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}