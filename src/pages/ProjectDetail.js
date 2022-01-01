import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import {chakra, Box, Flex,Text, Stack, Stat,StatNumber, StatLabel, Icon, Image, HStack, VStack, CircularProgress, CircularProgressLabel, Progress} from "@chakra-ui/react";
import React, {useEffect, useState,  useMemo} from 'react';
import {WasmAPI, LCDClient, } from '@terra-money/terra.js'
import {MdOutlinePlace} from "react-icons/md";
import {BsArrowUpRight,BsBookmarksFill, BsPerson, BsCashCoin} from "react-icons/bs"
import { Router, Link, useNavigate } from '@reach/router'

import {useStore} from '../store'
import {ImageTransition} from "../components/ImageTransition";
import Notification from '../components/Notification'
import Footer from "../components/Footer"

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default function ProjectDetail() 
{
  const { state, dispatch } = useStore();
  const [totalBackedMoney, setTotalBackedMoney] = useState(0);
  const [percent, setPercent] = useState(0);

  const navigate = useNavigate();
  //------------extract project id----------------------------
  let queryString, urlParams, project_id;
  if(typeof window != 'undefined'){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    project_id = urlParams.get('project_id')
  }


  //------------connect wallet ---------------------------------
  let connectedWallet = ''
  if (typeof document !== 'undefined') {
      connectedWallet = useConnectedWallet()
  }

  //------------init api, lcd ----------------------------------------------------
  const lcd = useMemo(() => {
    if (!connectedWallet) {
        return null
    }
    return new LCDClient({
        URL: connectedWallet.network.lcd,
        chainID: connectedWallet.network.chainID,
    })
  }, [connectedWallet]);

  const api = new WasmAPI(state.lcd_client.apiRequester);

  //------------notification setting---------------------------------
  const [notification, setNotification] = useState({
    type: 'success',
    message: '',
    show: false,
  })

  function hideNotification() {
    setNotification({
        message: notification.message,
        type: notification.type,
        show: false,
    })
  }

  function showNotification(message, type, duration) {
    // console.log('fired notification')
    setNotification({
        message: message,
        type: type,
        show: true,
    });

    // Disable after $var seconds
    setTimeout(() => {
        setNotification({
            message: message,
            type: type,
            show: false,
        })
        // console.log('disabled',notification)
    }, duration)
  }
  //------------back button-----------------------------------
  function next(){
    if(project_id == 2)//fake
      navigate("/invest_step1");
    else
      navigate("/back?project_id=" + state.oneprojectData.project_id);
  }
  //------------fectch project data------------------------------------
  async function fetchContractQuery() 
  {
    let _project_id = 1;
    if(project_id != null)
      _project_id = project_id;
    
    try {
      const projectData = await api.contractQuery(
        state.WEFundContractAddress,
          {
              get_project: {
                project_id: `${_project_id}`
              },
          }
      )
      if(!projectData)
        return;

      dispatch({
          type: 'setOneprojectdata',
          message: projectData,
      })
  
      let i, j
      let totalBacked = 0;
      for(j=0; j<projectData.backer_states.length; j++){
          totalBacked += parseInt(projectData.backer_states[j].ust_amount.amount);
      }

      totalBacked /= 10**6;

      if(project_id == 2)//fake
        totalBacked = 120000;

      let percent = parseInt(totalBacked/parseInt(projectData.project_collected)*100);

      setPercent(percent);
      setTotalBackedMoney(totalBacked);
    } catch (e) {
        console.log(e)
    }
  };

  useEffect(() => {
    fetchContractQuery();
  }, [connectedWallet, lcd])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'500' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", 
        boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
          <div style={{backgroundImage:"url('/projectbanner.svg')", width:'100%', width:'100%', zIndex:'11',backgroundPosition:'left', backgroundRepeat:'no-repeat', backgroundSize:'cover',zIndex:'11'}}>
            <Flex pt='64px' ml='100px' justify="left" height="200px">
            </Flex>
          </div>
        </div>
          <Flex width='100%' justify='center' mt='50px'>
            <Box style={{fontFamily:'Sk-Modernist-Regular'}} >
              
              {/* ------------Details------------ */}
              <Flex width='100%' justify='center' alignItems={'center'} zIndex={'1'} mt={'-180px'}>
                <VStack>
                      <Flex alignContent={'center'} direction={{base:'column',md:'column',lg:'row'}}>
                      <Flex 
                        width={{lg:'300px'}}
                        marginRight={{lg:'25px'}}
                        height={"490px"}
                        bg="rgba(20, 0, 75, 0.74)"
                        boxShadow={"0px 2px 10px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                        border='2px solid rgba(255, 255, 255, 0.05)'
                        borderRadius={"2xl"}
                        justify={'center'}
                        backdropFilter={'blur(54px)'}
                        align='center'
                        >
                          <object data="/logo.png" style={{width:'200px', height:'200px'}} type="image/png">
                            <Image 
                            src={state.request+"/download?filename="+ state.oneprojectData.project_icon} />
                          </object>
                      </Flex>
                      <VStack width={{lg:'880px'}} height={{lg:'484px'}}  paddingLeft= {{lg:'55px'}} style={{ backdropFilter:'blur(54px)', paddingTop:'45px', background:'rgba(20, 0, 75, 0.74)', border:'2px solid rgba(255, 255, 255, 0.05)', borderRadius: '25px'}}>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                          <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
                          <Text fontSize='16px' fontWeight='normal' color={'rgba(255, 255, 255, 0.54)'}>Projects &gt;&nbsp;</Text>
                          <Text fontSize='16px' color={'rgba(255, 255, 255, 0.84)'} textAlign='center'>
                            {state.oneprojectData.project_name}
                          </Text>
                        </Flex>
                        <Flex 
                          style={{fontFamily:'PilatExtended-Bold'}} 
                          alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                          <Text fontSize='40px' fontWeight={'900'}>
                            {state.oneprojectData.project_name}
                          </Text>
                        </Flex>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}} marginBottom={'40px !important'}>
                            <chakra.p color={"gray.100"} fontSize="15px">
                              Date - <span style={{color:"#FE8600"}}>10 Dec, 2021</span>
                            </chakra.p>
                            <Icon as={MdOutlinePlace} h={6} w={6} mr={2} ml={3} />

                            <chakra.h1 fontSize="sm" marginTop={"4px"}>
                              {state.oneprojectData.project_category}
                            </chakra.h1>
                        </Flex>
                        <Flex alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                        {/* The progress - Replace with functional ones*/}
                        <VStack alignSelf={'flex-start'}>
                        <Flex>
                        <Text>Progress : {totalBackedMoney} out of {state.oneprojectData.project_collected} UST
                        </Text>
                        </Flex>
                        <Flex 
                          alignSelf={{base:'center', md:'center', lg:'flex-start'}}>
                            <CircularProgress value={40} size='120px' color='#00A3FF;'>
                            <CircularProgressLabel>{percent}%</CircularProgressLabel>
                            </CircularProgress>
                        {/* The progress - Replace with functional ones*/}
                          </Flex> 
                          </VStack>
                          </Flex> 
                        {/* The Buttons*/}
                        <Flex  alignSelf={{base:'center', md:'center', lg:'flex-start'}} spacing={5} direction={{base:'column',md:'column',lg:'row'}} > 
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}} ml={{base:'0px', md:'0px', lg:'0px'}}>
                            <ImageTransition
                                unitid='visit'
                                border1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)' 
                                background1='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                border2='linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                            >
                              <Box variant="solid" color="white" justify='center' align='center'
                                  onClick = {()=>{}} >
                                Visit Website  <Icon as={BsArrowUpRight} h={4} w={4} mr={3} />
                              </Box>
                            </ImageTransition>
                          </Flex>
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}}  ml={{base:'0px', md:'-30px', lg:'10px'}}>
                            <ImageTransition 
                                unitid='view'
                                border1='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)' 
                                background1='linear-gradient(180deg, #FE8600 0%, #F83E00  100%)'
                                border2='linear-gradient(180deg, #FE8600 0%, #F83E00 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #FE8600 0%, #F83E00 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                              >
                          <Box variant="solid" color="white" justify='center' align='center'
                              onClick = {()=>{}} >
                            See Whitepaper
                          </Box>
                        </ImageTransition>
                          </Flex>
                          <Flex mt={{base:'20px', md:'20px', lg:'30px'}} mb={{base:'40px', md:'40px', lg:'20px'}}  ml={{base:'0px', md:'-30px', lg:'10px'}}>
                            <ImageTransition 
                                unitid='back'
                                border1='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)' 
                                background1='linear-gradient(180deg, #DEDBDB 0%, #DEDBD/B  100%)'
                                border2='linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)'
                                background2='linear-gradient(180deg, #1A133E 0%, #1A133E 100%)'
                                border3="linear-gradient(180deg, #DEDBDB 0%, #DEDBDB 100%)"
                                background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
                                selected={false}
                                width='170px' height='50px' rounded='33px'
                              >
                              <Box variant="solid" color="white" justify='center' align='center'
                                   onClick = {()=>{next()}} >
                                   Back {state.oneprojectData.project_name}
                              </Box>
                            </ImageTransition>
                          </Flex>
                        </Flex>
                      </VStack>
                      </Flex>
                    <Flex>
                        <VStack>
                          <Flex mt={'45px'} mb={'45px'} >
                            {/* ------------Details on key factors, as SimpleGrid with 1 Col at base, and 4 when in medium res. Stack of Stats------------ */}
                            <Flex borderTop="1.5px solid rgba(255, 255, 255, 0.15)" borderBottom="1.5px solid rgba(255, 255, 255, 0.15)" width={'100%'}>
                              <Flex spacing={{ base: 5, lg: 8 }} gridColumn={{ base:1, lg:4 }} direction={{base:'column',md:'column',lg:'row'}} justifyContent={"center"} paddingLeft={{lg:'110px'}}>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderLeft={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderRight={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                      <HStack>
                                        <BsPerson size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Amount Backed'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        {totalBackedMoney}
                                        </StatNumber>
                                        
                                    </Box>
                                    
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderRight={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsCashCoin size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Fundraising Amount'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        {state.oneprojectData.project_collected}
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    borderRight={{base:'1px solid', md:'1px solid', lg:'0px solid'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsBookmarksFill size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Category'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        {state.oneprojectData.project_subcategory}
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                                <Stat
                                    px={{ base: 2, md: 4 }}
                                    py={'5'}
                                    width={'320px'}
                                    shadow={'xl'}
                                    visibility={{base:'hidden', md:'hidden', lg:'visible'}}
                                    borderLeft={'1px solid'}
                                    borderColor={'rgba(255, 255, 255, 0.15)'}>
                                    <Flex justifyContent={{base:'center', md:'center', lg:'space-between'}}>
                                    <Box pl={{ base: 2, md: 4 }}>
                                    <HStack>
                                        <BsPerson size={'1em'} color="#00A3FF" />
                                        <StatLabel fontWeight={'medium'} isTruncated>
                                        'Platform'
                                        </StatLabel>
                                      </HStack>
                                        <StatNumber fontSize={'2xl'} fontWeight={'bold'}>
                                        {state.oneprojectData.project_chain}
                                        </StatNumber>
                                    </Box>
                                    </Flex>
                                </Stat>
                              </Flex>
                            </Flex>
                          </Flex>
                          <Flex  px={'45px'} paddingTop={"35px"} mt="40px" width={'80%'} height={{lg:'570px'}} background={'rgba(255, 255, 255, 0.05)'}  border={'1.5px solid rgba(255, 255, 255, 0.15)'} borderRadius='25px'>
                            {/* ------------Description of Project------------ */}
                              <chakra.p 
                                py={2} 
                                color={"rgba(255, 255, 255, 0.84)"} 
                                fontSize= {"18px"} 
                                lineHeight={"150%"}
                                w={{base:'400px', lg:'1000px'}}
                              >
                              <span style={{color:"white",fontWeight:"900" ,fontSize:"18px" ,marginBottom:"20px"}}>
                              WeFund Mission

                              WeFund's mission is to improve and ultimately solve these key aspects of crowdfunding:

Projects and project-related events are approved by the community:  This helps to give backers what they want, and allows greater agility for projects to adjust and follow market trends.

Backers are protected:  Funds are released gradually after they are approved by the community.
At the same time, this process helps to keep the team's morale and motivation high.

Security:  By using Anchor protocol we safeguard funds from hackers and human errors, which in turn helps projects to move forward with greater peace of mind.

We create a set of fundraising events along the project's development timeline, which gives credibility and a greater chance of success, and at the same time avoids collecting and risking large sums of backer funds before a project demonstrates progress.  This helps everyone, the team as well as the project backers.

Crowdfunding works when done with fairness, therefore we created a system to maximize the backing opportunity proportional to the number of potential backers, always guaranteeing the possibility for backers to participate.

WeFund changes the game:  Protects backers and at the same time protects project creators, making the whole process more secure and transparent.

WeFund was born from the community, for the community.
                              </span>
                              {state.oneprojectData.project_description}
                              </chakra.p>
                          </Flex>
                          <Flex as={Stack} paddingTop={"35px"} mt="40px" width={'80%'} mb={'50px'} height={{lg:'325px'}}>
                            {/* ------------Descriptions on Founder of project------------ */}
                            <Text fontSize='28px' fontWeight={'900'} lineHeight={'36px'} mb={'20px'}>Project <span style={{color:'#00A3FF'}} mb='25px'>Founder Speaks</span></Text>
                            <Box background="rgba(255, 255, 255, 0.05)" border="1.5px solid rgba(255, 255, 255, 0.15)" boxSizing="border-box" borderRadius="10px" mt={'30px'}>
                              <Box px={'45px'} paddingTop={"35px"} paddingBottom={"35px"} >
                              <Text fontSize={'18px'} fontWeight={'bold'}>WeFund Mission</Text>
                              <br/>
                              <Text color= {"rgba(255, 255, 255, 0.54)"}>

                           
                                
                              </Text>
                              </Box>
                              <HStack borderTop={"1.5px solid rgba(255, 255, 255, 0.15)"} spacing={10} paddingLeft={'45px'} paddingTop={"35px"} paddingBottom={"35px"}>
                                <Image height='35px' objectFit='cover' src='/WeFund Logos only.png' alt='UST Avatar'/>
                                <VStack textAlign={'left'}> 
                                  <Text fontWeight={'bold'} textAlign={'left'} alignSelf={'flex-start'}>WeFund Team</Text>
                                  <Text textAlign={'left'}>
                                  Andrea Bello
Co Founder & CEO & Co-CTO

Most recently behind the development of a smart contract (Fan$quad) that was deployed Col-4 during a hackathon organized by Terraformlabs and former CTO of a Guild Game, successfully raising a $10 million Seed round. Founder of Mosquito Solution, an innovative natural misting system startup created and launched within 1 year, operating in Bali, Indonesia. Founder of Bello Service, Domotic System for smart-home efficiency, reducing electrical consumption by 30%. R&D engineer at ABB UPS system, an expert in coding C programming.
Ika Afifah
Co Founder & CMO

Previous CMO at Gamesta to successfully raise a $10 million Seed round. Prior to Guild Game, she worked at Tencent as an operation specialist, in a partnership division. Before Tencent, she was senior partnership manager at Bigo. She previously held a senior account executive position at one of the digital marketing agencies under Jet Group and was a manager at Waves who successfully helped founders to raise $1.2M in pre-seed funding. 

Jason Galvin
Co-CTO

World explorer, entrepreneur, and blockchain technology enthusiast. Came from a career in Silicon Valley building web applications during the dot-com boom. Wanting to do it all over again, this time helping to build Web 3.0.


Austin Taylor
CCO

Comes from a background in investment and corporate finance. After completing his education, he worked as a Business Analyst for a large tech company in Seattle, Washington USA building AI applications to identify high-risk sale transactions. He now is an Investment Manager for a prestigious silicon valley venture capital firm located in Jakarta, Indonesia managing investment deals in the Southeast Asia region.



                                  </Text>
                                </VStack>
                              </HStack>
                            </Box>
                              
                          </Flex>
                        </VStack>
                          
                    </Flex>
                </VStack>    
              </Flex>
              <Flex height={'200px'}>

              </Flex>
            </Box>
        </Flex>
      </div>
    </ChakraProvider>
  )
}