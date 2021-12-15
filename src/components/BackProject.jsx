import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Select,
    Checkbox,
  } from '@chakra-ui/react';
  import React from 'react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  export default function BackProject() {
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
                  <Box>
                    <Heading color="#DADADA" alignSelf="center">Back the Project</Heading>
                    <Heading color="#DADADA" alignSelf="center">$project_name</Heading>
                  
                    
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 1 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                      
                    <Box m={8} color="#B0B0B0">
                      <VStack spacing={5}>
                        <FormControl id="wallet">
                          <FormLabel color="#E0E1E7">Your Wallet</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              
                            />
                            <Input type="text" size="md" bg = "white" />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                    <FormLabel
                     color="#E0E1E7">
                      Tokens Selection
                    </FormLabel>
                    <Select
                      id="ecosystem"
                      name="ecosystem"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      bg = "white"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>Luna</option>
                      <option>UST</option>
                      <option>ETH</option>
                    </Select>
                  </FormControl>
                        <HStack>
                        <FormControl id="fundamount">
                          <FormLabel color="#E0E1E7">Your Contribution Amount</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input type="text" size="md" bg = "white" />
                          </InputGroup>
                        </FormControl>

                        
                        <FormControl id="fees">
                          <FormLabel color="#E0E1E7">Approximate Calculated Fee</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input type="number" size="md" bg = "white"/>
                          </InputGroup>
                        </FormControl>
                        </HStack>
                       
                        <FormControl id="comment">
                          <FormLabel color="#E0E1E7">Remarks for the Project</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            bg = "white"
                          />
                        </FormControl>
                        
                        <FormControl id="submit" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Your Contribution
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  
                      </VStack>
                    </Box>
                    
                  </Box>
                </WrapItem>
                <WrapItem>
                  
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
    );
  }