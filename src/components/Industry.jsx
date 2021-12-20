import React, {useState} from 'react';
import { Image, Flex, Text, Box, } from '@chakra-ui/react';
import { ButtonTransition } from '../components/ImageTransition';

export default function Industry()
{
  const [choice, setChoice] = useState(1);
  
  function slideView(_choosen)
  {
    setChoice(_choosen);
    var projectpad = document.getElementById('projectpad');
    projectpad.style.transform = 'translateX('+(-1200*_choosen)+'px)';    
  }

  return(
    <Flex direction='column' px='115px' pt='47px' fontFamily='Sk-Modernist-Regular'>
      <Flex direction='row' fontFamily='PilatExtended-Regular' fontWeight='700' fontSize='35px'>
        <Text color='#00A3FF'>WeFund&nbsp;</Text>
        <Text>Supports All</Text>
      </Flex>
      <Flex direction='row' mt='45px' >
        {/* ----------crypto startup industry--------------- */}
        <Box w='242px' h='161px' bg='#FFFFFF0D'  borderRadius='10% 0 0 0'
          style={{borderBottomWidth:(choice==0?'3px':'0px')}}
          onClick={()=>{slideView(0)}}
        >
          <Flex ml='15px' h='90px' align='center'>
            <Image alt='Crypto Industry' src= '/CryptoIndustry.svg' h='90px' />
          </Flex>
          <Box ml='15px'>
            <Text mt='14px' fontSize='15px' fontWeight='700'>Crypto-Startup Industry</Text>
            <Text fontSize='12px' fontWeight='700' color='#2AC54D'>Ongoing</Text>
          </Box>
        </Box>
        {/* --------------Gaming industry-------------------------- */}
        <Box w='242px' h='161px' bg='#FFFFFF14'
          style={{borderBottomWidth:(choice==1?'3px':'0px')}}
          onClick={()=>{slideView(1)}}
        >
          <Flex ml='15px' h='90px' align='center'>
            <Image alt='Crypto Industry' src= '/GamingIndustry.svg' h='90px' />
          </Flex>
          <Box ml='15px'>
            <Text mt='14px' fontSize='15px' fontWeight='700'>Gaming Industry</Text>
            <Text fontSize='12px' fontWeight='700' color='#FE8600'>Coming soon</Text>
          </Box>
        </Box>
        {/* --------------Creatie industry------------------ */}
        <Box w='242px' h='161px' bg='#FFFFFF0D' 
          style={{borderBottomWidth:(choice==2?'3px':'0px')}}
          onClick={()=>{slideView(2)}}
        >
          <Flex ml='15px' h='90px' align='center'>
            <Image alt='Crypto Industry' src= '/CreativeIndustry.svg' h='90px' />
          </Flex>
          <Box ml='15px'>
            <Text mt='14px' fontSize='15px' fontWeight='700'>Creative Industry</Text>
            <Text fontSize='12px' fontWeight='700' color='#FE8600'>Coming soon</Text>
          </Box>
        </Box>
        {/* ------------------sports industry------------------- */}
        <Box w='242px' h='161px' bg='#FFFFFF14'
          style={{borderBottomWidth:(choice==3?'3px':'0px')}}
          onClick={()=>{slideView(3)}}
        >
          <Flex ml='15px' h='90px' align='center'>
            <Image alt='Crypto Industry' src= '/SportsIndustry.svg' h='90px' />
          </Flex>
          <Box ml='15px'>
            <Text mt='14px' fontSize='15px' fontWeight='700'>Sports Industry</Text>
            <Text fontSize='12px' fontWeight='700' color='#FE8600'>Coming soon</Text>
          </Box>
        </Box>
        {/* ------------------Real Estate industry------------------- */}
        <Box w='242px' h='161px' bg='#FFFFFF14' borderRadius='0 10% 0 0'
          style={{borderBottomWidth:(choice==4?'3px':'0px')}}
          onClick={()=>{slideView(4)}}
        >
          <Flex ml='15px' h='90px' align='center'>
            <Image alt='Crypto Industry' src= '/RealIndustry.svg' h='90px' />
          </Flex>
          <Box ml='15px'>
            <Text mt='14px' fontSize='15px' fontWeight='700'>Real Estate Industry</Text>
            <Text fontSize='12px' fontWeight='700' color='#FE8600'>Coming soon</Text>
          </Box>
        </Box>
      </Flex>
      <Flex mt='69px' w='1200px' overflow='hidden'>
        <Flex id='projectpad' direction='row' position='relative' 
        style={{transition:'transform 1s'}}>
          {PROJECT_ITEMS.map((projectItem, index) => (
          <Flex direction="row" w='1200px' h='438px' key={index}>
            <Flex direction='column' w='50%' justify='space-between'>
              <Box>
                <Text fontFamily='PilatExtended-Regular' fontWeight='300' color='#FFFFFF8A' fontSize='18px'>
                  -{projectItem.label}
                </Text>
                <Text fontFamily='PilatExtended-Regular' fontWeight='700' fontSize='40px'>
                {projectItem.title}
                </Text>
                <Text fontFamily='Sk-Modernist-Regular' fontWeight='700' color='#2AC54D' fontSize='18px'>{projectItem.state}</Text>
                <Text fontFamily='Sk-Modernist-Regular' fontWeight='400' fontSize='18px'w='75%'>
                  {projectItem.description}
                </Text>
              </Box>
              <ButtonTransition 
                unitid={'cryptofunding'+index}
                selected={false}
                width='192px' height='50px' rounded='md'
              >
                <Flex direction='row'>
                  Start Funding
                  <Image ml='10px' alt='startfunding' src= '/handgo.svg' />
                </Flex>
              </ButtonTransition>
            </Flex>
            <Box w='50%'>
              <Image alt='Crypto project' src= {projectItem.imgsrc} w='100%' h='100%' />
            </Box>
          </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
const PROJECT_ITEMS = [
  {
    label: 'CRYPTO-STARTUP INDUSTRY',
    title: 'Crypto Project',
    state: 'Ongoing',
    description: 'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/CryptoProject.svg'
  },
  {
    label: 'GAMING INDUSTORY',
    title: 'Gaming Project',
    state: 'Coming soon',
    description: 'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its  limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/GamingProject.svg'
  },
  {
    label: 'CREATIVE INDUSTRY',
    title: 'Creative Project',
    state: 'Coming soon',
    description: 'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/CreativeProject.svg'
  },
  {
    label: 'SPORTS INDUSTRY',
    title: 'Sports Project',
    state: 'Coming soon',
    description:'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/SportsProject.svg'
  },
  {
    label: 'REAL ESTATE INDUSTRY',
    title: 'Real Estate Project',
    state: 'Coming soon',
    description: 'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/RealEstateProject.svg'
  },
]