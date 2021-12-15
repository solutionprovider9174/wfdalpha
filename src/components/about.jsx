import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
<<<<<<< Updated upstream
=======
    HStack,
    VStack,
    Center,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  
=======
  import { BsBookmarksFill, BsBox, BsPerson, BsCashCoin } from 'react-icons/bs';
>>>>>>> Stashed changes
  // interface FeatureProps {
  //   text: string;
  //   iconBg: string;
  //   icon?: ReactElement;
  // }
  
<<<<<<< Updated upstream
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
=======

  
  export default function Aboutone() {
    return (
      <Container maxW={'8xl'} py={12} p="6">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} backgroundImage={'url(swirl.svg)'} backgroundSize = {"contain"} bgPosition={'center'} bgRepeat={'no-repeat'}>
          <Stack spacing={1}>
          <Container ml={'-10'}>
            <VStack>
            <Text
                  textTransform={'uppercase'}
                  color={'rgba(255, 255, 255, 0.54)'}
                  fontWeight={'normal'}
                  fontSize={'18px'}
>>>>>>> Stashed changes
                  p={2}
                  alignSelf={'flex-start'}
                  rounded={'lg'}>
                  About WeFund
                </Text>
<<<<<<< Updated upstream
                <Heading w={'2xl'} fontWeight={400}>One Goal, One Passion</Heading>
              </Container>
            </Flex>
=======
              <Image
              alignSelf={'flex-start'}
                alt={'Wefund'}
                src={
                  'onegoal.svg'
                }
              />
              <Container >
                
              </Container>
            </VStack>
>>>>>>> Stashed changes
          </Container>
          <br/>
          <Text color={'gray.200'} fontSize={'lg'}>
          WeFund is Decentralized crowdfunding for the crypto-startup project industry and beyond implemented for a real-life use case. <br/> <br/> The vision of WeFund is to become the connector of the blockchain ecosystem that exists on the market.
            to fulfill this vision, WeFund's initial development stage would be in the Terra ecosystem and will continue to use another ecosystem such as Solana, Etherium, Cardano, etc in near future.
          </Text>
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
        </Stack>
          
          <Flex>            
            <Image
              alt={'feature image'}
              mt={'15%'}
              ml={'10%'}
              w={'80%'}
              h={'80%'}
              src={
<<<<<<< Updated upstream
                'wfd%20abt.svg'
=======
                'rocket.svg'
>>>>>>> Stashed changes
              }
            />
          </Flex>
        </SimpleGrid>
<<<<<<< Updated upstream
=======
        <Flex alignItems="center"
      justifyContent="center"
      overflow={"hidden"}>
          <VStack>
        <HStack alignSelf={"center"} borderRadius={"30px 0px 0px 30px"}>
        <Center>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              marginTop={10}
              maxH = {100}
              src="prj-startup.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={5}>
              <Text fontSize={14} maxW={24} textAlign="center">Crypto-Startup Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack}
              bg={"rgba(255, 255, 255, 0.05)"} 
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-gaming.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={4}>
              <Text fontSize={14} maxW={24} textAlign="center">Gaming Industry</Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-creative.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={4}>
              <Text fontSize={14} maxW={24} textAlign="center">Creative Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.05)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
              <Image
              maxH = {100}
              src="prj-sport.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={6}>
              <Text fontSize={14} maxW={24} textAlign="center">Sport Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.08)"}
              width={"202px"}
              height= {"178px"}>
      <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
          <Image
              maxH = {100}
              src="prj-real%20estate.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={3}>
              <Text fontSize={14} maxW={24} textAlign="center">Real Estate Industry </Text>
              </Stack>
      </Flex>
      <Flex as={Stack} 
              bg={"rgba(255, 255, 255, 0.05)"}
              width={"202px"}
              height= {"178px"}>
          <Image
              maxH = {10}
              src="time-not%20yet.svg"
              alt="WeFund"
              marginRight={"70%"}
              /> 
              <Image
              maxH = {100}
              src="prj-sport.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={6}>
              <Text fontSize={14} maxW={24} textAlign="center">Sport Industry </Text>
              </Stack>
      </Flex>
      
      </Center>
        </HStack>
        <br/><br/><br/>
        <Center>
          <Flex 
          bg="linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)" 
          width= "1212px"
          height= "50px"
          borderRadius={"30px"}
          border={"1.5px solid"}
          borderColor={" #0047FF"}

>
          <Text>Download Whitepaper</Text>
          <BsPerson size={'2em'} /></Flex></Center></VStack>
        </Flex>
>>>>>>> Stashed changes
      </Container>
    );
  }