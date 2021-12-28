import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import {Box, Flex, Text,Table,Thead,Tbody,Tr,Th,Td,TableCaption, VStack,Image, HStack, Img
  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { IoChevronUpOutline, IoChevronDownOutline, IoCheckmark } from 'react-icons/io5';
import download from "js-file-download";
import { post, get } from "axios";

import { useStore } from '../store'
import { ImageTransition, InputTransition, InputTransitiongrey } from "../components/ImageTransition";
import { navigate } from "@reach/router";

export default function Invest_step4() {
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const [blog4, setBlog4] = useState(false);
  const [blog5, setBlog5] = useState(false);

  const {state, dispatch} = useStore();

  function download_pdf(){
    // get(state.request + "/download", { params: { filename: state.pdfFile } }).
    // then((res, req) => {
    //     console.log(res);
    //     download(res.data, state.pdfFile);
    //   }
    // )
    // .catch((e) =>{
    //   console.log("Error:"+e);
    // })
    window.URL = window.URL || window.webkitURL;

    var xhr = new XMLHttpRequest(),
          a = document.createElement('a'), file;

    xhr.open('GET', state.request + '/download_pdf?filename='+state.pdfFile, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        file = new Blob([xhr.response], { type : 'application/octet-stream' });
        a.href = window.URL.createObjectURL(file);
        a.download = 'confirm.pdf';  // Set to whatever file name you want
        // Now just click the link you created
        // Note that you may have to append the a element to the body somewhere
        // for this to work in Firefox
        a.click();
    };
    xhr.send();
  }

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
            <HStack>
              <Text fontSize='22px' fontWeight={'300'}>
                <Image src={ 'popperleft.svg' } />
                Congratulations 
                <Image src={ 'popperright.svg' } />
              </Text>
            </HStack>
            <Text fontSize='16px' color='rgba(255, 255, 255, 0.54)' fontWeight={'normal'} maxWidth={'500px'} justifyContent={'center'}>
              You have invested in WeFund. For more update, please get in touch with us. We will confirm your investment status via email. 
            </Text>
          </Flex>
          {/* --------amount to back----------- */}
          <Flex mt='83px' justify='center' align='center' direction='column'>
          <Text fontSize='16px' fontWeight={'300'}>Transaction History</Text>
          <Table variant='simple'>
            <TableCaption>
              Your download has been procced automatically. Do you want to download again? Click on <Text color={'#F83600'}>Download</Text>
            </TableCaption>
            <Thead bgColor={'rgba(255, 255, 255, 0.12)'} borderRadius={'10px 10px 0px 0px'}>
              <Tr>
                <Th isNumeric>Date</Th>
                <Th isNumeric>UST You Invested</Th>
                <Th isNumeric>WFD You Get</Th>
                <Th >SAFT Details</Th>
              </Tr>
            </Thead>
            <Tbody bgColor={' rgba(196, 196, 196, 0.08)'} borderRadius={'10px 10px 0px 0px'}> 
              <Tr>
                <Td isNumeric>{state.investDate}</Td>
                <Td isNumeric borderLeft={'1px solid rgba(255, 255, 255, 0.1)'} borderRight={'1px solid rgba(255, 255, 255, 0.1)'}>{state.investAmount}</Td>
                <Td isNumeric borderLeft={'1px solid rgba(255, 255, 255, 0.1)'} borderRight={'1px solid rgba(255, 255, 255, 0.1)'}>{state.investWfdamount}</Td>
                <Td>
                  {/* <a href={state.request+"/download_pdf?filename=" + state.pdfFile} 
                      download="confirm.pdf"> */}
                  <a onClick={()=>{download_pdf()}}>
                    <Text color={'#F83600'}>Download</Text>
                  </a>
                </Td>
              </Tr>
            </Tbody>
          </Table>

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
                  onClick = {()=>{navigate('/')}} >
                Go Home
              </Box>
            </ImageTransition>
          </Flex>
          
          {/* -----------------------sroadmap-------------------------------- */}
          
          <Flex pb='75px' mb="20px" justify='center' style={{fontFamily:'PilatExtended-Bold'}}>
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
                  />
              </Flex>  
            </VStack>
          </Flex>

          {/* -----------------------space line-------------------------------- */}
          <Img mt='102px' height='1px' objectFit='cover' src='/line.svg' alt='UST Avatar'/>

          {/* ---------------------------blog------------------------------ */}

          <Flex fontSize='15px' w='100%' direction='column' fontWeight='500' justify='center'>
            <Flex mt='37px' fontFamily='PilatExtended-Bold' fontSize='22px' justify='center'>
              FAQ
            </Flex>
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
        <iframe width="1" height="1" frameborder="0" src={"/PDF/" + state.pdfFile}></iframe>
      </div>
    </ChakraProvider>
  )
}