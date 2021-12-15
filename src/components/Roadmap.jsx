import {
    Stack,
    Flex,
<<<<<<< Updated upstream
=======
    HStack,
>>>>>>> Stashed changes
    Button,
    Text,
    VStack,
    Image,
  } from '@chakra-ui/react';
import React from 'react';

export default function Roadmaps() {
  return (
<<<<<<< Updated upstream
    <Flex placeContent={'center'} mt={'90'} mb={'90'}>
      <Image
            alt={'Wefund'}
            src={
              'Roadmap1.png'
            }
          />
    </Flex>
=======
    <Flex overflow={"hidden"}
    minW={'1440px'}>
    <Flex mt={'150px'} ml={'80px'} minW={"700px"}>
      <Image
            alt={'Wefund'}
            src={
              'newroadmap.svg'
            }
          />
    </Flex>
    <Flex >
      <Image marginLeft={"200px"} marginTop={'-800px'}
            alt={'Wefund'}
            src={
              'sphere.svg'
            }
          /></Flex>
          </Flex>
>>>>>>> Stashed changes
  );
}