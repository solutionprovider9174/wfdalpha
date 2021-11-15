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
import { ReactElement } from 'react';

export default function Industry(){ 
    return(
      <Flex>
    <Tabs size="lg" marginTop = {20}>
    <TabList>
      <Center>
        <Tab as={Stack} >
            <Image
                w = {70}
                src="https://www.wefund.app/assets/images/WeFund%20Logos%20only.png"
                alt="WeFund"
                /> 
                <Stack direction={'row'} spacing={12} p={2}>
                <Text fontSize={14} maxW={24}>Crypto-Startup Industry </Text>
                </Stack>
        </Tab>
        <Tab as={Stack}>
            <Image
                w = {70}
                src="https://www.wefund.app/assets/images/WeFund%20Logos%20only.png"
                alt="WeFund"
                /> 
                <Stack direction={'row'} spacing={12} p={2}>
                <Text fontSize={14} maxW={24}>Crypto-Startup Industry </Text>
                </Stack>
        </Tab>
        <Tab as={Stack}>
            <Image
                w = {70}
                src="https://www.wefund.app/assets/images/WeFund%20Logos%20only.png"
                alt="WeFund"
                /> 
                <Stack direction={'row'} spacing={12} p={2}>
                <Text fontSize={14} maxW={24}>Crypto-Startup Industry </Text>
                </Stack>
        </Tab>
        <Tab as={Stack}>
            <Image
                w = {70}
                src="https://www.wefund.app/assets/images/WeFund%20Logos%20only.png"
                alt="WeFund"
                /> 
                <Stack direction={'row'} spacing={12} p={2}>
                <Text fontSize={14} maxW={24}>Crypto-Startup Industry </Text>
                </Stack>
        </Tab>
        <Tab as={Stack}>
            <Image
                w = {70}
                src="https://www.wefund.app/assets/images/WeFund%20Logos%20only.png"
                alt="WeFund"
                /> 
                <Stack direction={'row'} spacing={12} p={2}>
                <Text fontSize={14} maxW={24}>Crypto-Startup Industry </Text>
                </Stack>
        </Tab>
        </Center>
        
    </TabList>
    <TabPanels  size="md" variant="enclosed" maxW={'6xl'} py={12} bgGradient={"linear(to-l, #E8E9FF, #D6CDF8)"} boxShadow="xl" p="6" rounded="2xl" >
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
            <Button  size="lg" maxW={'00'}>
              
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
              src={
                'https://www.wefund.app/assets/images/mad_blog_5c2dd3d52d3d11546507221.png'
              }
              objectFit={'cover'}
            />
            </Box>
          </Flex>
          
        </SimpleGrid>
        </TabPanel>
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
            <Button  size="lg" maxW={'00'}>
              
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
              src={
                'https://www.wefund.app/assets/images/mad_blog_5c2dd3d52d3d11546507221.png'
              }
              objectFit={'cover'}
            />
            </Box>
          </Flex>
          
        </SimpleGrid>
        </TabPanel>
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
            <Button  size="lg" maxW={'00'}>
              
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
              src={
                'https://www.wefund.app/assets/images/mad_blog_5c2dd3d52d3d11546507221.png'
              }
              objectFit={'cover'}
            />
            </Box>
          </Flex>
          
        </SimpleGrid>
        </TabPanel>
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
            <Button  size="lg" maxW={'00'}>
              
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
              src={
                'https://www.wefund.app/assets/images/mad_blog_5c2dd3d52d3d11546507221.png'
              }
              objectFit={'cover'}
            />
            </Box>
          </Flex>
          
        </SimpleGrid>
        </TabPanel>
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
            <Button  size="lg" maxW={'00'}>
              
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
              src={
                'https://www.wefund.app/assets/images/mad_blog_5c2dd3d52d3d11546507221.png'
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
