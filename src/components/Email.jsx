import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';

export default function Emailsub() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      minH={'40vh'}
      align={'center'}
      justify={'center'}
      w={'100%'}

      bg={'whiteAlpha.100'}>
      <Container
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        bg={'purple.900'}
        direction={'column'}
        >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          
          >
          Join our Private Sales List!
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              h={16}
              disabled={state !== 'initial'}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }} h={20}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              h={16}
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.100'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "Lets go to the moon! 🚀"}
        </Text>
      </Container>
    </Flex>
  );
}