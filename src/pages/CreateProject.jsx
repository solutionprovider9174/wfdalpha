import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {
    chakra,
    Box,
    Flex,
    SimpleGrid,
    GridItem,
    Heading,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    FormHelperText,
    Textarea,
    Avatar,
    Icon,
    Button,
    VisuallyHidden,
    Select,
    Checkbox,
    RadioGroup,
    Radio,
    HStack,
    InputLeftElement,
  } from "@chakra-ui/react";
  import React from 'react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

  import { FaUser } from "react-icons/fa";
  
  export default function NewProject() {
    return (
      <ChakraProvider resetCSS theme={theme}>
        <Container>
        <Flex>
          <Box
            bg="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.81) 100%)"
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box>
            <Heading color="gray.800" alignSelf="center">Create New Project</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.800">
                      Select to have it pooled on
                    </Text>
                    <HStack>
                    <Box w = "78px" h= "78px" background= "#FFFFFF"border= "2px solid #3E267C" borderRadius= "lg">

                    </Box>
                    <Box w = "78px" h= "78px" background= "#FFFFFF"border= "2px solid #3E267C" borderRadius= "lg">
                        
                        </Box>
                    </HStack>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form

              method="POST"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                spacing={6}
                color = "grey.800"
                p={{ sm: 6 }}
              >
                <SimpleGrid columns={3} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="project_name"
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Project Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="projectname"
                      id="projectname"
                      autoComplete="Project Name"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Website
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        children="http://"
                        bg={"gray.50"}
                        color={"gray.500"}
                        rounded="md"
                      />
                      <Input
                        type="tel"
                        placeholder="www.example.com"
                        focusBorderColor="purple.800" borderColor="#DADADA"
                        rounded="md"
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>

                <div>
                  <FormControl id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      placeholder="you@example.com"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      fontSize={{ sm: "sm" }}
                    />
                    <FormHelperText>
                      Brief description for your profile. URLs are hyperlinked.
                    </FormHelperText>
                  </FormControl>
                </div>

                

                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={"gray.700"}
                  >
                    White Paper
                  </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    borderColor={"gray.300"}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color={"gray.400"}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color={"gray.600"}
                        alignItems="baseline"
                      >
                        <chakra.label
                          htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color={"brand.600"}
                          pos="relative"
                          _hover={{
                            color: "brand.400",
                          }}
                        >
                          <span>Upload a file</span>
                          <VisuallyHidden>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                            />
                          </VisuallyHidden>
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        color={"gray.500"}
                      >
                        PDF, DOCX
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>
              </Stack>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
     

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form

              method="POST"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Ecosystem
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>Terra</option>
                      <option>Cardano</option>
                      <option>Solana</option>
                    </Select>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Project Category
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>Crypto</option>
                      <option>Charity</option>
                      <option>Gamification</option>
                    </Select>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={"gray.700"}
                    >
                      Funding Pool Required
                    </FormLabel>
                    <Input
                      type="number"
                      name="funding"
                      id="funding"
                      mt={1}
                      focusBorderColor="purple.800" borderColor="#DADADA"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  

                  
                </SimpleGrid>
              </Stack>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>

      

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form

              method="POST"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                spacing={6}
              >
                <chakra.fieldset>
                  <Box
                    as="legend"
                    fontSize="md"
                    color={"gray.900"}
                  >
                    Additional Support Request
                  </Box>
                  <Stack mt={4} spacing={4}>
                    <Flex alignItems="start">
                      <Flex alignItems="center" h={5}>
                        <Checkbox
                        
                      focusBorderColor="purple.800" borderColor="#DADADA"
                          colorScheme="purple"
                          id="comments"
                          rounded="md"
                        />
                      </Flex>
                      <Box ml={3} fontSize="sm">
                        <chakra.label
                          htmlFor="comments"
                          fontWeight="md"
                          color={"gray.700"}
                        >
                          Featured
                        </chakra.label>
                        <Text color={"gray.500"}>
                          Get Featured
                        </Text>
                      </Box>
                    </Flex>
                    <Flex alignItems="start">
                      <Flex alignItems="center" h={5}>
                        <Checkbox
                          colorScheme="purple"
                          id="candidates"
                          rounded="md"
                          borderColor="#DADADA"
                        />
                      </Flex>
                      <Box ml={3} fontSize="sm">
                        <chakra.label
                          htmlFor="candidates"
                          fontWeight="md"
                          color={"gray.700"}
                        >
                          Partnership
                        </chakra.label>
                        <Text color={"gray.500"}>
                          Get Partnership with WeFund.
                        </Text>
                      </Box>
                    </Flex>
                    <Flex alignItems="start">
                      <Flex alignItems="center" h={5}>
                        <Checkbox
                          colorScheme="purple"
                          id="offers"
                          rounded="md"
                          borderColor="#DADADA"
                        />
                      </Flex>
                      <Box ml={3} fontSize="sm">
                        <chakra.label
                          htmlFor="offers"
                          fontWeight="md"
                          color={"gray.700"}
                        >
                         Incubation
                        </chakra.label>
                        <Text color={"gray.500"}>
                          Get Incubation within WeFund and Partners.
                        </Text>
                      </Box>
                    </Flex>
                  </Stack>
                </chakra.fieldset>
              </Stack>
              <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#8035FB"
                            color="white"
                            _hover={{}}>
                            Submit to Create Project
                          </Button>
                        </FormControl>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
          </Box>
        </Flex>
        </Container>
      </ChakraProvider>
    );
  }