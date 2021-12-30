import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Roadmaps() {
  return (
    <Flex
      w="100%"
      pt="47px"
      mt="117px"
      justify="center"
      direction="column"
      alignItems="center"
    >
      <Flex
        direction="column"
        textAlign="center"
        fontFamily="Sk-Modernist-Regular"
      >
        <Text fontWeight="400" fontSize="22px" color="gray">
          ROADMAP
        </Text>
        <Flex
          mt="15px"
          mb="100px"
          direction="row"
          fontSize="35px"
          fontWeight="bolder"
          fontFamily="Sk-Modernist-Bold"
        >
          <Text color="#00A3FF">WeFund&nbsp;</Text>
          <Text>RoadMap</Text>
        </Flex>
      </Flex>

      {/* Road Map For Desktop */}
      <Flex id="RoadMapDesktop">
        <Image src="/RoadmapLine.svg" />
        <Flex id="roadmapBox1">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/circle.svg" id="circle1" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">V1 Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Platform</Text>
            <Text className="RoadmapDesc">
              Make running the platform with the basic functionality, create a
              project, back a project and stak the amount in Anchor, project
              done and project fail + yield transfer, will be done in December
              2021
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox2">
          <Flex className="RoadmapContent2">
            <Text className="RoadmapHeading">V2 Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Whitepaper</Text>
            <Text className="RoadmapDesc">
              Set up the Core Team, in terms of knowledge, responsability, team
              management and following the same vision, will be done in December
              2021
            </Text>
          </Flex>
          <Image src="/circle.svg" id="circle2" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox3">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/circle.svg" id="circle3" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Core Team Set-up</Text>
            <Text className="RoadmapDesc">
              Whitepaper 2.0, will be done in December 2021
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox4">
          <Flex className="RoadmapContent2">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Tokenomics</Text>
            <Text className="RoadmapDesc">
              Set up the tokenomics, the date for closing the seed, when and how
              long for the Pre Sale and understand what kind of IDO we want to
              apply and when, will be done in January 2022
            </Text>
          </Flex>
          <Image src="/circle.svg" id="circle4" />
          <Flex className="RoadmapContent"></Flex>
        </Flex>
        <Flex id="roadmapBox5">
          <Flex className="RoadmapContent2"></Flex>
          <Image src="/circle.svg" id="circle5" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Seed - Pre Sale - Ico</Text>
            <Text className="RoadmapDesc">
              Integrate the community voting power, equity crowdfunding system
              and Investor Protection using Milestone System.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Road Map For Mobile */}

      {/* Road Map For Desktop */}
      <Flex id="RoadMapMobile">
        <Image src="/RoadmapLine.svg" />
        <Flex id="roadmapBox1">
          <Image src="/circle.svg" id="circle1" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">V1 Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Platform</Text>
            <Text className="RoadmapDesc">
              Make running the platform with the basic functionality, create a
              project, back a project and stak the amount in Anchor, project
              done and project fail + yield transfer, will be done in December
              2021
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox2">
          <Image src="/circle.svg" id="circle2" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">V2 Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Whitepaper</Text>
            <Text className="RoadmapDesc">
              Set up the Core Team, in terms of knowledge, responsability, team
              management and following the same vision, will be done in December
              2021
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox3">
          <Image src="/circle.svg" id="circle3" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">Q4 2021</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Core Team Set-up</Text>
            <Text className="RoadmapDesc">
              Whitepaper 2.0, will be done in December 2021
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox4">
          <Image src="/circle.svg" id="circle4" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Tokenomics</Text>
            <Text className="RoadmapDesc">
              Set up the tokenomics, the date for closing the seed, when and how
              long for the Pre Sale and understand what kind of IDO we want to
              apply and when, will be done in January 2022
            </Text>
          </Flex>
        </Flex>
        <Flex id="roadmapBox5">
          <Image src="/circle.svg" id="circle5" />
          <Flex className="RoadmapContent">
            <Text className="RoadmapHeading">Q1 2022</Text>
            <Image src="/beautifulDash.svg" />
            <Text className="RoadmapTitle">Seed - Pre Sale - Ico</Text>
            <Text className="RoadmapDesc">
              Integrate the community voting power, equity crowdfunding system
              and Investor Protection using Milestone System.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
