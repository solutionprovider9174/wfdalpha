import React from "react";
import {
  chakra,
<<<<<<< Updated upstream
=======
  Text,
  Button,
>>>>>>> Stashed changes
  Box,
  Image,
  Flex,
  Icon,
<<<<<<< Updated upstream
=======
  HStack,
  VStack,
  Heading,
>>>>>>> Stashed changes
  useColorModeValue
} from "@chakra-ui/react";

import { MdHeadset, MdEmail, MdLocationOn, MdWork, MdWeb, MdWebStories } from "react-icons/md";
import { BsArrow90DegRight, BsFillBriefcaseFill } from "react-icons/bs";

const Projectfeature = () => {
  return (
    <Flex
<<<<<<< Updated upstream
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      
      <Box
        w="xs"
        mx="auto"
        bg="white"
        
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="lynx.jpeg"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          

=======
      alignItems="center"
      justifyContent="center"
      overflow={"hidden"}
      marginBottom = {"100px"}
    >
      <VStack>
      <Flex>
        <HStack>
          <Flex maxW={"485px"} alignSelf={"flex-start"} >
          <Image
                alt={'Wefund'}
                src={
                  'featuredh.svg'
                }
              />
          </Flex>
          <Flex>
          <Button bg={"linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)"} width= "180px"
height= "50px" alignSelf={"flex-end"} 
border={"1.5px solid"}
borderColor={" #0047FF"} borderRadius={"40px"} backdropBlur={"54px"}> 
            Browse Projects
            </Button></Flex>
      </HStack>
      </Flex>
      <HStack spacing={8}>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"4xl"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
>>>>>>> Stashed changes
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Charity Project
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Cardano
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
<<<<<<< Updated upstream
      </Box>
      <Box
        w="xs"
        mx="auto"
        bg="white"
        
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="coin%20icon%20shp1.png"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Sheep
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Sheep: Memecoin to share awareness of covid 
=======
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
>>>>>>> Stashed changes
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Memecoin Project
=======
              Charity Project
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Terra Ecosystem
=======
              Cardano
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              -\
            </chakra.h1>
          </Flex>
        </Box>
<<<<<<< Updated upstream
      </Box><Box
        w="xs"
        mx="auto"
        bg="white"
        
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="simba%20icon-mini.png"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Simba
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Simba: A charity project on memecoin to fund nature and ecosystem
=======
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
>>>>>>> Stashed changes
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Memecoin Project
=======
              Charity Project
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Terra Ecosystem
=======
              Cardano
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              -
            </chakra.h1>
          </Flex>
        </Box>
      </Box><Box
        w="xs"
        mx="auto"
        bg="white"
        
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="6053394334130220469_121.jpg"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            Crypto of Duty
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Crypto of Duty: Multi Chain global war project game
=======
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      <Box
        w= "515px"
        h= "277px"
        mx="auto"
        bg={"rgba(255, 255, 255, 0.1)"}
        border= "1.5px solid rgba(255, 255, 255, 0.2)"
        boxSizing="border-box"
        borderRadius={"20px"}
        marginLeft={"25px"}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      ><HStack>
        <Flex 
        my={"6px"}
        mx={"6px"}
        width="165px"
        height="265px"
        bg="#FFFFFF"
        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"2xl"}
        px="30px"
        py="60px">
        
        <Image
        height="80px"
        src="lynx.jpeg"
        alt="avatar"
        />
        </Flex>

        <Box py={4} px={2}>
          
        <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Lynx Vr
          </chakra.h1>
          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
          Lynx VR: A charity project of a simulation game  based on VR
>>>>>>> Stashed changes
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={MdWebStories}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Game Project
=======
              Charity Project
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              Multichain
=======
              Cardano
>>>>>>> Stashed changes
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdWork} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
<<<<<<< Updated upstream
              -
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
=======
              -\
            </chakra.h1>
          </Flex>
        </Box>
        </HStack>
      </Box>
      </HStack>
      </VStack>
      
>>>>>>> Stashed changes
      
    </Flex>
  );
};

export default Projectfeature;