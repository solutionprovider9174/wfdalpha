import { ChakraProvider } from "@chakra-ui/react";
import {StdFee, MsgExecuteContract } from '@terra-money/terra.js'
import { Box, Flex, Text, Input, InputGroup,  InputLeftAddon,  Textarea, Select, 
    InputLeftElement, InputRightElement, Img  } from "@chakra-ui/react";
import React, { useEffect, useState,  useCallback, useContext, useRef, } from 'react';
import { IoCloudUploadOutline, IoCheckbox } from 'react-icons/io5';
import { ButtonTransition, ImageTransition, InputTransition } 
                                from "../components/ImageTransition";
import theme from '../theme';
import { useStore } from '../store'
import Notification from '../components/Notification'
import Footer from '../components/Footer'

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default function CreateProject() 
{
  const { state, dispatch } = useStore();
  const [isUST, setIsUST] = useState(true);
  const [whitepaper, setWhitepaper] = useState('');
  const [prjCategory, setPrjCategory] = useState('');
  const [prjName, setPrjName] = useState('');
  const [prjDescription, setPrjDescription] = useState('');
  const [prjWebsite, setPrjWebsite] = useState('');
  const [prjTeamdescription, setPrjTeamdescription] = useState('');
  const [prjEmail, setPrjEmail] = useState('');
  const [prjAmount, setPrjAmount] = useState('');
  const [prjSubcategory, setPrjSubcategory]= useState('');
  const [prjChain, setPrjChain] = useState('');

  //---------------wallet connect-------------------------------------
  let connectedWallet = ''
  if (typeof document !== 'undefined') {
      connectedWallet = useConnectedWallet()
  }

  //---------------notification setting---------------------------------
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
    })
    console.log(notification)
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

  //---------------input functions------------------------------
  function openUpload(){
    if(typeof document !== 'undefined') {
      let fileSelector = document.getElementById('fileSelector')
      fileSelector.click();
    }
  }
  function changeWhitepaper(){
    if(typeof document !== 'undefined') {
      let fileSelector = document.getElementById('fileSelector')
      var fileName = fileSelector.value;
      setWhitepaper(fileName.substr(fileName.lastIndexOf('\\')+1, fileName.length-1));
    }    
  }

  //---------------create project---------------------------------
  async function createProject()
  {
    if(connectedWallet == '' || typeof connectedWallet == 'undefined'){
      showNotification("Please connect wallet first!", 'error', 6000);
      return;
    }

    let wefundContractAddress = state.WEFundContractAddress;

    const obj = new StdFee(10_000, { uusd: 4500})

    let AddProjectMsg = {
        add_project: {
          creator_wallet: connectedWallet.walletAddress,
          project_about: prjDescription, 
          project_category: prjCategory, 
          project_name: prjName,
          project_ecosystem: prjChain,
          project_email: prjEmail,
          project_collected: prjAmount,
          project_wallet: "",
          project_website: prjWebsite, 
        },
    }
// console.log(AddProjectMsg);

    let msg = new MsgExecuteContract(
      connectedWallet.walletAddress,
      wefundContractAddress,
      AddProjectMsg
    )

    // console.log(JSON.stringify(msg));

    await connectedWallet
      .post({
          msgs: [msg],
          // fee: obj,
          gasPrices: obj.gasPrices(),
          gasAdjustment: 1.7,
      })
      .then((e) => {
          if (e.success) {
              // console.log("Add Project success");
              // console.log(e);
              showNotification('Create Project Success', 'success', 4000)
          } else {
              // console.log("project add error");
              showNotification(e.message, 'error', 4000)
          }
      })
      .catch((e) => {
          // console.log("error" + e);
          showNotification(e.message, 'error', 4000)
      })
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{background:"linear-gradient(90deg, #1F0021 0%, #120054 104.34%)", 
      width:'100%', color:'white', fontSize:'18px', fontFamily:'Sk-Modernist-Regular', fontWeight:'700' }}>
        <div style={{backgroundImage:"url('/createproject_banner_emphasis.svg')", 
        boxShadow:"0px 5px 50px 0px #000000A6", width:'100%', zIndex:'10'}}>
        <div style={{backgroundImage:"url('/createproject_banner.svg')", width:'100%', zIndex:'11',backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <Flex pt='64px' justify="center">
            <Text fontSize='16px' fontWeight='400' color={'rgba(255, 255, 255, 0.54)'}>Home &gt;&nbsp;</Text>
            <Text fontSize='16px'>Create Your Project</Text>
          </Flex>
          <Flex mt='11px' pb='75px' mb="75px" justify='center'
            style={{fontFamily:'PilatExtended-Bold'}}>
            <Text fontSize='40px'>Create a&nbsp;</Text>
            <Text fontSize='40px' color='#4790f5'>New Project</Text>
          </Flex>
        </div>
        </div>
        <Flex width='100%' justify='center' mt='-80px' px='175px' zIndex={'1'}>
        <div style={{width:'900px', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(255, 255, 255, 0.15)',borderTopColor: 'transparent', fontFamily:'Sk-Modernist-Regular', paddingLeft:'50px', paddingRight:'50px', zIndex:'1'}} >
          {/* --------Select UST or WFD------------------ */}
          <Text fontSize='18px' pt='50px'>Select Back on</Text>

          <Flex direction="row" mt='20px'>
            {/* ------------UST---------------------- */}
            <ImageTransition 
              unitid='coinust'
              border1='linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 100%)' 
              background1='linear-gradient(180deg, #2B226B 0%, #1B0131 100%)'
              border2='linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 100%)' 
              background2='linear-gradient(180deg, #31173A 0%, #421D50 0.01%, #21052C 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={isUST}
              width='120px' height='160px' rounded='10px'
              onClick={()=>{setIsUST(true)}}
            >
              <Img mt='23px' boxSize='50px' objectFit='cover' src='/UST.svg' alt='UST Avatar'/>
              <Text mt='13px'>UST</Text>
              <Img mt='15px' mb='20px' boxSize='20px' objectFit='cover' src={isUST?'/group_dot.svg':'/group_undot.svg'} alt='UST Avatar'/>
            </ImageTransition>

            {/* --------------------------WFD------------------------- */}
            <ImageTransition 
              unitid='coinwfd'
              border1='linear-gradient(180deg, #00A3FF 0%, rgba(0, 71, 255, 0) 100%)' 
              background1='linear-gradient(180deg, #2B226B 0%, #1B0131 100%)'
              border2='linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 100%)' 
              background2='linear-gradient(180deg, #31173A 0%, #421D50 0.01%, #21052C 100%)'
              border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
              background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
              selected={!isUST}
              width='120px' height='160px' rounded='10px' ml='20px'
              onClick={()=>{setIsUST(false)}}
            >
              <Img mt='23px' height='35px' objectFit='cover' src='/WeFund Logos only.png' alt='UST Avatar'/>
              <Text mt='13px'>WFD</Text>
              <Img mt='25px' mt="15px" boxSize='20px' objectFit='cover' src={isUST?'/group_undot.svg':'/group_dot.svg'} alt='UST Avatar'/>  
            </ImageTransition>
          </Flex>
          {/* --------project name-------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Name</Text>
              <Text fontSize='15px'  opacity='0.5'>0/150 words</Text>
            </Flex>
            <InputTransition 
              unitid='projectname'
              selected={prjName==''?false:true}
              width='100%' height='55px' rounded='md'
            >
              <InputGroup style={{background: 'rgba(255, 255, 255, 0.05)', }} size="sm" border='0px'>
                <Input style={{border:'0', background:'transparent' }} type="text" h='55px'  rounded="md"  value={prjName} placeholder='Type here' onChange={(e)=>setPrjName(e.target.value)} />
              </InputGroup>
            </InputTransition>
          </Box>
          {/* ------------project description--------------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Description</Text>
              <Text fontSize='15px' opacity='0.5'>0/1000 words</Text>
            </Flex>
            <InputTransition 
              unitid='projectdescription'
              selected={prjDescription==''?false:true}
              width='100%' height='175px' rounded='md'
            >
              <Textarea style={{background: 'rgba(255, 255, 255, 0.05)', }} value={prjDescription} 
              onChange={(e)=>{setPrjDescription(e.target.value)}} rounded="md"
                placeholder='Type here' size='sm' h='175px' />
            </InputTransition>
          </Box>
          {/* ---------------project website------------------- */}
          <Flex direction='row' mt='40px' justify='space-between'>
            <Box w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Project Website</Text>
              </Flex>
              <InputTransition 
                unitid='projectwebsite'
                selected={prjWebsite==''?false:true}
                width='100%' height='55px' rounded='md'
              >              
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)', }}>
                  <InputLeftAddon h='55px' style={{background: 'rgba(255, 255, 255, 0.05)', }} children="http://" color='white' rounded="md" />
                  <Input type="text" h='55px'style={{background: 'rgba(255, 255, 255, 0.05)', }} placeholder="Type here" rounded="md"  
                  value={prjWebsite} onChange={(e)=>{setPrjWebsite(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            {/* ---------------upload---------------------------------- */}
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Project WhitePaper</Text>
              </Flex>
              {whitepaper == '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCloudUploadOutline color='#00A3FF' width='30px' height='30px'/>} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder="Upload here" focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{openUpload()}}  /> 
                </InputGroup>}
              {whitepaper != '' && 
                <InputGroup size="sm">
                  <InputLeftElement h='55px' pointerEvents='none' children={<IoCheckbox color='00A3FF'  width='30px' height='30px' />} />
                  <Input type="text" h='55px' bg='#FFFFFF' borderColor="#FFFFFF33" placeholder={whitepaper} focusBorderColor="purple.800"  rounded="md"  
                  onClick={(e)=>{openUpload()}} /> 
                </InputGroup>}
              <input type='file' id="fileSelector" name='userFile' style={{display:'none'}}
                onChange={()=>changeWhitepaper()}/>
            </Box>
          </Flex>
          {/* --------------project Team description------- */}
          <Box mt='40px'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Team Description</Text>
              <Text  fontSize='15px' opacity='0.5'>0/1000 words</Text>
            </Flex>
            <InputTransition 
              unitid='prjTeamdescription'
              selected={prjTeamdescription==''?false:true}
              width='100%' height='175px' rounded='md'
              style={{background: 'transparent',border:'0'}}
            >
              <Textarea style={{background: 'transparent',border:'0'}} h='165px' value={prjTeamdescription} onChange={(e)=>{setPrjTeamdescription(e.target.value)}}
                placeholder='Type here' size='sm'  rounded="md"
              />
            </InputTransition>
          </Box>
          {/* ------------------project category---------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Category</Text>
            </Flex>

            <InputTransition 
              unitid='projectcategory'
              selected={prjCategory==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{background: 'rgba(255, 255, 255, 0.05)', }} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                onChange={(e)=>{setPrjCategory(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* -------------------project sub category--------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text mb='20px'>Project Sub Category</Text>
            </Flex>
            <InputTransition 
              unitid='projectsubcategory'
              selected={prjSubcategory==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{background: 'rgba(255, 255, 255, 0.05)', }} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjSubcategory(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* ------------------------blockchain category----------------- */}
          <Box mt='40px' w='50%'>
            <Flex justify="space-between">
              <Text mb='20px'>Blockchain category</Text>
            </Flex>
            <InputTransition 
              unitid='projectchain'
              selected={prjChain==''?false:true}
              width='100%' height='55px' rounded='md'
            >       
              <Select id="sub_category" style={{background: 'rgba(255, 255, 255, 0.05)', }} h='55px' name="sub_category" autoComplete="sub_category" focusBorderColor="purple.800" shadow="sm" size="sm" w="full" rounded="md"
                value='' onChange={(e)=>{setPrjChain(e.target.value)}} 
              >
                <option selected style={{backgroundColor:'#1B0645'}}>Crypto</option>
                <option style={{backgroundColor:'#1B0645'}}>Charity</option>
                <option style={{backgroundColor:'#1B0645'}}>Gamification</option>
              </Select>
            </InputTransition>
          </Box>
          {/* -------------------------email------------------------ */}
          <Flex direction='row' mt='40px' justify="space-between">
            <Box w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Email</Text>
              </Flex>
              <InputTransition 
                unitid='projectemail'
                selected={prjEmail==''?false:true}
                width='100%' height='55px' rounded='md'
              >      
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <InputLeftElement style={{background: 'transparent', }} pointerEvents='none' color='gray.300' fontSize='1.2em' children=' ' />
                  <Input style={{ }} type="email" h='55px'placeholder="example@email.com" focusBorderColor="purple.800" rounded="md"  value={prjEmail} onChange={(e)=>{setPrjEmail(e.target.value)}} />
                </InputGroup>
              </InputTransition>
            </Box>
            <Box ml='24px' w='100%'>
              <Flex justify="space-between">
                <Text mb='20px'>Amount Required</Text>
              </Flex>
              <InputTransition 
                unitid='projectamount'
                selected={prjEmail==''?false:true}
                width='100%' height='55px' rounded='md'
              >      
                <InputGroup size="sm" style={{background: 'rgba(255, 255, 255, 0.05' }}>
                  <Input style={{border:'0', background:'transparent' }} type="text"  h='55px' placeholder="Type here" focusBorderColor="purple.800" rounded="md"  value={prjAmount} onChange={(e)=>{setPrjAmount(e.target.value)}} />
                  <InputRightElement style={{border:'0', background:'transparent'}} w='125px'  h='55px' pointerEvents='none' align='center' color="blue.200"
                  /> 
                  <Select id="peg" style={{border:'0', background:'transparent' }} h='55px' w='140px' name="peg" autoComplete="peg" focusBorderColor="purple.800" shadow="sm" size="sm" rounded="md" fontSize='16px' value='' onChange={(e)=>{setPrjChain(e.target.value)}} 
                  >
                    <option selected style={{backgroundColor:'#1B0645'}}>($)UST</option>
                    <option style={{backgroundColor:'#1B0645'}}>($)UST</option>
                    <option style={{backgroundColor:'#1B0645'}}>($)UST</option>
                  </Select>
                </InputGroup>
              </InputTransition>
            </Box>
          </Flex>
          {/* -----------------submit----------------- */}
          <Flex w='100%' mt='60px'justify='center' mb='170px'>
            <ButtonTransition unitid="submit"
              selected={false}
              width='350px' height='50px' rounded='33px'
            >
              <Box variant="solid" color="white" justify='center' align='center'
                  onClick = {()=>createProject()} >
                Submit
              </Box>
            </ButtonTransition>
          </Flex>
        </div>
        </Flex>
        <Flex>
        <Footer/>
        <Notification
            notification={notification}
            close={() => hideNotification()}
        />
        </Flex>
      </div>
    </ChakraProvider>
  )
}