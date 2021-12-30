import React from 'react'
import {
  chakra,
  useColorModeValue,
  useTokenBox,
  Flex,
  useToken,
  Heading,
  Stack,
  HStack,
  StackDivider,
  Text,
  Link,
  Image,
  SimpleGrid,
  Button,
  Input,
  Box,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react'

import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from 'react-icons/fa'

const Copyright = (props) => (
  <Text fontSize="sm" {...props} paddingLeft={{ base: '0px', lg: '90px' }}>
    &copy; {new Date().getFullYear()}{' '}
    <span style={{ color: '#00A3FF' }}>WeFund</span> All rights reserved.
  </Text>
)

const FooterHeading = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)

const LinkGrid = (props) => (
  <Flex
    columns={1}
    spacing={10}
    {...props}
    marginRight={'-20%'}
    paddingRight={{ base: '0px', lg: '90px' }}
  >
    <Box minW="130px" paddingLeft={'23%'}>
      <HStack
        spacing={10}
        fontFamily={'Sk-Modernist'}
        lineHeight={'18px'}
        fontWeight={'400'}
        fontSize={'15px'}
        color={'rgba(255, 255, 255, 0.84)'}
      >
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Partnership</Link>
        <Link>Litepaper</Link>
        <Link>Terms of Service</Link>
      </HStack>
    </Box>
  </Flex>
)

const Logo = (props) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <Image
      src="horizontallogo.svg"
      sizes="80%"
      paddingLeft={{ base: '0px', lg: '90px' }}
    ></Image>
  )
}

const SocialMediaLinks = (props) => (
  <ButtonGroup
    variant="ghost"
    color="gray.600"
    {...props}
    paddingRight={{ base: '0px', lg: '90px' }}
    spacing={2}
  >
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaMedium fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaYoutube fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaDiscord fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
)

const SubscribeForm = (props) => {
  return (
    <chakra.form
      {...props}
      onSubmit={(e) => e.preventDefault()}
      marginRight={{ base: '0px', lg: '90px' }}
    >
      <Stack spacing="4">
        <Stack
          spacing="4"
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Input
            bg={useColorModeValue('white', 'inherit')}
            width={'400px'}
            borderRadius={'40px'}
            backdropBlur={'54px'}
            minHeight={'50px'}
            bgColor={'rgba(255, 255, 255, 0.05)'}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
          />
          <Button
            px="31px"
            minHeight={'50px'}
            py="15px"
            type="submit"
            bg={
              'linear-gradient(180deg, rgba(0, 193, 255, 0.1) 0%, rgba(0, 193, 255, 0.1) 100%)'
            }
            width={{
              base: 'full',
              md: 'auto',
            }}
            flexShrink={0}
            border={'1.5px solid'}
            borderColor={' #0047FF'}
            borderRadius={'40px'}
            backdropBlur={'54px'}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  )
}

export default function Newfooter() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      background={
        'linear-gradient(90deg, rgba(54, 8, 71, 0.84) 0%, rgba(24, 7, 91, 0.84) 104.34%)'
      }
      width={'100%'}
      py="12"
      px={{
        base: '4',
        md: '8',
        lg: '0',
      }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{
            base: 'row',
            lg: 'row',
          }}
          spacing={{
            base: '10',
            lg: '28',
          }}
        >
          <Box flex="1" paddingLeft={{ base: '0px', lg: '90px' }}>
            <Text
              fontSize="21px"
              fontFamily={'Pilat Extended'}
              fontWeight={'800'}
            >
              Wanna know more about{' '}
              <span style={{ color: '#00A3FF' }}>WeFund</span>?
            </Text>
          </Box>
          <Stack
            direction={{
              base: 'row',
              md: 'row',
            }}
            spacing={{
              base: '10',
              md: '20',
            }}
          >
            <SubscribeForm
              width={{
                base: 'full',
                md: 'sm',
              }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1">
            <Logo />
          </Box>
          <LinkGrid
            spacing={{
              base: '10',
              md: '20',
              lg: '28',
            }}
            flex="1"
          />
        </Stack>
        <Stack
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  )
}
