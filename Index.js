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
            <div
                className="hero"
                style={{
                    
                    backgroundImage: 'url(bg.svg)', 
                    backgroundPosition: 'center center',
                }}
            >
                <div className="container-fluid container-md">
                    
                    <div className="row">
                        <div className="col-lg-12 col-xl-8 mx-auto text-center">
                            <div className="jackpot">
                                <img
                                    //src={'/Lottery.png'}
                                    style={{
                                        marginBottom: '-58px',
                                        maxWidth: '100%',
                                        position: 'relative',
                                        zIndex: '1',
                                    }}
                                />
                                <h1>We Fund Projects Baked</h1> 
                                <h3></h3>
                                <h2>
                                    {numeral(jackpot)
                                        .format('0,0.00')
                                        .split('')
                                        .map((obj) => {
                                            return (
                                                <div className="roller">
                                                    {obj}
                                                </div>
                                            )
                                        })}
                                    <div className="roller">
                                        <span>UST</span>
                                    </div>
                                </h2>
                                <div className="combine-jackpot">
                                    <PlusCircle size={28} weight="fill" />
                                </div>
                                <h2 className="WFD-jackpot">
                                    {numeral(jackpotWFDred)
                                        .format('0,0.00')
                                        .split('')
                                        .map((obj) => {
                                            return (
                                                <div className="roller">
                                                    {obj}
                                                </div>
                                            )
                                        })}
                                    <div className="roller">
                                        <span>WFD</span>
                                    </div>
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-8 mx-auto">
                                    <div className="countdown-holder">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="card stats-card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-4 text-center svg-rotate">
                                                                <UserFocus
                                                                    size={36}
                                                                />
                                                            </div>
                                                            <div className="col-8 text-center d-flex text-md-start">
                                                                <h3 className="align-self-center">
                                                                    <span>
                                                                        PROJECT BAKED
                                                                    </span>
                                                                    {players ? (
                                                                        players
                                                                    ) : (
                                                                        <PriceLoader />
                                                                    )}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="card stats-card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-4 text-center svg-rotate">
                                                                <Ticket
                                                                    size={36}
                                                                />
                                                            </div>
                                                            <div className="col-8 text-center d-flex text-md-start">
                                                                <h3 className="align-self-center">
                                                                    <span>
                                                                        PROJECT TO BACK
                                                                    </span>
                                                                    {tickets ? (
                                                                        tickets
                                                                    ) : (
                                                                        <PriceLoader />
                                                                    )}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 mx-auto">
                                                <Countdown
                                                    expiryTimestamp={
                                                        expiryTimestamp
                                                    }
                                                />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>

                {/*
             <div className="mt-4">contract-v2.0.1</div>
                <div className="text-sm">terra14mevcmeqt0n4myggt7c56l5fl0xw2hwa2mhlg0</div> */}
            </div>
                

            <div
                className="how"
                style={{
                    
                    backgroundImage: 'url(bgflip.svg)', 
                    backgroundPosition: 'center center',
                }}>
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <MonitorPlay
                                size={48}
                                color={'#20ff93'}
                                className="mx-auto d-block mb-2"
                            />
                            <h2>How it works</h2>
                        </div>
                        <div className="col-md-4 my-2">
                            <div className="step">
                                <label>Step 1</label>
                                <h3>Create a Project</h3>
                                <p>Make Real your dream with Us</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-2">
                            <div className="step">
                                <label>Step 2</label>
                                <h3>Waiting For Approval</h3>
                                <p>Our Specialist and the Voitng Power decide</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-2">
                            <div className="step">
                                <label>Step 3</label>
                                <h3>View Our Project</h3>
                                <p>
                                    The project is ready to be back
                                </p>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <h5 className="mt-4 mb-1">How it s work the process?</h5>
                            <a
                                className="btn btn-plain"
                                href="https://docs.loterra.io/products/lottery"
                                style={{
                                    color: 'rgb(166, 159, 187)',
                                    fontSize: '16px',
                                }}
                                target="_blank"
                            >
                                <Files
                                    size={21}
                                    style={{
                                        position: 'relative',
                                        top: '-2px',
                                    }}
                                />{' '}
                                WeFund  documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <QuickStats lotaPrice={lotaPrice} marketCap={marketCap} circulatingSupply={circulatingSupply}/> */}

            <JackpotResults />

            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '8rem' }}
            >
                <div className="card lota-card">
                    <div className="card-header text-center">
                        <div className="card-header-icon">
                            <ChartPie size={90} color="#20FF93" />
                        </div>
                        <h3>WeFund Stats</h3>

                        
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats mb-4 mb-md-0">
                                    {lotaPrice.assets && (
                                        <>
                                            <p>Current WFD price</p>
                                            <h5>
                                                {numeral(
                                                    lotaPrice.assets[1].amount /
                                                        lotaPrice.assets[0]
                                                            .amount
                                                ).format('0.000')}
                                                <span>UST</span>
                                            </h5>
                                            {/* <p>{contractJackpotInfo}</p> */}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats">
                                    <p>Current WeFund balance</p>
                                    <h5>
                                        {numeral(contractBalance).format(
                                            '0,0.00'
                                        )}
                                        <span>UST</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats">
                                    <p>Circulating SUPPLY</p>
                                    <h5>
                                        {numeral(circulatingSupply()).format(
                                            '0,0.00'
                                        )}
                                        <span>WFD</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="lota-stats">
                                    <p>Total SUPPLY</p>
                                    <h5>
                                        {numeral(totalSupply()).format(
                                            '0,0.00'
                                        )}
                                        <span>WFD</span>
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="lota-stats">
                                    {lotaPrice.assets && (
                                        <>
                                            <p>Market Cap</p>
                                            <h5>
                                                {numeral(marketCap()).format(
                                                    '0,0.00'
                                                )}
                                                <span>UST</span>
                                            </h5>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                        
                                <a
                                    href="https://coinhall.org/charts/terra/terra1pn20mcwnmeyxf68vpt3cyel3n57qm9mp289jta"
                                    target="_blank"
                                    className="btn btn-plain"
                                    style={{
                                        color: 'rgb(166, 159, 187)',
                                        fontSize: '16px',
                                    }}
                                >
                                    <ChartLine
                                        size={21}
                                        style={{
                                            position: 'relative',
                                            top: '-2px',
                                            marginRight: '3px',
                                        }}
                                    />
                                    View chart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div
                ref={loterraStats}
                className="container"
                style={{ marginTop: '8rem' }}
            >
                <div className="card lota-card">
                    <div className="card-header text-center"style={{
                    
                    backgroundImage: 'url(Roadmap1.png)', 
                    backgroundPosition: 'center center',
                }}>
                        <div className="card-header-icon">
                            <ChartPie size={90} color="#20FF93" />
                        </div>
                        <h3>RoadMap</h3>

                        
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3"style={{
                    
                    backgroundImage: 'url(Roadmap1.png)', 
                    backgroundPosition: 'center center',
                }}>
                                
                        </div>
                    </div>
                </div>
            </div>

            </div>
            {/* <div className="container" style={{ marginTop: '2rem' }}>
                <div className="card lota-card">
                    <div className="card-body">
                        <coingecko-coin-price-chart-widget
                            currency="usd"
                            coin-id="WeFund"
                            locale="en"
                            height="300"
                        ></coingecko-coin-price-chart-widget>
                    </div>
                </div>
            </div> */}
            <Footer />

            <Notification
                notification={notification}
                close={() => hideNotification()}
            />

            <TicketModal
                open={ticketModal}
                amount={amount}
                updateCombos={(new_code, index) =>
                    updateCombos(new_code, index)
                }
                buyTickets={() => execute()}
                toggleModal={() => setTicketModal(!ticketModal)}
                multiplier={(mul) => multiplier(mul)}
            />
            <AllowanceModal
                open={allowanceModal}
                prefill={
                    (amount * state.config.price_per_ticket_to_register) /
                    state.config.bonus_burn_rate /
                    1000000
                }
                toggleModal={() => setAllowanceModal(!allowanceModal)}
                showNotification={(message, type, dur) =>
                    showNotification(message, type, dur)
                }
            />
        </>
    )
}
