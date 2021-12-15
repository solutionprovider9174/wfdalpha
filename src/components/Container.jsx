import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';
import React from 'react';

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'purple.900', dark: 'purple.900' }

  const color = { light: 'white', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
<<<<<<< Updated upstream
      bgImage="url('Rectangle%20181.png'),linear-gradient( #331666, #801998, #5D6FE1, #4B40A1, #48056C)"
=======
      bg={"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"}
>>>>>>> Stashed changes
      bgPosition="center"
      color={color[colorMode]}
      {...props}
    />
  )
}
