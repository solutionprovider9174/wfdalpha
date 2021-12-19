import React from 'react';
import {
  Image,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import { ButtonTransition, InputTransition } from '../components/ImageTransition';
import { IoArrowDownOutline,IoArrowForwardCircleOutline } from 'react-icons/io5';

export default function CallToActionWithIllustration(props) {
  function transitToUpwards()
  {
    if(typeof document !== 'undefined'){
      var part1 = document.getElementById('part1');
     //  console.log(medium);
      part1.classList.add('movingup_transited');
      props.onTransitOpacity();
    }
  }
  return (
    <Flex id="part1" className='movingup_normal' w='1440px' 
    bg='url(/herobackground.svg),linear-gradient(90deg, #1F0021 0%, #120054 104.34%)'
    backgroundSize='cover' bgRepeat="no-repeat" direction='column' onClick={props.onClick} 
    onTransitOpacity={props.onTransitOpacity}
    style={props.style}
    >
      <Flex justify='center' pt='122px'>
        <Image src="horizontallogo.svg"></Image>
      </Flex>
      <Box ml='100px' mr='100px'>
        <Text fontFamily='PilatExtended-Regular' fontWeight='700'
          fontSize='55px'
          lineHeight='110%'
          textAlign='center'
        >
          The foremost enabler of<br/>crypto-blockchain<br/>based crowdfunding launchpad
        </Text>
      </Box>
      <Flex w='100%' mt='60px'justify='center' mb='65px'>
        <ButtonTransition 
          unitid='getstarted'
          selected={false}
          width='178px' height='50px' rounded='33px'
        >
          <Box variant="solid" color="white" justify='center' align='center'
              onClick = {()=>{}} >
            Get started
          </Box>
        </ButtonTransition>
        <ButtonTransition 
          unitid='howitworks'
          selected={false}
          width='178px' height='50px' rounded='33px' ml='20px'
        >
          <Flex direction='row' variant="solid" color="white" justify='center' align='center'
              onClick = {()=>{}} >
            <IoArrowForwardCircleOutline/>
            &nbsp;How it works?
          </Flex>
        </ButtonTransition>
      </Flex>
      <Flex mt='138px' mb='138px' justify='center'>
        <InputTransition 
          unitid='gotonext'
          selected={false}
          width='65px' height='55px' rounded='1000px'
          onClick={()=>{transitToUpwards()}}
        >              
          <IoArrowDownOutline style={{width:'30px', height:'30px'}}/>
        </InputTransition>
      </Flex>
    </Flex>
  );
}
