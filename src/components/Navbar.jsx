import React from 'react';
import ConnectWallet from './ConnectWallet';
//
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { ButtonTransition, ImageTransition, InputTransition, ButtonBackTransition } from "../components/ImageTransition";
import {chakra, Box, Flex, SimpleGrid, GridItem, Heading, Text, Stack, FormControl, FormLabel,
  Input, InputGroup,  InputLeftAddon, FormHelperText, Textarea, Avatar, Icon, Button,  VisuallyHidden, Select, Checkbox,  RadioGroup, Radio, HStack, InputLeftElement, InputRightElement, Img
} from "@chakra-ui/react";
export default function WithSubnavigation() {
  // const { isOpen, onToggle } = useDisclosure();
  const isOpen = true;
  const onToggle = true;

  return (
    <ChakraProvider resetCSS theme={theme}>
    <div style={{ display:'flex', width:'100%', height:'80px',background:'linear-gradient(90deg, #3608478A 0%, #18075B 104.34%)'
    , backdropFilter: 'blur(54px)'}}>
      
        <div style={{display:'flex', width:'70%'}}>
            <img
                alt={'Wefund'}
                src={
                  '/WeFund%20Logos%20only.png'
                }
                style={{position:'relative', left: '99px', top:'31.25%', width:'56px', height:'30px'}}
              />
              <div style={{position:'absolute',width:'30px', left:'185px', top:'40px', border:'1px solid rgba(255,255,255, 0.2)',
                transform:'rotate(90deg)'}}></div>
          <DesktopNav/>
        </div>
        <div style={{display:'flex', position: 'relative', top:'20px',alignItems:'right'}}>
            <ButtonBackTransition unitid="Create Your Project"
              selected={false}
              width='197px' height='40px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>{document.location='/createproject'}} >
                Create Your Project
              </Box>
            </ButtonBackTransition>
          
          <div style={{marginLeft:'20px',marginRight:'20px', width:'130px'}}>
          <ConnectWallet/>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
const DesktopNav = () => {
  const linkColor = 'white';
  const linkHoverColor = 'red';
  const popoverContentBgColor ='green';

  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <div key={index} className="btn-group" style={{cursor:'pointer', left:'185px'}}>
          <a href={navItem.href} className={"btn btn-danger "+ (navItem.children ? "dropdown-toggle":"")} data-bs-toggle="dropdown" aria-expanded="false" 
          style={{color:'rgba(255, 255, 255, 0.84)', height:'20px', top:'25px', fontSize:'15px', lineHeight:'18px'}}>
            {navItem.label}
          </a>
          {navItem.children &&
            <ul className="dropdown-menu" style={{width:'380px', padding:'10px', backgroundColor:'black'}}>
              {navItem.children.map((childitem, index) => (
                <li key={index}>
                  <div style={{margin:'20px'}} >
                    <a href={childitem.href} className="navitem">
                    <p style={{marginBottom:'5px', fontSie:'large'}}>{childitem.label}</p>
                    <p style={{marginTop:'0px', fontSize:'small'}}>{childitem.subLabel}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          }
          </div>
      ))}
    </>
  );
};

const NAV_ITEMS = [
  {
    label: 'Projects',
    children: [
      {
        label: 'Explore Project',
        subLabel: 'Explore Project that you might be passionate about!',
        href: '/startup',
      },
      {
        label: 'See Our Guidelines on Creating A Project',
        subLabel: 'Wnat to fund your project? Or open up investment opportunities for your project? See here',
        href: '/createproject',
      },
    ],
  },
  {
    label: 'Career',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Join our team',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work, 1-4 weeks',
        href: '#',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/#Contactme',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Browse Project',
    href: '#',
  },
];