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
      bgImage="url('https://www.wefund.app/assets/images/Rectangle%20181.png'),linear-gradient( #331666, #801998, #5D6FE1, #4B40A1, #48056C)"
      bgPosition="center"
      color={color[colorMode]}
      {...props}
    />
  )
}
