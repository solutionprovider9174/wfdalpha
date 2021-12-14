import React, {
    useEffect,
    useState,
    useCallback,
    useContext,
    useRef,
} from 'react'

import {
    IoChevronForwardOutline
} from 'react-icons/io5';

import numeral from 'numeral'
import {
    ChartPie,
    ChartLine,
    Files,
    MonitorPlay,
} from 'phosphor-react'
import {
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
    Denom,
<<<<<<< HEAD
    MsgSend
=======
    MsgSend,
    MsgGrantAllowance,
>>>>>>> 3b4575a772b1a715f2251da7bf176cca52c6fb94
} from '@terra-money/terra.js'

import { useStore } from '../store'

let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

export default () => {

    const { state, dispatch } = useStore()
    const inputAmount = useRef();
    const [amount, setAmount] = useState('');
    const [WFDFee, setWFDFee] = useState('');

    const terra = state.lcd_client
    const api = new WasmAPI(terra.apiRequester)


    const fetchContractQuery = useCallback(async () => {
        try {
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchContractQuery()
    }, [fetchContractQuery])

    let connectedWallet = ''
    if (typeof document !== 'undefined') {
        connectedWallet = useConnectedWallet()
    }

    function changeAmount(e){
        if(state.ustBalance > parseInt(e.target.value))
        {
            setAmount(e.target.value);
            setWFDFee(parseInt(e.target.value) *0.05);
<<<<<<< HEAD
=======
        }else{
            alert("Insufficient Balance")
>>>>>>> 3b4575a772b1a715f2251da7bf176cca52c6fb94
        }
    }
    async function transfer(){
        const fee = new StdFee(10000, { uusd: 450000})
        const coin = {
            uusd: amount * 1.05 * (10**6),
        }
        console.log(coin);
        console.log(state.ustBalance);

        const msg = new MsgSend(
<<<<<<< HEAD
            connectedWallet.walletAddress,
            'terra1r56xzdvxjjeqvkpk3879wv9zxy55cjnchqueg8',
            coin,
          );
        console.log(connectedWallet.walletAddress);
=======
            'terra1emwyg68n0wtglz8ex2n2728fnfzca9xkdc4aka',
            'terra1r56xzdvxjjeqvkpk3879wv9zxy55cjnchqueg8',
            coin,
          );
        console.log(msg);
>>>>>>> 3b4575a772b1a715f2251da7bf176cca52c6fb94

        await connectedWallet
            .post({
                msgs: [msg],
                // fee: fee,
                gasPrices: fee.gasPrices(),
                gasAdjustment: 1.7,
            })
            .then((e) => {
                if (e.success) {
                    console.log("transfer success");
                    console.log(e);
                } else {
                    console.log("transfer error");
                }
            })
            .catch((e) => {
                console.log("transfer error" + e);
            })
<<<<<<< HEAD
=======
{
            // let CoinManageContractAddress = "terra1058mm88gvwe99lll7m8ar6tyng9ev0ksg4rqxz";
            // let ProjectWalletAddres = "terra1qvyj7tqs35hckd395rglc7lsyf2acuhgdcmj77";
            // const obj = new StdFee(10_000, { uusd: 4500})
   
            // let AddProjectMsg = {
            //         add_project: {
            //             project_id: Pjname,
            //             project_wallet: ProjectWalletAddres,
            //             creator_wallet: "123",
            //         },
            //     }
    
            // let BackProjectMsg = {
            //     back2_project: {
            //         project_id: Pjname,
            //         backer_wallet: "12345",
            //     },
            // }
            // let msg = new MsgExecuteContract(
            //     connectedWallet.walletAddress,
            //     CoinManageContractAddress,
            //     BackProjectMsg,
            //     {uusd: 10000000}
            // )
    
            // console.log(JSON.stringify(msg));
    
            // await connectedWallet
            //     .post({
            //         msgs: [msg],
            //         // fee: obj,
            //         gasPrices: obj.gasPrices(),
            //         gasAdjustment: 1.7,
            //     })
            //     .then((e) => {
            //         if (e.success) {
            //             console.log("success");
            //             console.log(e);
            //             //setResult("register combination success")
            //             showNotification(
            //                 'Add Project Success',
            //                 'success',
            //                 4000
            //             )
            //         } else {
            //             console.log("project add error");
            //             //setResult("register combination error")
            //             showNotification(
            //                 'Add Project error',
            //                 'error',
            //                 4000
            //             )
            //         }
            //     })
            //     .catch((e) => {
            //         console.log("error" + e);
            //         //setResult(e.message)
            //         showNotification(e.message, 'error', 4000)
            //     })
                
            // let ter = new LCDClient({
            //     URL: connectedWallet.network.lcd,
            //     chainID: connectedWallet.network.chainID,
            // });
            // let api = new WasmAPI(ter.apiRequester);
    
            // const prj = await api.contractQuery(
            //     CoinManageContractAddress,
            //     {
            //         get_project: {
            //             id: "1",
            //         },
            //     }
            // )
            // console.log(prj);
}
    
>>>>>>> 3b4575a772b1a715f2251da7bf176cca52c6fb94
    }
    return (
        <div
            className="hero"
            style={{
                backgroundImage: 'url(bg.svg)', 
                backgroundPosition: 'center center',
                display:'flex', flexDirection:'column', justifyContent:'center', 
            }}
        >
            <div style={{marginTop:'84px', fontSize:'72px', textAlign:'center'}}>
                Contribute to Project Pool
            </div>
            <div style={{marginTop:'133px', marginLeft:'55px', marginRight:'55px', display:'flex', fontSize:'40px', backgroundColor:'#9f5aebe6', justifyContent:'center', flexDirection:'column', borderRadius:'5px'
            }}>
                <div style={{marginTop:'40px', display:'flex', textAlign:'center', flexDirection:'column', justifyContent:'center'}}>
                    <div>Back The Project</div>
                    <div>Lynx VR</div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'500px'}}>
                    <div style={{marginTop:"72px", fontSize:'28px', textAlign:'center'}}>
                        Select Tokens and Entry Amount to Back
                    </div>
                    <div style={{marginTop:'20px', display:'flex', justifyContent:'center'}}>
                        <input value={amount} onChange={(e) => changeAmount(e)} type="text" style={{fontSize:"15px", borderRadius:'10px', border:'0px', width:'488px', height:'54px'}} placeholder="   UST"/>
                    </div>
                    <div style={{marginTop:"22px", fontSize:'28px', textAlign:'left'}} >
                        WFD Fee
                    </div>
                    <div style={{marginTop:'20px', display:'flex', justifyContent:'center'}}>
                        <input value={WFDFee} type="text" readOnly style={{fontSize:"15px", borderRadius:'10px', border:'0px', width:'488px', height:'54px'}} placeholder="   WFDfee"/>
                    </div>
                </div>
                </div>
                <div style={{marginTop:'155px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <input id="condition" type="checkbox" style={{borderRadius:'10px', border:'0px', height:'12px'}}/>
                    <label style={{fontSize:'28px'}}>I agree will all codition of this project and WeFund"
                    </label>
                </div>
                <div style={{marginTop:'8px', marginBottom:'64px', display:'flex', justifyContent:'center'}}>
                    <input type="button" style={{backgroundColor:'#5D5FEF', borderRadius:'10px',width:'374px', height:'64px', fontSize:"18px", border:'0px', color:'white'}} value="Back Project" onClick={()=>{transfer()} }>
                    </input>
                </div>
            </div>
            <div style={{marginTop:'133px', marginLeft:'55px', marginRight:'55px', display:'flex',  backgroundColor:'rgb(236 214 237 / 93%)', justifyContent:'center', flexDirection:'column', borderRadius:'5px'
            }}>
                <div style={{marginLeft:'173px', marginRight:'173px', marginTop:'200px', display:'flex', flexDirection:'column', fontSize:'20px', color:'black'}}>
                    <div style={{fontSize:'15px', color:'rgb(134 138 151)'}}>FAQ</div>
                    <div style={{marginTop:'18px', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
                        <div style={{width:'180px'}}>What is WeFund About?</div>
                        <div style={{color:'blue'}}><IoChevronForwardOutline/></div>
                    </div>
                    <div style={{marginTop:'56px', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
                        <div>How does one back a Project?</div>
                        <div style={{color:'blue'}}><IoChevronForwardOutline/></div>
                    </div>
                    <div style={{marginTop:'56px', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
                        <div>What do backer get?</div>
                        <div style={{color:'blue'}}><IoChevronForwardOutline/></div>
                    </div>
                    <div style={{marginTop:'56px', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
                        <div>What my UST  or other tokens will be used for?</div>
                        <div style={{color:'blue'}}><IoChevronForwardOutline/></div>
                    </div>
                    <div style={{marginTop:'56px', marginBottom:'150px', display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
                        <div>What is WFD fees?</div>
                        <div style={{color:'blue'}}><IoChevronForwardOutline/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
