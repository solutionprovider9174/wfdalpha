import React from 'react'
import { Image, Flex, Text, Box } from '@chakra-ui/react'
import { ButtonTransition } from '../components/ImageTransition'

export default function Industry() {
  return (
    <Flex
      width="100%"
      justify="center"
      alignItems="center"
      fontFamily="Sk-Modernist-Regular"
    >
      <Flex id="projectIndustryContainer">
        <Flex
          width="100%"
          justify="center"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          fontFamily="PilatExtended-Regular"
        >
          <Text fontSize="18px" fontWeight="400" color="#FFFFFF8A">
            PROJECTS
          </Text>
          <Flex id="headingIndustry">
            <Text color="#00A3FF">WeFund&nbsp;</Text>
            <Text>Supports All</Text>
          </Flex>
        </Flex>

        <Flex id="projectpad">
          {PROJECT_ITEMS.map((projectItem, index) => {
            const isOdd = index % 2 == 1
            return (
              <Flex
                key={index}
                className={isOdd ? 'PROJECT_ITEMS_ROW1' : 'PROJECT_ITEMS_ROW2'}
              >
                <Flex className="projectItemContentCol">
                  <Box>
                    <Text
                      fontFamily="PilatExtended-Regular"
                      fontWeight="300"
                      color="#FFFFFF8A"
                      className="projectLabel"
                    >
                      -{projectItem.label}
                    </Text>
                    <Text
                      fontFamily="PilatExtended-Regular"
                      className="projectTitle"
                    >
                      {projectItem.title}
                    </Text>
                    <Text
                      fontFamily="Sk-Modernist-Regular"
                      fontWeight="700"
                      color="#FE8600"
                      fontSize="18px"
                      margin="10px 0"
                    >
                      {projectItem.state}
                    </Text>
                    <Text
                      fontFamily="Sk-Modernist-Regular"
                      fontWeight="400"
                      fontSize="18px"
                      className="projectDesc"
                    >
                      {projectItem.description}
                    </Text>
                  </Box>
                  <Flex id="displayNoneInMobile">
                    <ButtonTransition
                      unitid={'cryptofunding' + index}
                      selected={false}
                      width="192px"
                      height="50px"
                      rounded="100px"
                    >
                      <Flex direction="row">
                        Start Funding
                        <Image ml="10px" alt="startfunding" src="/handgo.svg" />
                      </Flex>
                    </ButtonTransition>
                  </Flex>
                  <Flex id="displayNoneInDesktop">
                    <ButtonTransition
                      unitid={'cryptofunding' + index}
                      selected={false}
                      width="150px"
                      height="30px"
                      rounded="100px"
                    >
                      <Flex direction="row">
                        <Text color="white" fontSize="12px">
                          Start Funding
                        </Text>
                        <Image ml="10px" alt="startfunding" src="/handgo.svg" />
                      </Flex>
                    </ButtonTransition>
                  </Flex>
                </Flex>
                <Box className="projectItemImageCol">
                  <Image
                    alt="Crypto project"
                    src={projectItem.imgsrc}
                    w="100%"
                    h="100%"
                  />
                </Box>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}

const PROJECT_ITEMS = [
  {
    label: 'CRYPTO-STARTUP INDUSTRY',
    title: 'Crypto Project',
    state: 'Ongoing',
    description:
      'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/CryptoProject.png',
  },
  {
    label: 'GAMING INDUSTORY',
    title: 'Gaming Project',
    state: 'Coming soon',
    description:
      'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its  limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/GamingProject.png',
  },
  {
    label: 'CREATIVE INDUSTRY',
    title: 'Creative Project',
    state: 'Coming soon',
    description:
      'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/CreativeProject.png',
  },
  {
    label: 'SPORTS INDUSTRY',
    title: 'Sports Project',
    state: 'Coming soon',
    description:
      'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/SportsProject.png',
  },
  {
    label: 'REAL ESTATE INDUSTRY',
    title: 'Real Estate Project',
    state: 'Coming soon',
    description:
      'WeFund supports both crypto and non-crypto projects. We are passionate about blockchain technology and its limitless potential. WeFund is designed to democratize the fundraising process.',
    imgsrc: '/RealEstateProject.png',
  },
]
