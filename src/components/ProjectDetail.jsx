import {
    chakra, 
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Container,
    Link,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Stack,
    Wrap,
    WrapItem,
    textAlign,
    FormLabel,
    Input,
    InputGroup,
    Image,
    Textarea,
    Select,
    Checkbox,
  } from '@chakra-ui/react';
  import React from 'react';

  import { BsBookmarksFill, BsBox, BsPerson, BsCashCoin } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  
  export default function DetailProject() {
    return (
      
        <Flex>
          <Box
            bg="linear-gradient(180deg, #5E30DF 0%, rgba(97, 45, 208, 0.924167) 55.73%, rgba(116, 41, 190, 0.84) 100%)"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap>
                <WrapItem>
                
      <Box
        bg={"white"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://www.wefund.app/assets/images/lynx.jpeg"
          alt="project-Image"
        />

        <Box py={5} textAlign="center">
          
        </Box>
      </Box>
      
    
                </WrapItem>
                <WrapItem>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        $Project Name
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={'gray.800'}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
            'Backer'
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              2000
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={'gray.800'}
            alignContent={'center'}>
            <BsPerson size={'2em'} />
          </Box>
        </Flex>
      </Stat>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={'gray.800'}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
            'Funding Pool'
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
             20,000
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={'gray.800'}
            alignContent={'center'}>
            <BsCashCoin size={'2em'} />
          </Box>
        </Flex>
      </Stat>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
            'Category'
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
             Charity
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={'gray.800'}
            alignContent={'center'}>
            <BsBookmarksFill size={'2em'} />
          </Box>
        </Flex>
      </Stat>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
            'Platform'
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              Cardano
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={'gray.800'}
            alignContent={'center'}>
            <BsBox size={'2em'} />
          </Box>
        </Flex>
      </Stat>
      </SimpleGrid>
    </Box>
                </WrapItem>
                <WrapItem>
                <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={"white"}
          mb={6}
        >
          <chakra.span display="block">Introducing $Projectname</chakra.span>
         
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={"gray.100"}
        >
          Lynx VR: A charity project of a simulation game (play2earn) based on Virtual Reality which helped user 
          to stimulus the perception based on Cognitive Behavioral Therapy (CBT) to help mental illness victim.
        Sharing is caring, we want to help people and share love to the other that 
        “you are not alone, we are here to help you”. People are actually can earn while trying fixing their illness.
         The player will received $Lynx token after they finish the session. 
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
            <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={"white"}
              bg={"purple.600"}
              _hover={{
                bg:"purple.700",
              }}
            >
              Go to Website
            </chakra.a>
          </Box>
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={"white"}
              bg={"purple.600"}
              _hover={{
                bg:"purple.700",
              }}
            >
              See Whitepaper
            </chakra.a>
          </Box>
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={"white"}
              bg={"purple.600"}
              _hover={{
                bg:"purple.700",
              }}
            >
              Back $Projectname!
            </chakra.a>
          </Box>
        </Stack>
      </Box>
     
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
    );
  }