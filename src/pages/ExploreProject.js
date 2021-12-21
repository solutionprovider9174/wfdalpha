import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, FormControl, FormLabel,
    Input, InputGroup,  InputLeftAddon, FormHelperText, Textarea, Avatar, Icon, Button,  VisuallyHidden, Image, Select, Checkbox,  RadioGroup, Radio, HStack, VStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { useStore } from '../store'
import { IoChevronUpOutline, IoChevronDownOutline, IoCheckmark, IoCloudUploadOutline, IoCheckbox } from 'react-icons/io5';

import { MdHeadset, MdEmail, MdLocationOn, MdWork, MdWeb, MdWebStories } from "react-icons/md";

import '../styles/CreateProject.css';

import { ImageTransition, InputTransition, InputTransitiongrey } from "../components/ImageTransition";

export default function NewProject() {
  const [isUST, setIsUST] = useState(true);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [whitepaper, setWhitepaper] = useState('');
  const [prjCategory, setPrjCategory] = useState('');
  const [prjName, setPrjName] = useState('');
  const [prjDescription, setPrjDescription] = useState('');
  const [prjWebsite, setPrjWebsite] = useState('');
  const [prjTeamdescription, setPrjTeamdescription] = useState('');
  const [prjEmail, setPrjEmail] = useState('');
  const [prjAmount, setPrjAmount] = useState('');
  const [prjSubcategory, setPrjSubcategory]= useState('');
  const [prjChain, setPrjChain] = useState('');


  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'500' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", 
        boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", width:'100%', width:'100%', zIndex:'11',backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover',zIndex:'11'}}>
          <Flex pt='64px' justify="center">
            <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Projects</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize='40px' fontWeight={'900'}>Explore&nbsp;</Text>
            <Text fontSize='40px' color='#4790f5' fontWeight={'900'}>Projects</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='-80px' px='175px'>
        <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
          
        <Flex width='100%' justify='center' mt='-80px' px='175px' zIndex={'1'}>
          <VStack>
        <HStack>
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Name</Text>
            </Flex>
            <InputTransition 
              unitid='projectname'
              selected={prjName==''?false:true}
              width='100%' height='55px' rounded='md'
            >
              <InputGroup style={{background: 'rgba(255, 255, 255, 0.05)', }} size="sm" border='0px'>
                <Input style={{border:'0', background:'transparent' }} type="text" h='55px'  rounded="md"  value={prjName} placeholder='Type here'  />
              </InputGroup>
            </InputTransition>
          </Box>
          {/* ------------------project category---------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Category</Text>
            </Flex>

            <InputTransition 
              unitid='projectcategory'
              selected={prjCategory==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{background: 'rgba(255, 255, 255, 0.05)', }} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjCategory(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          
          {/* -----------------submit----------------- */}
          <Flex w='100%' mt='60px'justify='center' mb='170px'>
            <ImageTransition 
              unitid='submit'
              border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
              background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='350px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                Submit
              </Box>
            </ImageTransition>
          </Flex>
          </HStack>
        <Flex style={{width:'1225px', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(255, 255, 255, 0.15)',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'50px', paddingRight:'50px'}} >
          <VStack>
            <Flex>
            <Text alignSelf={'flex-start'}>Projects you might like</Text>
            <Text alignSelf={'flex-end'}>Showing x Projects</Text>
            </Flex>
          
      <Box
        w= "100%px"
        h= "277px"
        mx="auto"
        borderTop= "1px solid rgba(255, 255, 255, 0.1)"
        boxSizing="border-box"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="400px"
        height="249px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="20px"
        py="10px">
        
        <Image
        src="sheep.svg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Simba
          </chakra.h1>
          <chakra.p py={2} color={"gray.400"} fontSize="15px">
          Date - 10 Dec, 2021
          </chakra.p>

          <chakra.p py={2} color={"gray.400"}>
          Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. 
          Aliquip consectetur labore consectetur dolor exercitation est min quis. 
          Magna non irure qui ex est laborum nulla excepteur. Aliquip consectetur labore consectetur dolor exercitation est min quis. 
          Magna non irure qui ex est laborum nulla excepteur qui <Text color={'blue.500'}>...more</Text>
          </chakra.p>
          <HStack>
          <Flex
            alignItems="center"
            color={"gray.400"}
            
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            color={"gray.400"}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            color={"gray.400"}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              $320000 Funding Pool
            </chakra.h1>
          </Flex>
          <HStack marginLeft={'160px'}>
          <Flex >
          <ImageTransition 
              unitid='submit'
              border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
              background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='160px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                Visit Website
              </Box>
            </ImageTransition>
          </Flex>
          <Flex>
          <ImageTransition 
              unitid='submit'
              border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
              background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
              border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
              background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
              border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={false}
              width='160px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{setSubmitPressed(!submitPressed)}} >
                View Project
              </Box>
            </ImageTransition>
          </Flex>
          </HStack>
          </HStack>
        </Box>
        </HStack>
      </Box>
          </VStack>
        </Flex>
        </VStack>
        </Flex>
        </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}