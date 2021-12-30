import React from 'react'
import { Image, Flex, Text, Box } from '@chakra-ui/react'
import { ButtonBackTransition } from './ImageTransition'

export default function OurMissions() {
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
          <Text id="aboutUsPageLable">FUTURE PLAN</Text>
          <Flex id="headingIndustry">
            <Text color="#00A3FF">WeFund&nbsp;</Text>
            <Text>Mission</Text>
          </Flex>
          <Text
            fontFamily="Sk-Modernist-Regular"
            id="aboutUsPageHeadingDesc"
            color="#FFFFFF8A"
          >
            WeFund's mission is to improve and ultimately solve these key
            aspects of crowdfunding
          </Text>
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
                    {projectItem.title && (
                      <Text
                        fontFamily="PilatExtended-Regular"
                        className="projectTitle"
                      >
                        {projectItem.title}
                      </Text>
                    )}
                    <Text
                      className="projectDesc"
                      fontFamily="Sk-Modernist-Regular"
                    >
                      {projectItem.description}
                    </Text>
                  </Box>
                  <Flex id="displayNoneInMobile">
                    <ButtonBackTransition
                      unitid={'cryptofunding' + index}
                      selected={false}
                      width="192px"
                      height="50px"
                      rounded="100px"
                    >
                      Learn more
                    </ButtonBackTransition>
                  </Flex>
                  <Flex id="displayNoneInDesktop">
                    <ButtonBackTransition
                      unitid={'cryptofunding' + index}
                      selected={false}
                      width="120px"
                      height="30px"
                      rounded="100px"
                    >
                      <Text fontSize="12px" fontFamily="Sk-Modernist-Regular">
                        Learn more
                      </Text>
                    </ButtonBackTransition>
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
    title: 'Projects and project-related events are approved by the community',
    description:
      'This helps to give backers what they want, and allows greater agility for projects to adjust and follow market trends.',
    imgsrc: '/CryptoProject.png',
  },
  {
    title: 'Backers are protected',
    description:
      "Funds are released gradually after they are approved by the community. At the same time, this process helps to keep the team's morale and motivation high.",
    imgsrc: '/GamingProject.png',
  },
  {
    title: 'Security',
    description:
      'By using Anchor protocol we safeguard funds from hackers and human errors, which in turn helps projects to move forward with greater peace of mind.',
    imgsrc: '/CreativeProject.png',
  },
  {
    description:
      "We create a set of fundraising events along the project's development timeline, which gives credibility and a greater chance of success, and at the same time avoids collecting and risking large sums of backer funds before a project demonstrates progress. This helps everyone, the team as well as the project backers. Crowdfunding works when done with fairness, therefore we created a system to maximize the backing opportunity proportional to the number of potential backers, always guaranteeing the possibility for backers to participate.",
    imgsrc: '/SportsProject.png',
  },
  {
    title: 'WeFund changes the game',
    description:
      'Protects backers and at the same time protects project creators, making the whole process more secure and transparent.',
    imgsrc: '/RealEstateProject.png',
  },
]
