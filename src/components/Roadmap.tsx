import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Image,
  } from '@chakra-ui/react';
  
  export default function Roadmaps() {
    return (
      <Flex placeContent={'center'} mt={'90'} mb={'90'}>
        <Image
              alt={'Wefund'}
              src={
                'https://www.wefund.app/assets/images/Roadmap1.png'
              }
            />
      </Flex>
    );
  }