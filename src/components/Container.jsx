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
      justify="center"
      bg={"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)"}
      bgPosition="center"
      color={color[colorMode]}
      width='100%'
      {...props}
    />
  )
}
