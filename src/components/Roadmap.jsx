import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Image,
  } from '@chakra-ui/react';
import React from 'react';

export default function Roadmaps() {
  return (
    <Flex placeContent={'center'} mt={'90'} mb={'90'}>
      <Image
            alt={'Wefund'}
            src={
              'Roadmap1.png'
            }
          />
    </Flex>
  );
}