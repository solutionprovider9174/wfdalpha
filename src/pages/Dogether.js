import React, {
    useEffect,
    useState,
    useCallback,
    useContext,
    useRef,
} from 'react'
import numeral from 'numeral'
import {
    Ticket,
    X,
    Trophy,
    UserFocus,
    ChartPie,
    ChartLine,
    PlusCircle,
    MinusCircle,
    PencilLine,
    Fire,
    Files,
    Gift,
    UsersThree,
    MonitorPlay,
    Info,
} from 'phosphor-react'
// import Jackpot from "../components/Jackpot";

import sample from '../../public/Wefund/og.mp4'
import {
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
    Denom,
} from '@terra-money/terra.js'
import Countdown from '../components/Countdown'
import TicketModal from '../components/TicketModal'

import { useStore } from '../store'

import Notification from '../components/Notification'
import SocialShare from '../components/SocialShare'
import Footer from '../components/Footer'
import AllowanceModal from '../components/AllowanceModal'
import WinnerRow from '../components/WinnerRow'
import PriceLoader from '../components/PriceLoader'
import JackpotResults from '../components/JackpotResults'
import QuickStats from '../components/QuickStats'
import Select from 'react-select'
import { black } from 'ansi-colors'
import axios from "axios";


let useConnectedWallet = {}
if (typeof document !== 'undefined') {
    useConnectedWallet =
        require('@terra-money/wallet-provider').useConnectedWallet
}

const HomeCard = {
    marginTop: '50px',
    width: '100px',
    padding: '30px',
}
const loterra_contract_address = 'terra1q2k29wwcz055q4ftx4eucsq6tg9wtulprjg75w'
const loterra_pool_address = 'terra1pn20mcwnmeyxf68vpt3cyel3n57qm9mp289jta'

const BURNED_LOTA = 4301383550000


export default () => {
    const [jackpot, setJackpot] = useState(0)
    const [jackpotWFDred, setWFDredJackpot] = useState(0)
    const [tickets, setTickets] = useState(0)
    const [players, setPlayers] = useState(0)
    const [recentPlayers, setRecentPlayers] = useState(0)
    const [payWith, setPayWith] = useState('ust')
    const [buyNow, setBuyNow] = useState(false)
    const [buyLoader, setBuyLoader] = useState(false)
    const [WFDBonus, setWFDBonus] = useState(false)
    const [giftFriend, setGiftFriend] = useState({ active: false, wallet: '' })
    const [notification, setNotification] = useState({
        type: 'success',
        message: '',
        show: false,
    })
    const [selected1, setSelected1] = useState("")
    const [selected2, setSelected2] = useState("")
    const [selected3, setSelected3] = useState("")
    const [Pjname, setPjname] = useState("")
    const [Pjdescription, setPjdescription] = useState("")
    const [Pjweb, setPjweb] = useState("")
    const [Pjwhitepaper, setPjwhitepaper] = useState("")
    const [Pjtdescription, setPjtdescription] = useState("")
    const [Pjemail, setPjemail] = useState("")
    const [ticketModal, setTicketModal] = useState(0)
    const [allowanceModal, setAllowanceModal] = useState(0)
    const [price, setPrice] = useState(0)
    const [contractBalance, setContractBalance] = useState(0)
    const [lotaPrice, setLotaPrice] = useState(0)
    const [expiryTimestamp, setExpiryTimestamp] =
        useState(1) /** default timestamp need to be > 1 */
    const bonusToggle = useRef(null)
    const friendsToggle = useRef(null)
    const loterraStats = useRef(null)
    const { state, dispatch } = useStore()
    const terra = state.lcd_client
    const api = new WasmAPI(terra.apiRequester)
    const fetchContractQuery = useCallback(async () => {
        try {
            const contractConfigInfo = await api.contractQuery(
                loterra_contract_address,
                {
                    config: {},
                }
            )

            dispatch({ type: 'setConfig', message: contractConfigInfo })

            setPrice(contractConfigInfo.price_per_ticket_to_register)
            setExpiryTimestamp(
                parseInt(contractConfigInfo.block_time_play * 1000)
            )
            const bank = new BankAPI(terra.apiRequester)
            const contractBalance = await bank.balance(loterra_contract_address)
            const ustBalance = contractBalance.get('uusd').toData()
            const jackpotAlocation =
                contractConfigInfo.jackpot_percentage_reward
            const contractJackpotInfo =
                (ustBalance.amount * jackpotAlocation) / 100

            setContractBalance(ustBalance.amount / 1000000)
            setJackpot(parseInt(contractJackpotInfo) / 1000000)

            const jackpotWFDred = await api.contractQuery(
                state.WFDredContractAddress,
                {
                    balance: {
                        address: state.loterraContractAddress,
                    },
                }
            )

            const WFDredJackpot =
                (jackpotWFDred.balance * jackpotAlocation) / 100

            setWFDredJackpot(parseInt(WFDredJackpot) / 1000000)
            dispatch({
                type: 'setWFDredJackpot',
                message: WFDredJackpot,
            })

            const jackpotInfo = await api.contractQuery(
                loterra_contract_address,
                {
                    jackpot: {
                        lottery_id: contractConfigInfo.lottery_counter - 1,
                    },
                }
            )
            dispatch({
                type: 'setHistoricalJackpot',
                message: parseInt(jackpotInfo) / 1000000,
            })

            const jackpotWFDInfo = await api.contractQuery(
                loterra_contract_address,
                {
                    jackpot_WFD: {
                        lottery_id: contractConfigInfo.lottery_counter - 1,
                    },
                }
            )
            dispatch({
                type: 'setHistoricalJackpotWFD',
                message: parseInt(jackpotWFDInfo) / 1000000,
            })

            const contractTicketsInfo = await api.contractQuery(
                loterra_contract_address,
                {
                    count_ticket: {
                        lottery_id: contractConfigInfo.lottery_counter,
                    },
                }
            )
            setTickets(parseInt(contractTicketsInfo))

            const contractPlayersInfo = await api.contractQuery(
                loterra_contract_address,
                {
                    count_player: {
                        lottery_id: contractConfigInfo.lottery_counter,
                    },
                }
            )
            setPlayers(parseInt(contractPlayersInfo))

            const recentPlayersData = await api.contractQuery(
                loterra_contract_address,
                {
                    count_player: {
                        lottery_id: contractConfigInfo.lottery_counter - 1,
                    },
                }
            )
            setRecentPlayers(parseInt(recentPlayersData))
            // Set default tickets to buy is an average bag
            multiplier(
                parseInt(
                    isNaN(contractTicketsInfo / contractPlayersInfo)
                        ? 1
                        : contractTicketsInfo / contractPlayersInfo
                )
            )

            //Get poll data

            //Get latest winning combination
            const winningCombination = await api.contractQuery(
                loterra_contract_address,
                {
                    winning_combination: {
                        lottery_id: contractConfigInfo.lottery_counter - 1,
                    },
                }
            )
            dispatch({
                type: 'setWinningCombination',
                message: winningCombination,
            })

            //Get current lota price
            const currentLotaPrice = await api.contractQuery(
                loterra_pool_address,
                {
                    pool: {},
                }
            )
            setLotaPrice(currentLotaPrice)

            //Dev purposes disable for production
            //console.log('contract info',contractConfigInfo)

            const { winners } = await api.contractQuery(
                loterra_contract_address,
                {
                    winner: {
                        lottery_id: contractConfigInfo.lottery_counter - 1,
                    },
                }
            )
            dispatch({ type: 'setAllWinners', message: winners })
            // Query all players
            const players = await api.contractQuery(loterra_contract_address, {
                players: {
                    lottery_id: contractConfigInfo.lottery_counter - 1,
                },
            })
            dispatch({ type: 'setAllPlayers', message: players })
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

    const [combo, setCombo] = useState('')
    const [result, setResult] = useState('')
    const [amount, setAmount] = useState(0)
    const [helperemail, sethelperemail] = useState('')
    const [helperdescription, sethelperdescription] = useState('')

    
    const categoryhandleChange = e =>{
        setSelected1(e.value);
    }
    const categoryItem = selected1 =>{
        const item = catego_options.find(x => x.value === selected1);
        return item ? item : {value : "", label : ""}
    }
    const subcategoryhandleChange = e =>{
        setSelected2(e.value);
    }
    const subcategoryitem = selected2 =>{
        const item = subcatego_option.find(x => x.value === selected2);
        return item ? item : {value : "", label : ""}
    }
    const subcategoryitem_1 = selected2 =>{
        const item = subcatego_option_1.find(x => x.value === selected2);
        return item ? item : {value : "", label : ""}
    }
    const chaindetailshandleChange = e =>{
        setSelected3(e.value);
    }
    const chaindetailsitem = selected3 =>{
        const item = chaindetail_options.find(x => x.value === selected3);
        return item ? item : {value : "", label : ""}
    }


    const catego_options =[{value: 'Crypto', label: 'Crypto'}, {value: 'NoCrypto', label: 'NoCrypto'}]
    const subcatego_option =[
        {value: 'Terra', label: 'Terra'}, {value: 'Solana', label: 'Solana'},
        {value: 'MultiChain', label: 'MultiChain'}, {value: 'CrossChain', label: 'CrossChain'}
    ]
    const subcatego_option_1 = [
        {value: 'NoCrypto1', label: 'NoCrypto1'}, {value: 'NoCrypto2', label: 'NoCrypto2'},
        {value: 'NoCrypto3', label: 'NoCrypto3'}, {value: 'NoCrypto4', label: 'NoCrypto4'}
    ]

    
    const chaindetail_options =[
        {value: 'Lending', label: 'Lending'}, {value: 'Charity', label: 'Charity'},
        {value: 'Social', label: 'Social'}, {value: 'IDO', label: 'IDO'},
        {value: 'Finance', label: 'Finance'}, {value: 'NFT', label: 'NFT'},
        {value: 'Game', label: 'Game'}, {value: 'Other', label: 'Other'}
    ]

    const select_style_1= {
        control: (provided, state) => ({
            ...provided,
            background: "#10003b",
            color: "white"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
            ...styles,
            color: 'black',
            };
        },
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        })
    }
    const select_style_2= {
        control: (provided, state) => ({
            ...provided,
            background: "#10003b",
            color: "white"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
            ...styles,
            color: 'black',
            };
        },
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        })
    }
    const select_style_3= {
        control: (provided, state) => ({
            ...provided,
            background: "#10003b",
            color: "white",
            zIndex: "3"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
            ...styles,
            color: 'black',
            };
        },
        singleValue: (provided) => ({
            ...provided,
            color: 'white'
        })
    }

    
    const changePjname = e =>{ setPjname(e.target.value); }
    const changePjdescription = e =>{ setPjdescription(e.target.value); }
    const changePjweb = e =>{ setPjweb(e.target.value); }
    const changePjwhitepaper = e =>{ setPjwhitepaper(e.target.value); }
    const changePjtdescription = e =>{ setPjtdescription(e.target.value); }
    const changePjemail = e =>{ setPjemail(e.target.value); }
    const changehelperdescription = e =>{ sethelperdescription(e.target.value); }
    const changehelperemail = e =>{ sethelperemail(e.target.value); }
    function checkIfDuplicateExists(w) {
        return new Set(w).size !== w.length
    }

    function helpclick(){
        setTicketModal(!ticketModal)
        console.log(ticketModal)

    }

    async function emailsubmit(){
        const creating_project  = await axios.post('http://localhost:3001/sendhelp', {
            helperemail,
            helperdescription
        
        }).then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert("Message Sent");
          } else if (resData.status === "fail") {
            alert("Message failed to send");
          }
        })
        .then(() => {
          setMailerState({
            email: "",
            name: "",
            message: "",
          });
        });
    }

    async function execute() {
        // setBuyLoader(true)
        // if (!connectedWallet) {
        //     setBuyLoader(false)
        //     return showNotification('Please connect your wallet', 'error', 4000)
        // }
        const creating_project  = await axios.post('http://localhost:3001/sendproject', {
            Pjname,
            Pjdescription,
            Pjweb,
            Pjwhitepaper,
            Pjemail,
            Pjtdescription
        
        }).then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert("Message Sent");
          } else if (resData.status === "fail") {
            alert("Message failed to send");
          }
        })
        .then(() => {
          setMailerState({
            email: "",
            name: "",
            message: "",
          });
        });

        
        const allowance = await api.contractQuery(
            state.WFDredContractAddress,
            {
                allowance: {
                    owner: connectedWallet.walletAddress,
                    spender: state.loterraContractAddress,
                },
            }
        )

        if (
            WFDBonus &&
            parseInt(allowance.allowance) <
                (amount * state.config.price_per_ticket_to_register) /
                    state.config.bonus_burn_rate
        ) {
            setAllowanceModal(true)
            setBuyLoader(false)
            return showNotification('No allowance yet', 'error', 4000)
        }

        const cart = state.combination.split(' ') // combo.split(" ")

        //Check if friend gift toggle wallet address filled
        if (giftFriend.active && giftFriend.wallet == '') {
            showNotification(
                'Gift friends enabled but no friends wallet address',
                'error',
                4000
            )
            setBuyLoader(false)
            return
        }
        //Check duplicates
        if (checkIfDuplicateExists(cart)) {
            showNotification('Combinations contain duplicate', 'error', 4000)
            setBuyLoader(false)
            return
        }
        // const obj = new Fee(1_000_000, { uusd: 200000 })
        const addToGas = 5000 * cart.length
        // const obj = new Fee(1_000_000, { uusd: 30000 + addToGas })
        //const obj = new Fee(200_000, { uusd: 340000 + addToGas })
        const obj = new StdFee(10_000, { uusd: 4500})
        let exec_msg = {
            register: {
                combination: cart,
            },
        }
        //Check for paymethod (ust or WFD)
        let coins_msg
        if (payWith == 'ust') {
            coins_msg = {
                uusd: state.config.price_per_ticket_to_register * cart.length,
            }
        } else {
            coins_msg = {
                uusd: state.config.price_per_ticket_to_register * cart.length,
            }
        }

        //Check for WFD bonus enabled
        if (WFDBonus) {
            exec_msg.register.WFDred_bonus = true
            coins_msg = {
                uusd:
                    state.config.price_per_ticket_to_register * cart.length -
                    (state.config.price_per_ticket_to_register * cart.length) /
                        state.config.bonus_burn_rate,
            }
        }

        if (giftFriend.active && giftFriend.wallet != '') {
            exec_msg.register.address = giftFriend.wallet
        }
        let msg
        if (payWith == 'ust') {
            msg = new MsgExecuteContract(
                connectedWallet.walletAddress,
                loterra_contract_address,
                exec_msg,
                coins_msg
            )
        } else {
            //WFDred of message
            let WFDMsg
            if (giftFriend.active && giftFriend.wallet != '') {
                //Giftfriend enabled
                WFDMsg = {
                    register_WFD: {
                        combination: cart,
                        gift_address: giftFriend.wallet,
                    },
                }
            } else {
                WFDMsg = {
                    register_WFD: {
                        combination: cart,
                    },
                }
            }

            msg = new MsgExecuteContract(
                connectedWallet.walletAddress,
                state.WFDredContractAddress,
                {
                    send: {
                        contract: loterra_contract_address,
                        amount: String(
                            state.config.price_per_ticket_to_register *
                                cart.length
                        ),
                        msg: Buffer.from(JSON.stringify(WFDMsg)).toString(
                            'base64'
                        ),
                    },
                }
            )
        }

        connectedWallet
            .post({
                msgs: [msg],
                // fee: obj,
                // gasPrices: obj.gasPrices(),
                gasPrices: obj.gasPrices(),
                gasAdjustment: 1.7,
            })
            .then((e) => {
                if (e.success) {
                    //setResult("register combination success")
                    showNotification(
                        'register combination success',
                        'success',
                        4000
                    )
                    multiplier(amount)
                    setWFDBonus(false)
                    setBuyLoader(false)
                } else {
                    //setResult("register combination error")
                    showNotification(
                        'register combination error',
                        'error',
                        4000
                    )
                    setBuyLoader(false)
                }
            })
            .catch((e) => {
                //setResult(e.message)
                showNotification(e.message, 'error', 4000)
                setBuyLoader(false)
            })
    }

    
    function inputChange(e) {
        e.preventDefault()
        let ticketAmount = e.target.value
        if (ticketAmount > 200) ticketAmount = 200
        addCode(ticketAmount)
        setAmount(ticketAmount)
    }

    function addCode(amount) {
        if (amount >= 1) {
            //console.log(state.combination,amount)
            let copy = state.combination.split(' ')
            if (amount < copy.length) {
                let nr = copy.length - amount
                copy.splice(-nr)
            } else {
                let nr = amount - copy.length
                for (let index = 0; index < nr; index++) {
                    let newCombo = generate()
                    copy.push(newCombo)
                }
            }
            let filtered = copy.filter(function (el) {
                return el != null
            })
            let string = filtered.join(' ')
            dispatch({ type: 'setCombination', message: string })
        }
    }

    function generate() {
        const combination = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
        ]
        let randomCombination = ''
        for (let x = 0; x < 6; x++) {
            const random = Math.floor(Math.random() * combination.length)
            randomCombination += combination[random]
        }
        return randomCombination
    }

    function multiplier(mul) {
        let allCombo = ''
        for (let x = 0; x < mul; x++) {
            let newCombo = generate()
            allCombo = allCombo == '' ? newCombo : allCombo + ' ' + newCombo
        }
        // setCombo(allCombo)
        dispatch({ type: 'setCombination', message: allCombo })
        const cart = allCombo.split(' ')
        setAmount(cart.length)
    }

    function updateCombos(new_code, index) {
        //console.log('updating combos', new_code, index)
        let copy = state.combination
        copy.split(' ').map((obj, k) => {
            if (k == index) {
                //console.log(obj,' will be ',new_code)
                obj = new_code
            }
        })
        toast('you changed a ticket code')
        dispatch({ type: 'setCombination', message: copy })
        //console.log(copy)
        //console.log(state.combination)
    }

    function hideNotification() {
        setNotification({
            message: notification.message,
            type: notification.type,
            show: false,
        })
    }

    function showNotification(message, type, duration) {
        //console.log('fired notification')
        setNotification({
            message: message,
            type: type,
            show: true,
        })
        //console.log(notification)
        //Disable after $var seconds
        setTimeout(() => {
            setNotification({
                message: message,
                type: type,
                show: false,
            })
            //console.log('disabled',notification)
        }, duration)
    }

    
    function amountChange(type) {
        let ticketAmount = amount
        if (type == 'up') {
            ticketAmount++
        } else {
            ticketAmount--
        }
        if (ticketAmount <= 1) ticketAmount = 1
        if (ticketAmount > 200) ticketAmount = 200
        addCode(ticketAmount)
        setAmount(ticketAmount)
    }

    function marketCap() {
        if (lotaPrice.assets) {
            let sum =
                (lotaPrice.assets[1].amount / lotaPrice.assets[0].amount) *
                circulatingSupply()
            return sum
        }
    }

    function circulatingSupply() {
        let total =
            (parseInt(state.tokenInfo.total_supply) - BURNED_LOTA) / 1000000
        let daoFunds = parseInt(state.daoFunds / 1000000)
        let sum = total - daoFunds
        return sum
    }

    function totalSupply() {
        let total =
            (parseInt(state.tokenInfo.total_supply) - BURNED_LOTA) / 1000000
        return total
    }

    function giftCheckbox(e, checked) {
        setGiftFriend({ active: !giftFriend.active, wallet: '' })
    }
    function giftAddress(e) {
        setGiftFriend({ active: true, wallet: e.target.value })
    }

    function bonusCheckbox(e, checked) {
        setWFDBonus(!WFDBonus)
    }

    
    const clickElement = (ref) => {
        ref.current.dispatchEvent(
            new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1,
            })
        )
    }


    function scrollToStats() {
        if(typeof window === 'object'){
        window.scrollTo({
            behavior: 'smooth',
            top: loterraStats.current.offsetTop,
        })
        }
    }

    function totalNrPrizes() {
        let count = 0
        state.allRecentWinners.map((obj) => {
            obj.claims.ranks.map((rank) => {
                count++
            })
        })
        return count
    }
    const whToggle = useRef(null)
    const toToggle = useRef(null)
    const weToggle = useRef(null)
    const daToggle = useRef(null)
    const buToggle = useRef(null)
    const maToggle = useRef(null)
    const allToggle = useRef(null)
    const [whitepaper, setwhitepaper] = useState({ active: false, wallet: '' })
    const [tokenomic, settokenomic] = useState({ active: false, wallet: '' })
    const [website, setwebsite] = useState({ active: false, wallet: '' })
    const [dapp, setdapp] = useState({ active: false, wallet: '' })
    const [business, setbusiness] = useState({ active: false, wallet: '' })
    const [marketing, setmarketing] = useState({ active: false, wallet: '' })
    const [all, setall] = useState({ active: false, wallet: '' })
    function whCheckbox(e, checked) {
        setwhitepaper({ active: !whitepaper.active, wallet: '' })
    }
    function toCheckbox(e, checked) {
        settokenomic({ active: !tokenomic.active, wallet: '' })
    }
    function weCheckbox(e, checked) {
        setwebsite({ active: !website.active, wallet: '' })
    }
    function daCheckbox(e, checked) {
        setdapp({ active: !dapp.active, wallet: '' })
    }
    function buCheckbox(e, checked) {
        setbusiness({ active: !business.active, wallet: '' })
    }
    function maCheckbox(e, checked) {
        setmarketing({ active: !marketing.active, wallet: '' })
    }
    function allCheckbox(e, checked) {
        setall({ active: !all.active, wallet: '' })
    }
    

    const wh_click = (ref) => {
        if(typeof window == 'object'){
        ref.current.dispatchEvent(
            new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1,
            })
        )
        }
    }
    


    return (
    <>
    <video className='videoTag' autoPlay loop muted style={{position:"fixed"}}>
        <source src={sample} type='video/mp4' />
    </video>
    <div className="container-fluid" style={{position:"absolute", opacity:"0.8"}} >
        <div className="row" style={{paddingLeft: 100, paddingRight: 100}}>
            <div className="col-12">
                <div
                    className={
                        'hero' + (buyNow ? ' active' : '')
                    }  
                    style={{
                        backgroundImage: 'url(ab.svg)', 
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className="card-header">
                        <h1>Create a New Project </h1>
                        <button className="toggle"
                            onClick={() => setBuyNow(!buyNow)}
                        >
                        </button>
                    </div>
                    <div className="card-body">
                        <p style={{ marginBottom: 0,}}>
                            Back On:
                        </p>
                        <div className="btn-group w-100 mb-2">
                            <button className={
                                    'btn btn-default' +
                                    (payWith == 'ust'
                                        ? ' active'
                                        : ' inactive')
                                }
                                onClick={() => setPayWith('ust')}
                            >
                                <img src={'/UST.svg'} className="me-2" width="20px"/>
                                UST
                            </button>
                            <button
                                className={
                                    'btn btn-default' +
                                    (payWith == 'WFD'
                                        ? ' active'
                                        : ' inactive')
                                }
                                onClick={() => setPayWith('WFD')}
                            >
                                <img src={'/WFD.png'} className="me-2" width="20px" />
                                WFD
                            </button>
                        </div>
                        <div className="Project name">
                            <h2>Project name </h2>
                                <input type="Text" className="form-control amount-control"
                                    placeholder="Crypto of Duty" value={Pjname}                                      
                                    onChange={(e) => changePjname(e)}
                                />
                        </div>
                        <div className="Project Description">
                            <h2>Project Description </h2>
                            <textarea className="form-control amount-control" value={Pjdescription}
                                placeholder = "This multi Chain global war project will have a token and its distribution in each ecosystem, based on play to earn technology and on buying game Assets to give to players to improve the gaming experience.Based on NFT technology, each ecosystem will have specific weapons sold in the form of NFTs, specific characters and abilities Once the game is set (similar to Call of Duty) the war between ecosystems will begin, where the rewards will be based on the strength of the ecosystem in which they are located and there will be only one winning ecosystem."
                                onChange={(e) => changePjdescription(e)} />
                        </div>
                        <div className="Project WebSite">
                            <h2>Project WebSite </h2>
                            <input
                                type="Url"
                                className="form-control amount-control" value={Pjweb}
                                placeholder="https://example.com"
                                onChange={(e) => changePjweb(e)}
                            />
                        </div>
                        <div className="Project White Paper">
                            <h2>Project WhitePaper </h2>
                            <input
                                type="Text"
                                className="form-control amount-control" value={Pjwhitepaper}
                                onChange={(e) => changePjwhitepaper(e)}
                            />
                        </div>
                        <div className="Project Team">
                            <h2>Project Team Description </h2>
                            <textarea className="form-control amount-control" value={Pjtdescription}
                                placeholder = "Our team is very qualified development team for this type blockchain project. thanks."
                                onChange={(e) => changePjtdescription(e)} />

                        <div className="Project Group row">
                            <div className="Project Category col-md-4">
                                <h2>Project Category </h2>
                                <Select 
                                defaultValue={catego_options["Crypto"]}
                                options={catego_options}
                                onChange={(e) => categoryhandleChange(e)}
                                name="category"
                                styles={select_style_1}
                                value={categoryItem(selected1)}
                                />
                            </div>
                            <div className="Project SubCategory col-md-4">
                                <h2>Project SubCategory</h2>
                                <Select
                                    defaultValue={subcatego_option["Terra"]}
                                    onChange={(e) => subcategoryhandleChange(e)}
                                    name="subcategory"
                                    styles={select_style_2}
                                    options={selected1 === "NoCrypto" ? subcatego_option_1 : subcatego_option}
                                    value={selected1 === "NoCrypto" ? subcategoryitem_1(selected2) : subcategoryitem(selected2)}
                                />
                            </div>
                            <div className="Project ChainDetails col-md-4">
                                <h2>Project ChainDetails </h2>
                                <Select
                                    defaultValue={chaindetail_options["Charity"]}
                                    onChange={(e) => chaindetailshandleChange(e)}
                                    name="chain_details"
                                    styles={select_style_3}
                                    required
                                    options={chaindetail_options}
                                    value={chaindetailsitem(selected3)}
                                />
                            </div>
                        </div>    
                        <div className="Email">
                            <h2>Email</h2>
                                <input type="email" className="form-control amount-control"
                                    placeholder= "example@gmail.com" value={Pjemail}
                                    onChange={changePjemail}
                                />
                        </div>
                        <div className="input-group mt-3 mb-2">
                        <h2>Amount Required </h2>
                            <button className="btn btn-default"
                                onClick={() => amountChange('down')}
                            >
                                <MinusCircle
                                    size={31}
                                    color={'#9183d4'}
                                />s
                            </button>
                            <input
                                type="number"
                                className="form-control amount-control"
                                value={amount}
                                min="1"
                                max="1000000000000"
                                step="1"
                                onChange={(e) => inputChange(e)}
                            />
                            <button
                                className="btn btn-default"
                                onClick={() => amountChange('up')}
                            >
                                <PlusCircle
                                    size={31}
                                    color={'#9183d4'}
                                />
                            </button>
                        </div>
                        
                        {/* <p className="mb-2">Total: <strong>{numeral((amount * price) / 1000000).format("0,0.00")} UST</strong></p> */}
                        {!WFDBonus || payWith == 'WFD' ? (
                            <p className="mb-2">
                                Total:{' '}
                                <strong>
                                    {numeral(
                                        (amount * price) / 1000000
                                    ).format('0,0.00')}{' '}
                                    {payWith == 'ust' ? 'UST' : 'WFD'}
                                </strong>
                            </p>
                        ) : (
                            <>
                                <p
                                    className="mb-0"
                                    style={{
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    Total:{' '}
                                    <strong>
                                        {numeral(
                                            (amount * price) / 1000000
                                        ).format('0,0.00')}{' '}
                                        UST
                                    </strong>
                                </p>
                                <p
                                    className="mb-2"
                                    style={{ color: '#4ee19b' }}
                                >
                                    Total:{' '}
                                    <strong>
                                        {' '}
                                        {numeral(
                                            (amount * price) / 1000000 -
                                                (amount * price) /
                                                    1000000 /
                                                    state.config
                                                        .bonus_burn_rate
                                        ).format('0,0.00')}{' '}
                                        UST{' '}
                                        <span>
                                            +{' '}
                                            {numeral(
                                                (amount * price) /
                                                    1000000 /
                                                    state.config
                                                        .bonus_burn_rate
                                            ).format('0,0.00')}{' '}
                                            WFD
                                        </span>
                                    </strong>
                                </p>
                                <span className="info mb-2">
                                    <Info
                                        size={14}
                                        style={{ marginTop: '-2px' }}
                                        weight="fill"
                                        className="me-1"
                                    />
                                    No WFD? you can buy WFD on the{' '}
                                    <a
                                        href="https://app.WFDredprotocol.com"
                                        target="_blank"
                                    >
                                        WFDred website
                                    </a>
                                </span>
                            </>
                        )}

                        {payWith == 'ust' && (
                            <>
                                <p
                                    style={{
                                        marginBottom: '7px',
                                        fontSize: '14px',
                                        opacity: '0.3',
                                    }}
                                >
                                    Boost this project GOLD{' '}
                                    <a
                                        style={{ color: '#fff' }}
                                        href="https://app.WFDredprotocol.com"
                                        target="_blank"
                                    >
                                        WFD Gold
                                    </a>
                                </p>
                                <label className="bonus-label">
                                    <input
                                        type="checkbox"
                                        ref={bonusToggle}
                                        checked={WFDBonus}
                                        className="switch"
                                        name="WFD_bonus"
                                        onChange={(e, checked) =>
                                            bonusCheckbox(e, checked)
                                        }
                                    />
                                    <label
                                        className="switch-label"
                                        onClick={() =>
                                            clickElement(bonusToggle)
                                        }
                                    ></label>
                                    <Fire size={24} weight="fill" />{' '}
                                    BOOST GOLD
                                    <span
                                        style={{
                                            color: '#FFD700',
                                            fontFamily: 'Cosmos',
                                            fontSize: '1.2em',
                                            padding: '4px 8px',
                                            background:
                                                'linear-gradient(228.88deg,rgba(0,0,0,.2) 18.2%,hsla(0,0%,69%,.107292) 77.71%,rgba(0,0,0,.0885417) 99.78%,transparent 146.58%),#171717',
                                            borderRadius: '25px',
                                        }}
                                    >
                                        WFD
                                    </span>
                                    <span className="badge rounded-pill">
                                        BOOST
                                    </span>
                                </label>
                            </>
                        )}
                        {payWith !== 'ust' && (
                            <span className="info mb-2">
                                <Info
                                    size={14}
                                    style={{ marginTop: '-2px' }}
                                    weight="fill"
                                    className="me-1"
                                />
                                No WFD? you can buy WFD on the{' '}
                                <a
                                    href="https://app.WFDredprotocol.com"
                                    target="_blank"
                                >
                                    WFDred website
                                </a>
                            </span>
                        )}

                        <label className="gift-label">
                            <input
                                type="checkbox"
                                ref={friendsToggle}
                                checked={giftFriend.active}
                                className="switch"
                                name="gift_friend"
                                onChange={(e, checked) =>
                                    giftCheckbox(e, checked)
                                }
                            />
                            <label
                                className="switch-label"
                                onClick={() =>
                                    clickElement(friendsToggle)
                                }
                            ></label>
                            <Gift size={24} weight="fill" /> BOOST SILVER
                            <span className="badge rounded-pill">
                                BOOST
                            </span>
                        </label>
                        {giftFriend.active && (
                            <>
                                <p className="m-0">
                                </p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="yourfriendswalletaddress"
                                    name="gift_wallet"
                                    onChange={(e) => giftAddress(e)}
                                />
                            </>
                        )}
                        <div className="text-sm">{result}</div>
                        <button
                            onClick={() => helpclick()}
                            className="btn btn-default w-100 mb-3 mt-3"
                            style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                padding: '11px 5px',
                                borderBottom: '4px solid #10003b',
                            }}
                        >
                            <PencilLine
                                size={24}
                                color={'#ff36ff'}
                                style={{
                                    marginTop: '-1px',
                                    marginRight: '5px',
                                }}
                            />
                            Help to create your idea
                        </button>
                        <button
                            onClick={() => execute()}
                            className="btn btn-special w-100"
                            disabled={amount <= 0}
                        >
                            {!buyLoader ? (
                                <>Submit PROJECT</>
                            ) : (
                                <div
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    style={{
                                        position: 'relative',
                                        top: '-3px',
                                    }}
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={'backdrop' + (buyNow ? ' show' : '')}
                    onClick={() => setBuyNow(!buyNow)}
                ></div>
                {/* <SocialShare /> */}
            </div>
        </div>

        <div className="row">
        {/* {ticketModal ? <><TicketModal/></> : setTicketModal(!ticketModal)} */}
        <Footer />
        </div>
    </div>
    


    <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className={
                                'card proj-details-block' + (ticketModal ? ' active' : '')
                            }
                        >
                            <div className="card-header">
                                <h3>Help Center</h3>
                                <button
                                    className="toggle"
                                    onClick={() => setTicketModal(!ticketModal)}
                                >
                                    <X size={36} />
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-5" style={{marginLeft:'10px', marginRight:'10px'}}>
                                    <div className="row"><h4>How we can Help you?</h4></div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={whToggle}
                                                checked={whitepaper.active}
                                                onChange={(e, checked) =>
                                                    whCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(whToggle)
                                                }
                                                >
                                                </label>
                                                <span>White Paper</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={toToggle}
                                                checked={tokenomic.active}
                                                onChange={(e, checked) =>
                                                    toCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(toToggle)
                                                }
                                                >
                                                </label>
                                                <span>Tokenomics</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={weToggle}
                                                checked={website.active}
                                                onChange={(e, checked) =>
                                                    weCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(weToggle)
                                                }
                                                >
                                                </label>
                                                <span>Website</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={daToggle}
                                                checked={dapp.active}
                                                onChange={(e, checked) =>
                                                    daCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(daToggle)
                                                }
                                                >
                                                </label>
                                                <span>Dapp/web3.0</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={buToggle}
                                                checked={business.active}
                                                onChange={(e, checked) =>
                                                    buCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(buToggle)
                                                }
                                                >
                                                </label>
                                                <span>Business Develop</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={maToggle}
                                                checked={marketing.active}
                                                onChange={(e, checked) =>
                                                    maCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(maToggle)
                                                }
                                                >
                                                </label>
                                                <span>Marketing Management</span>
                                            </lable>
                                        </div>
                                        <div className="row">
                                            <lable className="gift-label">
                                            <input type="checkbox" className="switch"
                                                ref={allToggle}
                                                checked={all.active}
                                                onChange={(e, checked) =>
                                                    allCheckbox(e, checked)
                                                }
                                            />
                                            <label
                                                className="switch-label"
                                                onClick={() =>
                                                    wh_click(allToggle)
                                                }
                                                >
                                                </label>
                                                <span>All</span>
                                            </lable>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6" style={{marginRight:'10px'}}>
                                        <div className="row mb-2">
                                            <textarea 
                                                style={{height:'450px', overflow:'hidden'}}
                                                className="form-control amount-control" value={helperdescription}
                                                placeholder = "This multi Chain global war project will have a token and its distribution in each ecosystem, based on play to earn technology and on buying game Assets to give to players to improve the gaming experience.Based on NFT technology, each ecosystem will have specific weapons sold in the form of NFTs, specific characters and abilities Once the game is set (similar to Call of Duty) the war between ecosystems will begin, where the rewards will be based on the strength of the ecosystem in which they are located and there will be only one winning ecosystem."
                                                onChange={(e) => changehelperdescription(e)} required/>
                                            
                                        </div>
                                        <div className="row mb-2">
                                            <input type="email" className="form-control amount-control"
                                                placeholder= "example@gmail.com" value={helperemail}
                                                onChange={changehelperemail} required
                                            />
                                        </div>
                                        <div className="row">
                                        <button
                                            onClick={() => emailsubmit()}
                                            className="btn btn-special w-100"
                                        >
                                            {!buyLoader ? (
                                                <>Send Email</>
                                            ) : (
                                                <div
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    style={{
                                                        position: 'relative',
                                                        top: '-3px',
                                                    }}
                                                >
                                                    <span className="visually-hidden">
                                                        Loading...
                                                    </span>
                                                </div>
                                            )}
                                        </button>
                            
                                        </div>
                                        <div className="row mt-4">
                                            <h3>Our Team Contact you Soon</h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div
                            className={'backdrop' + (ticketModal ? ' show' : '')}
                            onClick={() => setTicketModal(!ticketModal)}
                        ></div>
                    </div>
                </div>
                
            </div>

    
    </div>
    </>
    )
}