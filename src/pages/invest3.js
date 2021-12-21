import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, FormControl, FormLabel,
    Input, InputGroup,  InputLeftAddon, FormHelperText, Textarea, Avatar, Icon, Button,  VisuallyHidden, VStack, Select, Image, Checkbox,  RadioGroup, Radio, HStack, InputLeftElement, InputRightElement, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { useStore } from '../store'
import { IoChevronUpOutline, IoChevronDownOutline, IoCheckmark,  IoCloudUploadOutline } from 'react-icons/io5';

import { ImageTransition, InputTransition, InputTransitiongrey } from "../components/ImageTransition";

export default function NewProject() {
  const [backPressed, setBackPressed] = useState(false);
  const [condition, setCondition] = useState(false);
  const [backAmount, setBackAmount] = useState('');
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const [blog4, setBlog4] = useState(false);
  const [blog5, setBlog5] = useState(false);
  const [isUST, setIsUST] = useState(true);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [whitepaper, setWhitepaper] = useState('');
  const [InsTitle, setInsCategory] = useState('');
  const [InsName, setInsName] = useState('');
  const [InsEmail, setInsEmail] = useState('');
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
            <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'}>Back the Project</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="20px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize='40px' color='#4790f5'>Invest</Text>
            <Text fontSize='40px'>&nbsp;in WeFund</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='-80px' px='175px'>
        <Box width='900px' bg='#FFFFFF0D' px='50px' style={{fontFamily:'Sk-Modernist-Regular'}} >
          <Flex mt='83px' justify='center' align='center' direction='column'
            style={{fontFamily:'PilatExtended-Regular'}}>
                <Text fontSize='22px' fontWeight={'300'}>Input your investment amount</Text>
            <Text fontSize='16px' color='rgba(255, 255, 255, 0.54)' fontWeight={'normal'}>Please enter your UST amount and we will convert the WFD amount for you</Text>
            
            
          </Flex>
          <Flex direction='row' mt='40px' justify="center">
            <Box w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Name</Text>
              </Flex>
              <InputTransition 
                unitid='projectemail'
                selected={InsName==''?false:true}
                width='100%' height='55px' rounded='md' width='290px'
              >      
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                  <Input style={{ }} type="text" h='55px'placeholder="Type Name" focusBorderColor="purple.800" rounded="md"  value={InsName} onChange={(e)=>{setInsName(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            <Box ml='20px' w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Title</Text>
              </Flex>
              <InputTransition 
                unitid='projectemail'
                selected={InsTitle==''?false:true}
                width='100%' height='55px' rounded='md' width='290px'
              >      
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                  <Input style={{ }} type="text" h='55px'placeholder="Your title" focusBorderColor="purple.800" rounded="md"  value={InsTitle} onChange={(e)=>{setInsTitle(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
          </Flex>
          
          <Flex direction='row' mt='40px' justify="center">
            <Box w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Email</Text>
              </Flex>
              <InputTransition 
                unitid='projectemail'
                selected={InsEmail==''?false:true}
                width='100%' height='55px' rounded='md' width='290px'
              >      
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                  <Input style={{ }} type="email" h='55px'placeholder="example@email.com" focusBorderColor="purple.800" rounded="md"  value={InsEmail} onChange={(e)=>{setInsEmail(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            <Box ml='20px' w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Signature</Text>
              </Flex>
              {whitepaper == '' && 
                <InputGroup size="sm" width='290px'>
                  <InputLeftElement width='290px' h='55px' pointerEvents='none' children={<IoCloudUploadOutline color='#00A3FF' width='30px' height='30px'/>} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder="Upload here" focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{handleSignature()}}  /> 
                </InputGroup>}
              {whitepaper != '' && 
                <InputGroup size="sm" width='290px'>
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCheckbox color='00A3FF'  width='30px' height='30px' />} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder={whitepaper} focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{handleSignature()}} /> 
                </InputGroup>}
              <input type='file' id="fileSelector" name='userFile' style={{display:'none'}}
                onChange={()=>changeSignature()}/>
            </Box>
          </Flex>
          {/* -----------------Back Project----------------- */}
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
              width='200px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{}} >
                Submit
              </Box>
            </ImageTransition>
          </Flex>
           {/* -----------------------sroadmap-------------------------------- */}
          
           <Flex pb='75px' mb="20px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
              <VStack>
              <Flex>
                
            <Text fontSize='22px'>Our Funding&nbsp;</Text>
            <Text fontSize='22px' color='#4790f5'>Approach</Text>
            </Flex>
          <Flex>
            <Image
              alignSelf={'center'}
                alt={'Wefund'}
                src={
                  'saftroadmap.svg'
                }
              /></Flex>  
          </VStack>
              </Flex>
          {/* -----------------------space line-------------------------------- */}
          <Img mt='102px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>

          {/* ---------------------------blog------------------------------ */}

          <Flex fontSize='15px' w='100%' direction='column' fontWeight='500' justify='center'>
            <Flex mt='37px' fontFamily='PilatExtended-Bold' fontSize='22px' justify='center'>FAQ</Flex>
             <InputTransitiongrey 
              unitid='wefundabout'
              selected={blog1} onClick={()=>{setBlog1(!blog1)}}
              width='100%' height={blog1?'250px':'55px'} rounded='md' mt='25px'
            >
              <Flex direction='column' w='100%'  >
                  <Flex justify="space-between" align='center'  w='100%' h='55px'>
                    <Box ml='25px' ><Text>What is WeFund About?</Text></Box>
                    <Box mr='25px'>
                      {blog1 && <IoChevronUpOutline />}
                      {!blog1 && <IoChevronDownOutline/>}
                    </Box>
                  </Flex>
                  {blog1 && 
                  <>
                    <Img mt='17px' mx='35px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>
                    <Text fontSize='15px' mt='17px' mb='22px' px='25px' fontWeight='400' w='100%' h='auto'>
                      WFD Tokens will be used to operate WeFund Platforms. Projects for example converts 1% of their funding into WFD tokens. WFD Tokens also used as governance tokens for voting and govern the project trajectory.
                    </Text>
                  </>}
              </Flex>
            </InputTransitiongrey>             
            <InputTransitiongrey 
              unitid='howback'
              selected={blog2} onClick={()=>{setBlog2(!blog2)}}
              width='100%' height={blog2?'250px':'55px'} rounded='md' mt='25px'
            >
              <Flex direction='column' w='100%'>
                  <Flex justify="space-between" align='center'  w='100%' h='55px'>
                    <Box ml='25px'><Text>How does one back a Project?</Text></Box>
                    <Box mr='25px'>
                      {blog2 && <IoChevronUpOutline />}
                      {!blog2 && <IoChevronDownOutline/>}
                    </Box>
                  </Flex>
                  {blog2 && 
                  <>
                    <Img mt='17px' mx='35px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>
                    <Text fontSize='15px' mt='17px' mb='22px' px='25px' fontWeight='400' w='100%' h='auto'>
                      WFD Tokens will be used to operate WeFund Platforms. Projects for example converts 1% of their funding into WFD tokens. WFD Tokens also used as governance tokens for voting and govern the project trajectory.
                    </Text>
                  </>}
              </Flex>
            </InputTransitiongrey> 
            <InputTransitiongrey 
              unitid='backerget'
              selected={blog3} onClick={()=>{setBlog3(!blog3)}}
              width='100%' height={blog3?'250px':'55px'} rounded='md' mt='25px'
            >
              <Flex direction='column' w='100%'>
                  <Flex justify="space-between" align='center'  w='100%' h='55px'>
                    <Box ml='25px'><Text>What do backer get?</Text></Box>
                    <Box mr='25px'>
                      {blog3 && <IoChevronUpOutline />}
                      {!blog3 && <IoChevronDownOutline/>}
                    </Box>
                  </Flex>
                  {blog3 && 
                  <>
                    <Img mt='17px' mx='35px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>
                    <Text fontSize='15px' mt='17px' mb='22px' px='25px' fontWeight='400' w='100%' h='auto'>
                      WFD Tokens will be used to operate WeFund Platforms. Projects for example converts 1% of their funding into WFD tokens. WFD Tokens also used as governance tokens for voting and govern the project trajectory.
                    </Text>
                  </>}
              </Flex>
            </InputTransitiongrey>            
            <InputTransitiongrey 
              unitid='ustothertoken'
              selected={blog4} onClick={()=>{setBlog4(!blog4)}}
              width='100%' height={blog4?'250px':'55px'} rounded='md' mt='25px'
            >
              <Flex direction='column' w='100%'>
                  <Flex justify="space-between" align='center'  w='100%' h='55px'>
                    <Box ml='25px'><Text>What my UST or other tokens will be used for?</Text></Box>
                    <Box mr='25px'>
                      {blog4 && <IoChevronUpOutline />}
                      {!blog4 && <IoChevronDownOutline/>}
                    </Box>
                  </Flex>
                  {blog4 && 
                  <>
                    <Img mt='17px' mx='35px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>
                    <Text fontSize='15px' mt='17px' mb='22px' px='25px' fontWeight='400' w='100%' h='auto'>
                      WFD Tokens will be used to operate WeFund Platforms. Projects for example converts 1% of their funding into WFD tokens. WFD Tokens also used as governance tokens for voting and govern the project trajectory.
                    </Text>
                  </>}
              </Flex>
            </InputTransitiongrey>
            <InputTransitiongrey 
              unitid='whatwfdfee'
              selected={blog5} onClick={()=>{setBlog5(!blog5)}}
              width='100%' height={blog5?'250px':'55px'} rounded='md' mt='25px' mb='210px'
            >
              <Flex direction='column' w='100%'>
                  <Flex justify="space-between" align='center'  w='100%' h='55px'>
                    <Box ml='25px'><Text>What is WFD Fees?</Text></Box>
                    <Box mr='25px'>
                      {blog5 && <IoChevronUpOutline />}
                      {!blog5 && <IoChevronDownOutline/>}
                    </Box>
                  </Flex>
                  {blog5 && 
                  <>
                    <Img mt='17px' mx='35px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>
                    <Text fontSize='15px' mt='17px' mb='22px' px='25px' fontWeight='400' w='100%' h='auto'>
                      WFD Tokens will be used to operate WeFund Platforms. Projects for example converts 1% of their funding into WFD tokens. WFD Tokens also used as governance tokens for voting and govern the project trajectory.
                    </Text>
                  </>}
              </Flex>
            </InputTransitiongrey>
          </Flex>
        </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}