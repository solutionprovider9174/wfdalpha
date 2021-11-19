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
  <Tabs size="lg" marginTop = {20}  colorScheme="white">
  <TabList justifyContent={"space-evenly"}>
    <Center>
      <Tab as={Stack} >
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
      <Tab as={Stack} >
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
      <Tab as={Stack} >
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
      <Tab as={Stack} >
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
      <Tab as={Stack} >
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
  <TabPanels  size="md" maxW={'6xl'} maxH={'48vh'} py={12} bgGradient={"linear(to-l, #E8E9FF, #D9F1FF)"} boxShadow="xl" p="6" rounded="2xl" >
  <TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
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
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'mad_blog_5c2dd3d52d3d11546507221.png'
            }
            objectFit={'cover'}
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
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
          <Stack spacing={12} direction={'row'}>
          <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button  size="sm" maxW={'20'} colorScheme={'bslue'}>
            
            </Button>
            <Button colorScheme={'blue'}  size="lg" maxW={'200'}>
            Start Funding
            </Button>
            </Stack>
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'gameee.jpg'
            }
            objectFit={'cover'}
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Creative Industry Projects</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          WeFund admires the creative industry and its unique projects. 
          With WeFund, creators can share their projects to a community that will provide the capital to make these projects become a reality.
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
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'sejarah-esports-1_169.jpeg'
            }
            objectFit={'cover'}
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Sport Industries</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          The WeFund platform offers a lot of flexibility to the types of projects that can be featured.
           Even the sports industry offers a lot of innovation and strong community of backers to bring them to existence.
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
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              'file-20181001-195269-1t3hsge.jpg'
            }
            objectFit={'cover'}
          />
          </Box>
        </Flex>
        
      </SimpleGrid>
      </TabPanel><TabPanel>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <br/><br/>
          <Heading color={'blue.500'} >Real Estate Projects</Heading>
          <Text color={'gray.800'} fontSize={'lg'}>
          The real estate investment process is due for innovation. 
          WeFund is introducing a new and democratized approach to fund real-estate projects granting backers access to promising real-estate projects.
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
        </Stack>
        <Flex>
          <Box>
          <br/>
          <Image
            rounded={'md'}
            alt={'feature image'}
            minH = {350}
            paddingLeft={20}
            src={
              '448_ergosuntiles.png'
            }
            objectFit={'cover'}
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
