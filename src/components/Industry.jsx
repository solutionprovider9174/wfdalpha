import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Icon,
  Link,
  Button,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import React from 'react';

export default function Industry() { 
  return(
    <Flex>
<<<<<<< Updated upstream
  <Tabs size="lg" marginTop = {20}  colorScheme="white">
  <TabList justifyContent={"space-evenly"}>
    <Center>
      <Tab as={Stack} >
=======
  <Tabs size="lg" marginTop = {20}  colorScheme="white" >
  <TabList justifyContent={"space-evenly"}>
    <Center>
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)"} width= "242px" height= "161px">
>>>>>>> Stashed changes
          <Image
              marginTop={10}
              maxH = {100}
              src="prj-startup.svg"
              alt="WeFund"
              /> 
              <Stack direction={'row'} spacing={12} p={5}>
              <Text fontSize={14} maxW={24} textAlign="center">Crypto-Startup Industry </Text>
              </Stack>
      </Tab>
<<<<<<< Updated upstream
      <Tab as={Stack} >
=======
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.05)"}width= "242px" height= "161px">
>>>>>>> Stashed changes
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
      </Tab>
<<<<<<< Updated upstream
      <Tab as={Stack} >
=======
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)" }  width= "242px" height= "161px">
>>>>>>> Stashed changes
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
      </Tab>
<<<<<<< Updated upstream
      <Tab as={Stack} >
=======
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.05)"}width= "242px" height= "161px">
>>>>>>> Stashed changes
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
      </Tab>
<<<<<<< Updated upstream
      <Tab as={Stack} >
=======
      <Tab as={Stack} bg={"rgba(255, 255, 255, 0.08)"} width= "242px" height= "161px">
>>>>>>> Stashed changes
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
      </Tab>
      
      </Center>
      
  </TabList>
<<<<<<< Updated upstream
  <TabPanels  size="md" maxW={'6xl'} maxH={'48vh'} py={12} bgGradient={"linear(to-l, #E8E9FF, #D9F1FF)"} boxShadow="xl" p="6" rounded="2xl" >
=======
  <TabPanels  size="md" maxW={'6xl'} maxH={'48vh'} py={12} p="6" >
>>>>>>> Stashed changes
  <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
<<<<<<< Updated upstream
          <Heading color={'blue.500'} >Crypto Project</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
=======
          <Heading
fontStyle=" normal"
fontWeight=" 300"
fontSize=" 18px"
lineHeight=" 150%"
/* identical to box height, or 27px */

letterSpacing=" 0.05em"
textTransform=" uppercase"
color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} fontFamily="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} fontFamily=" Sk-Modernist"
fontStyle=" normal"
fontWeight=" bold"
fontWize=" 18px"
lineHeight=" 140%">Ongoing</Text>
          <Text  fontFamily=" Sk-Modernist"
fontStyle=" normal"
fontWeight=" normal"
fontSize=" 18px"
lineHeight=" 150%"


color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'} marginTop={"56px"}>
            Start Funding
            </Button>
>>>>>>> Stashed changes
        </Stack>
        <Flex>
          <Box>
          <br/>
<<<<<<< Updated upstream
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'mad_blog_5c2dd3d52d3d11546507221.png'
            }
            objectFit={'cover'}
=======
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
>>>>>>> Stashed changes
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
<<<<<<< Updated upstream
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Gaming Industry</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          WeFund understands the communication between game developers and its players are essential for success. 
          With Us, game developers can share their projects to a large community of backers who will directly benefit from the project's success.
          </Text>
          <br/><br/><br/><br/>
=======
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">Ongoing</Text>
          <Text fontSize={'lg'} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
          </Text>
>>>>>>> Stashed changes
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
<<<<<<< Updated upstream
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
=======
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
>>>>>>> Stashed changes
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
<<<<<<< Updated upstream
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'gameee.jpg'
            }
            objectFit={'cover'}
=======
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
>>>>>>> Stashed changes
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
<<<<<<< Updated upstream
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Creative Industry Projects</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          WeFund admires the creative industry and its unique projects. 
          With WeFund, creators can share their projects to a community that will provide the capital to make these projects become a reality.
=======
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={"#2AC54D"} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">Ongoing</Text>
          <Text fontSize={'lg'} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund 1 supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
>>>>>>> Stashed changes
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
<<<<<<< Updated upstream
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
=======
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
>>>>>>> Stashed changes
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
<<<<<<< Updated upstream
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'sejarah-esports-1_169.jpeg'
            }
            objectFit={'cover'}
=======
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
>>>>>>> Stashed changes
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
<<<<<<< Updated upstream
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Sport Industries</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          The WeFund platform offers a lot of flexibility to the types of projects that can be featured.
           Even the sports industry offers a lot of innovation and strong community of backers to bring them to existence.
=======
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={" #FE8600"} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">OComing Soon</Text>
          <Text fontSize={'lg'} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund 2 supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
>>>>>>> Stashed changes
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
<<<<<<< Updated upstream
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
=======
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
>>>>>>> Stashed changes
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
<<<<<<< Updated upstream
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'file-20181001-195269-1t3hsge.jpg'
            }
            objectFit={'cover'}
=======
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
>>>>>>> Stashed changes
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
<<<<<<< Updated upstream
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Real Estate Projects</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          The real estate investment process is due for innovation. 
          WeFund is introducing a new and democratized approach to fund real-estate projects granting backers access to promising real-estate projects.
=======
      </TabPanel>
      <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading font-family=" Pilat Extended"
font-style=" normal"
font-weight=" 300"
font-size=" 18px"
line-height=" 150%"
/* identical to box height, or 27px */

letter-spacing=" 0.05em"
text-transform=" uppercase"

color=" rgba(255, 255, 255, 0.54)">Crypto Startup Industry</Heading>
          <Heading color={'white'} font-family="Pilat Extended">Crypto Project</Heading>
          <Text color={" #FE8600"} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" bold"
font-size=" 18px"
line-height=" 140%">Coming Soon</Text>
          <Text fontSize={'lg'} font-family=" Sk-Modernist"
font-style=" normal"
font-weight=" normal"
font-size=" 18px"
line-height=" 150%"
/* or 27px */


color=" #FFFFFF">
          WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.
>>>>>>> Stashed changes
          </Text>
          <br/><br/><br/><br/>
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
<<<<<<< Updated upstream
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
=======
            <Button bg={"linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"}  size="lg" maxW={'200'}>
>>>>>>> Stashed changes
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
<<<<<<< Updated upstream
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              '448_ergosuntiles.png'
            }
            objectFit={'cover'}
=======
          <Image 
            width="563px"
            height="438px"
            left="774px"
            top="2641px"
            borderRadius={"4xl"}
            paddingLeft={20}
            src={
              'nft.svg'
            }
>>>>>>> Stashed changes
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel>
  </TabPanels>
  </Tabs>
  </Flex>
  );
}
