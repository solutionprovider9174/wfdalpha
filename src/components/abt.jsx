import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    ButtonGroup,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoArrowForwardCircle,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';

  import React from 'react';
  
  // interface FeatureProps {
  //   text: string;
  //   iconBg: string;
  //   icon?: ReactElement;
  // }
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'column'} align={'center'}>
        <Flex
          w={'20'}
          h={'20'}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          mb={2}
          mt={4}
          >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Aboutone() {
    return (
      <Container maxW={'8xl'} py={12} bgGradient={"linear(to-l, #331666, #4B40A1)"} boxShadow="xl" p="6" rounded="2xl" >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={1}>
          <Container ml={'-10'}>
            <Flex>
              <Image
                alt={'Wefund'}
                w={'20%'}
                h={'20%'}
                src={
                  'wfd%20abt%20icon.svg'
                }
              />
              <Container >
                <Text
                  textTransform={'uppercase'}
                  color={'grey.200'}
                  fontWeight={100}
                  fontSize={'md'}
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'lg'}>
                  About WeFund
                </Text>
                <Heading w={'2xl'} fontWeight={400}>One Goal, One Passion</Heading>
              </Container>
            </Flex>
          </Container>
          <br/>
          <Text color={'gray.200'} fontSize={'lg'}>
          WeFund is Decentralized crowdfunding for the crypto-startup project industry and beyond implemented for a real-life use case. <br/> <br/> The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market.
            to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Etherium, Cardano, etc in near future.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} >
            <Stack
              spacing={4}
              mt={'10'}>
              <Feature
                icon={
                  <Image
                  src={'ca1.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Yield Benefit for Backers'}
              />
              <Feature
                icon={
                  <Image
                  src={'ca2.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Governance Voting Power'}
              />
            </Stack>
            <Stack
            spacing={4}
            mt={'10'}>
              <Feature
                icon={
                  <Image
                  src={'ca3.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Secure Stable Deposits'}
              />
              <Feature
                icon={
                  <Image
                  src={'ca4.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Deflationary Token Value'}
              />
            </Stack>          
            <Stack
              spacing={4}
              mt={'10'}>
              <Feature
                icon={
                  <Image
                  src={'ca5.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Low Risk investment'}
              />
              <Feature
                icon={
                  <Image
                  src={'ca6.svg'}/>
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'NFT Mirror Real World Asset'}
              />
            </Stack>
          </SimpleGrid>
          <br/><br/><br/>
          <Button rightIcon={<IoArrowForwardCircle/>} bgGradient={"linear( #79D1F0, #69A7E8)"} mt= {'10%'}  size="lg" maxW={'600'} ml={'200px'}>
            Download Whitepaper
          </Button>
        </Stack>
          
          <Flex>            
            <Image
              alt={'feature image'}
              mt={'15%'}
              ml={'10%'}
              w={'80%'}
              h={'80%'}
              src={
                'wfd%20abt.svg'
              }
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }