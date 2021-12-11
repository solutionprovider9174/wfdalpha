import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme';
import { Container } from '../components/Container';
import {
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

  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  import {
    RawKey,
    MnemonicKey,
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
    Denom,
  } from '@terra-money/terra.js'
  
  import React, {
    useEffect,
    useState,
    useCallback,
    useContext,
    useRef,
    useMemo,
  } from 'react'
  import { useStore } from '../store'
    
  let useConnectedWallet = {}
  if (typeof document !== 'undefined') {
      useConnectedWallet =
          require('@terra-money/wallet-provider').useConnectedWallet
  }

  export default function BackProject() {
    const { state, dispatch } = useStore();
    const [backerWallet, setBackerWallet] = useState('');
    const [coinType, setCoinType] = useState('');
    const [amount, setAmount] = useState('');
    const [WFDFee, setWFDFee] = useState('');

    let connectedWallet = ''
    if (typeof document !== 'undefined') {
        connectedWallet = useConnectedWallet()
    }

    useMemo( () => {
      console.log(connectedWallet);
      if(typeof connectedWallet !== 'undefined' && connectedWallet != '')
        setBackerWallet(connectedWallet.walletAddress);
      console.log("usememo");
    },[connectedWallet])

    function changeAmount(e){
      // if(state.ustBalance > parseInt(e.target.value))
      // {
          setAmount(e.target.value);
          setWFDFee(parseInt(e.target.value) *0.05);
      // }else{
          // alert("Insufficient Balance")
      // }
  }
  async function transfer(){
      // let terra = new LCDClient({
      //   URL: connectedWallet.network.lcd,
      //   chainID: connectedWallet.network.chainID,
      // });
      // let api = new WasmAPI(terra.apiRequester);

      // const prj = await api.contractQuery(
      //   state.managementContractAddress,
      //   {
      //       get_all_project: {
      //       },
      //   }
      // )
      // console.log(typeof prj);
      // console.log(prj);
      // console.log(prj.length)
      // let i, j
      // for(i=0; i<prj.length; i++){
      //   let tm = prj[i];
      //   console.log(tm.backer_states);
      //   for(j=0; j<tm.backer_states.length; j++)
      //   {
      //     console.log(tm.backer_states[j].amount);
      //   }
      // }

      const fee = new StdFee(10000, { uusd: 450000})
      const coin = {
          uusd: amount * 1.05 * (10**6),
      }
      console.log(coin);
      console.log(state.ustBalance);

      let coinManageContractAddress = state.managementContractAddress;
      let backerWalletAddress = connectedWallet.walletAddress;

      const obj = new StdFee(10_000, { uusd: 4500})

      let BackProjectMsg = {
          back2_project: {
              project_id : "1",
              backer_wallet: backerWalletAddress,
          },
      }
console.log(BackProjectMsg);
      let msg = new MsgExecuteContract(
          backerWalletAddress,
          coinManageContractAddress,
          BackProjectMsg,
          coin,
      )

console.log(JSON.stringify(msg));

      await connectedWallet
          .post({
              msgs: [msg],
              // fee: obj,
              gasPrices: obj.gasPrices(),
              gasAdjustment: 1.7,
          })
          .then((e) => {
              if (e.success) {
                  console.log("back 2 project success");
                  console.log(e);
              } else {
                  console.log("back 2 project error");
              }
          })
          .catch((e) => {
              console.log("back 2 project error" + e);
          })
  }        
    return (
      <ChakraProvider resetCSS theme={theme}>
      <Container>
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
                    <Heading color="#DADADA" alignSelf="center">{state.projectName}</Heading>
                  
                    
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
                            <Input type="text" size="md" bg = "white" value={backerWallet} onChange={()=> {}}/>
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
                      value={coinType}
                      onChange={(e)=>{setCoinType(e.target.value)}}
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
                            <Input type="text" size="md" bg = "white" value={amount} onChange={(e) => changeAmount(e)} />
                          </InputGroup>
                        </FormControl>

                        
                        <FormControl id="fees">
                          <FormLabel color="#E0E1E7">Approximate Calculated Fee</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input type="number" size="md" bg = "white" value={WFDFee}/>
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
                            _hover={{}}
                            onClick = {()=>transfer()}
                          >
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
      </Container>
      </ChakraProvider>
    );
  }