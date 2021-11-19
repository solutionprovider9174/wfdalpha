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
import {
    Fee,
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
import Navbar from '../components/Navbar';

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
    const [viewdetails, setViewdetails] = useState(false)
    const [buyLoader, setBuyLoader] = useState(false)
    const [WFDBonus, setWFDBonus] = useState(false)
    const [giftFriend, setGiftFriend] = useState({ active: false, wallet: '' })
    const [notification, setNotification] = useState({
        type: 'success',
        message: '',
        show: false,
    })
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

    function checkIfDuplicateExists(w) {
        return new Set(w).size !== w.length
    }

    async function execute() {
        setBuyLoader(true)
        if (!connectedWallet) {
            setBuyLoader(false)
            return showNotification('Please connect your wallet', 'error', 4000)
        }
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
        const obj = new Fee(10_000, { uusd: 4500})
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

    /*function change(e) {
        e.preventDefault();
        setCombo(e.target.value.toLowerCase())
        console.log(combo.split(" "))
        let cart = e.target.value.toLowerCase().replace( /\s\s+/g, ' ' ).split(" ")
        if (cart[0] == ""){
            cart = []
        }
        setAmount(cart.length)
    } */
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
        window.scrollTo({
            behavior: 'smooth',
            top: loterraStats.current.offsetTop,
        })
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

    return (
        <>
            {/* <img src={'/confetti.webp'} style={{
            position:'absolute',
            maxWidth:'100%'
            }}/> */}
       
            <Navbar />
            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card"style={{
                    
                    backgroundImage: 'url(bg.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon" style={{
                            backgroundImage: 'url(bgflip.svg)',
                            backgroundPosition: 'center center',
                        }}>
                        </div>
                        <h3>Crypto of Duty</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <p>This multi Chain global war project will have a token and its distribution in each ecosystem, based on play to earn technology and on buying game Assets to give to players to improve the gaming experience.</p>
                        <p>Based on NFT technology, each ecosystem will have specific weapons sold in the form of NFTs, specific characters and abilities Once the game is set (similar to Call of Duty) the war between ecosystems will begin, where the rewards will be based on the strength of the ecosystem in which they are located and there will be only one winning ecosystem.</p>
                        <h5>We Offering</h5>
                        <p>10% Token Allocation</p>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total Backed</p>
                                <h5>
                                    {
                                        <p>10 000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total of The project</p>
                                <h5>
                                    {
                                        <p> 12'000'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                    <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-special'
                            }
                            onClick={() =>
                                setBuyNow(!buyNow)
                            }
                        >
                            Back Call of Duty on SOL
                        </button>
                        <small
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '12px',
                                opacity: '0.6',
                            }}
                        >
                            You can Back Projects with{' '}
                            <strong>UST</strong> and{' '}
                            <strong>WFD</strong>
                        </small>
                    </div>
                    </div></div>
            </div>
            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card"style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon"style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                        </div>
                        <h3>ChainJob</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <p>ChainJob is a job portal to connect the Project creator to the developer, Hire in smart and simple way using milestone and smart contract to pay and transfer without any porblem or discussion based on performance and simple to connect project creator to dev/marketing etc</p>
                        <h5>We Offering</h5>
                        <p>10% Token Allocation</p>
                        <p>5% Profit Sharing</p>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total Backed</p>
                                <h5>
                                    {
                                        <p>1'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total of The project</p>
                                <h5>
                                    {<p>1'000'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                    <div className="col-12 text-center mt-4 mb-4">
                        
                        <button
                            className={
                                'btn btn-special'
                            }
                            onClick={() =>
                                setBuyNow(!buyNow)
                            }
                        >
                            Back ChainJob
                        </button>
                        <small
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '12px',
                                opacity: '0.6',
                            }}
                        >
                            You can Back Projects with{' '}
                            <strong>UST</strong> and{' '}
                            <strong>WFD</strong>
                        </small>
                    </div></div>
                    </div>
            </div>
            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card" style={{
                    
                    backgroundImage: 'url(bg.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon"style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                        </div>
                        <h3>CryptoBank</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <p>CryptoBank is a decentralize bank, this bank proviede 15% interesse guaranteed with a minimum 1 Year allocation , this project is 100% based on Anchor protocol and is integrate with SecurityApp and Mina Protocol</p>
                        <h5>We Offering</h5>
                        <p>15% Token Allocation</p>
                        <p>3% Profit Sharing</p>
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats">
                                    <p>Total Backed</p>
                                    <h5>
                                        {
                                            <p> 5'000 </p>
                                        }
                                        <span>UST</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats">
                                    <p>Total of The project</p>
                                    <h5>
                                        {
                                            <p> 4'000'000</p>
                                        }
                                        <span>UST</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                        <div className="col-12 text-center mt-4 mb-4">
                            
                            <button
                                className={
                                    'btn btn-special'
                                }
                                onClick={() =>
                                    setBuyNow(!buyNow)
                                }
                            >
                                Back CryptoBank
                            </button>
                            <small
                                style={{
                                    display: 'block',
                                    marginTop: '10px',
                                    fontSize: '12px',
                                    opacity: '0.6',
                                }}
                            >
                                You can Back Projects with{' '}
                                <strong>UST</strong> and{' '}
                                <strong>WFD</strong>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card" style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon"
                        style={{
                    
                            backgroundImage: 'url(bgflip.svg)', 
                            backgroundPosition: 'center center',
                        }}></div>
                        <h3>LinkxVR</h3>
                    <div className="card-body">
                        <div className="row">
                        <p>Lynx VR: A charity project of a simulation game (play2earn) based on Virtual Reality which helped user to stimulus the perception based on Cognitive Behavioral Therapy (CBT) to help mental illness victim.
Sharing is caring, we want to help people and share love to the other that “you are not alone, we are here to help you”. People are actually can earn while trying fixing their illness. The player will received $Lynx token after they finish the session. .</p>
                        <p>20% Token Allocation</p>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total Backed</p>
                                <h5>
                                    {numeral(circulatingSupply()).format(
                                        '0,0.00'
                                    )}
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total of The project</p>
                                <h5>
                                    {
                                        <p>50'000'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                    <div className="col-12 text-center mt-4 mb-4">
                        
                        <button
                            className={
                                'btn btn-special'
                            }
                            onClick={() =>
                                setBuyNow(!buyNow)
                            }
                        >
                            Back LinkxVR
                        </button>
                        <small
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                fontSize: '12px',
                                opacity: '0.6',
                            }}
                        >
                            You can Back Projects with{' '}
                            <strong>UST</strong> and{' '}
                            <strong>WFD</strong>
                        </small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card" style={{
                    
                    backgroundImage: 'url(bg.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon">
                            <ChartPie size={90} color="#FFFFFF" />
                        </div>
                        <h3>SHEEP</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <p>Sheep: The vision of Sheep is to share awareness of Covid-19, hopefully together we can destroy it. Sheep is a meme token & NFTs based project, our token named $HT</p>
                        <p>12 Token Allocation</p>
                        <p>4% Profit Sharing</p>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total Backed</p>
                                <h5>
                                    {
                                        <p> 1'000 </p>

                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total of The project</p>
                                <h5>
                                    {

                                        <p> 500'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                        <div className="col-12 text-center mt-4 mb-4">
                            
                            <button
                                className={
                                    'btn btn-special'
                                }
                                onClick={() =>
                                    setBuyNow(!buyNow)
                                }
                            >
                                Back SHEEP
                            </button>
                            <small
                                style={{
                                    display: 'block',
                                    marginTop: '10px',
                                    fontSize: '12px',
                                    opacity: '0.6',
                                }}
                            >
                                You can Back Projects with{' '}
                                <strong>UST</strong> and{' '}
                                <strong>WFD</strong>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '12rem' }}
            >
                <div className="card lota-card" style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                    <div className="card-header text-center">
                        <div className="card-header-icon"style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
                        </div>
                        <h3>SIMBA</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <p>TSimba: A charity project based where the 50% profit by selling the NFTs and Token ($MB) will goes to animal rescue, zoo, conservative, national park etc. Simba aims to help the nature and its ecosystem. .</p>
                        <p>18% Token Allocation</p>
                        <p>5% Profit Sharing</p>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total Backed</p>
                                <h5>
                                    {
                                        <h3 color="#000FFF"> 2'000 </h3>

                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="lota-stats">
                                <p>Total of The project</p>
                                <h5>
                                    {

                                        <p> 500'000</p>
                                    }
                                    <span>UST</span>
                                </h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 text-center mt-4 mb-4">
                        <button
                            className={
                                'btn btn-viewdetails'
                            }
                            onClick={() =>
                                setViewdetails(!viewdetails)
                            }
                        >
                            View Details of This Project
                        </button></div>
                            <div className="col-12 text-center mt-4 mb-4">
                                
                                <button
                                    className={
                                        'btn btn-special'
                                    }
                                    onClick={() =>
                                        setBuyNow(!buyNow)
                                    }
                                >
                                    Back SIMBA
                                </button>
                                <small
                                    style={{
                                        display: 'block',
                                        marginTop: '10px',
                                        fontSize: '12px',
                                        opacity: '0.6',
                                    }}
                                >
                                    You can Back Projects with{' '}
                                    <strong>UST</strong> and{' '}
                                    <strong>WFD</strong>
                                </small>
                            </div>
                    </div>
                </div>
            </div>
            

{/*---------BUTTON PART-------------------------*/}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className={
                                'card amount-block' + (buyNow ? ' active' : '')
                            }
                        >
                            <div className="card-header">
                                <h3>Back Crypto Of Duty</h3>
                                <button
                                    className="toggle"
                                    onClick={() => setBuyNow(!buyNow)}
                                >
                                    <X size={36} />
                                </button>
                            </div>
                            <div className="card-body">
                                <p
                                    style={{
                                        marginBottom: 0,
                                    }}
                                >
                                    Pay with:
                                </p>
                                <div className="btn-group w-100 mb-2">
                                    <button
                                        className={
                                            'btn btn-default' +
                                            (payWith == 'ust'
                                                ? ' active'
                                                : ' inactive')
                                        }
                                        onClick={() => setPayWith('ust')}
                                    >
                                        <img
                                            src={'/UST.svg'}
                                            className="me-2"
                                            width="20px"
                                        />
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
                                        <img
                                            src={'/WFD.png'}
                                            className="me-2"
                                            width="20px"
                                        />
                                        WFD
                                    </button>
                                </div>
                                
                                <div className="input-group mt-3 mb-2">
                                    <button
                                        className="btn btn-default"
                                        onClick={() => amountChange('down')}
                                    >
                                        <MinusCircle
                                            size={31}
                                            color={'#9183d4'}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        className="form-control amount-control"
                                        value={amount}
                                        min="1"
                                        max="200"
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
                                        <p className="mb-0" style={{
                                                textDecoration: 'line-through',
                                            }} >
                                            Total:{' '}
                                            <strong>
                                                {numeral(
                                                    (amount * price) / 1000000
                                                ).format('0,0.00')}{' '}
                                                UST
                                            </strong>
                                        </p>
                                        <p className="mb-2" style={{ color: '#4ee19b' }} >
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
                                <div className="text-sm">{result}</div>
                                {buyLoader ?(<></>):
                                    (
                                        <><h3>Wallet</h3>
                                            <input
                                                type="Text"
                                                className="form-control amount-control"
                                                onChange={(e) => inputChange(e)}
                                            />
                                        </>
                                    )}
                                {/* <><h3>Wallet Echo System</h3>
                                    <input
                                        type="Text"
                                        className="form-control amount-control"
                                        onChange={(e) => inputChange(e)}
                                    />
                                </> */}
                                <div className="mb-4"><h3>Message for project creator</h3>
                                    <textarea className="form-control amount-control"
                                        onChange={(e) => inputChange(e)} />
                                </div>
                                {/* <button
                                    onClick={() => setTicketModal(!ticketModal)}
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
                                </button> */}
                                <button
                                    onClick={() => execute()}
                                    className="btn btn-special w-100"
                                    disabled={amount <= 0}
                                >
                                    {!buyLoader ? (
                                        <>Back {amount} Crypto Of Duty</>
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
                <div className="row"><Footer/></div>
            </div>

{/* /*************************view details modal */}
<div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className={
                                'card proj-details-block' + (viewdetails ? ' active' : '')
                            }
                        >
                            <div className="card-header">
                                <h3>Project Details Overview</h3>
                                <button
                                    className="toggle"
                                    onClick={() => setViewdetails(!viewdetails)}
                                >
                                    <X size={36} />
                                </button>
                            </div>
                            <div className="card-body">
                             <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project name: </h4></div>
                                <div className="col-md-9 text-center"><h2>Project name</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project Description: </h4></div>
                                <div className="col-md-9 text-center"><h4>Our project is for crowdfunding platform like world top dapp wefund.app, we are trying to gather assets from world and world level developers and designers. thanks regards</h4></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>WebSite : </h4></div>
                                <div className="col-md-9 text-center"><h2>Project WebSite </h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project WhitePaper: </h4></div>
                                <div className="col-md-9 text-center"><h2>Project WhitePaper</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Project Team Description: </h4></div>
                                <div className="col-md-9 text-center"><h4>Our team is very talendted for this job done. we will try our best for delivering this project within your deadline and your money limit. thanks.</h4></div>
                            </div>
                            <div className="col-12 text-center view-details-inline b-bord">
                                <div className="col-md-3 text-center"><h4>Amount: </h4></div>
                                <div className="col-md-9 text-center"><h2>1259UST</h2></div>
                            </div>
                            <div className="col-12 text-center view-details-inline">
                                <div className="col-md-3 text-center"><h4>TimeLine: </h4></div>
                                <div className="col-md-9 text-center"><h2>15days</h2></div>
                            </div>
                                <button
                                    onClick={() => setTicketModal(!ticketModal)}
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
                                        <>Back {amount} Crypto Of Duty</>
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
                            className={'backdrop' + (viewdetails ? ' show' : '')}
                            onClick={() => setViewdetails(!viewdetails)}
                        ></div>
                        {/* <SocialShare /> */}
                    </div>
                </div>
                
            </div>
            </>
    )
}