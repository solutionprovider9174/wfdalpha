import React, {
    createContext,
    useContext,
    useReducer,
    useCallback,
} from 'react'
import {
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
} from '@terra-money/terra.js'

const StoreContext = createContext()

const rankClasses = [
    { rank: 1, class: 'super-special-text' },
    { rank: 2, class: 'special-text' },
    { rank: 3, class: 'medium-text' },
    { rank: 4, class: '' },
    { rank: 5, class: '' },
    { rank: 6, class: '' },
]

const amountClasses = [
    { amount: 1, class: 'cyan' },
    { amount: 2, class: 'blue' },
    { amount: 3, class: 'cyan' },
    { amount: 4, class: 'fire' },
    { amount: 5, class: 'fire' },
    { amount: 6, class: 'fire' },
    { amount: 7, class: 'fire' },
    { amount: 8, class: 'fire' },
    { amount: 9, class: 'fire' },
    { amount: 10, class: 'fire' },
    { amount: 11, class: 'fire' },
]

const comboTextSix = [
    'Good work!',
    'Boom!',
    'Perfect!',
    'So close!',
    'Dynamite!',
    'On Fire!',
    'Impossible!',
]

const comboTextFive = [
    'Good work!',
    'Boom!',
    'Perfect!',
    'So close!',
    'Dynamite!',
    'On Fire!',
    'Impossible!',
]

const comboTextFour = [
    'Good work!',
    'Boom!',
    'Perfect!',
    'So close!',
    'Dynamite!',
    'On Fire!',
    'Impossible!',
]

const comboTextThree = [
    'What a combo?!',
    'Wipeout!',
    'Tasty!',
    'Blasted!',
    'Thunder!',
]

const comboTextTwo = [
    'Heros!',
    'Smashed!',
    'Rocket!',
    'Master!',
    'Out of control!',
    'Ticket Storm!',
    'Blasted!',
    'On Fire!',
    'Crypto mania!',
]

const comboTextOne = [
    'Big bang!',
    'Destroyer!',
    'Dynamite!',
    'Summit!',
    'Mavericks!',
    'Galactic!',
    'Wanted!',
]

const initialState = {
    loterraContractAddress: 'terra1q2k29wwcz055q4ftx4eucsq6tg9wtulprjg75w',
    loterraContractAddressCw20: 'terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
    loterraPoolAddress: 'terra1pn20mcwnmeyxf68vpt3cyel3n57qm9mp289jta',
    loterraStakingAddress: 'terra1342fp86c3z3q0lksq92lncjxpkfl9hujwh6xfn',
    alteredContractAddress: 'terra15tztd7v9cmv0rhyh37g843j8vfuzp8kw0k5lqv',
    loterraLPAddress: 'terra1t4xype7nzjxrzttuwuyh9sglwaaeszr8l78u6e',
    loterraStakingLPAddress: 'terra1pdslh858spzqrtx2gwr69pzm9m2wrv55aeh742',
    alteredStakingLPAddress: 'terra1augyqytpq9klph5egx99m5ufrcjx5f7xgrcqck',
    dogetherAddress: 'terra19h4xk8xxxew0ne6fuw0mvuf7ltmjmxjxssj5ts',
    dogetherStakingAddress: 'terra1z2vgthmdy5qlz4cnj9d9d3ajtqeq7uzc0acxrp',
    allWinners: [],
    allRecentWinners: [],
    tokenInfo: {},
    allPlayers: [],
    allProposals: [],
    allNativeCoins: [],
    staking: {},
    wallet: {},
    LotaBalance: {},
    LPBalance: {},
    config: {},
    currentLotteryId: 0,
    historicalTicketLotteryId: 0,
    historicalJackpotLotteryId: 0,
    historicalJackpot: 0,
    lastDrawnJackpot: 0,
    holderPercentageFee: 0,
    allCombinations: [],
    allHolder: {},
    allHolderLP: {},
    winningCombination: 0,
    holderClaims: [],
    youWon: false,
    holderClaimsLP: [],
    holderAccruedRewards: 0,
    LPHolderAccruedRewards: 0,
    combination: '',
    modal: false,
    ustBalance: 0,
    daoFunds: 0,
    lcd_client: new LCDClient({
        URL: 'https://lcd.terra.dev/',
        chainID: 'columbus-4',
    }),
    blockHeight: 0,
    stateLPStaking: {},
    poolInfo: { assets: [] },
    stakingLoterraFunds: 0,
    stakingAlteredFunds: 0,
    comboTextSix: comboTextSix,
    comboTextFive: comboTextFive,
    comboTextFour: comboTextFour,
    comboTextThree: comboTextThree,
    comboTextTwo: comboTextTwo,
    comboTextOne: comboTextOne,
    rankClasses: rankClasses,
    amountClasses: amountClasses,
    jackpotAltered: 0,
    historicalJackpotAlte: 0,
    balanceStakeOnDogether: 0,
    holderClaimsDogether: [],
    totalBalancePoolDogether: 0,
    dogetherState: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setDogetherState":
            return {
                ...state,
                dogetherState: action.message,
            }
        case 'setTotalBalancePoolDogether':
            return {
                ...state,
                totalBalancePoolDogether: action.message,
            }
        case 'setHolderClaimsDogether':
            return {
                ...state,
                holderClaimsDogether: action.message,
            }
        case 'setBalanceStakeOnDogether':
            return {
                ...state,
                balanceStakeOnDogether: action.message,
            }
        case 'setHistoricalJackpotAlte':
            return {
                ...state,
                historicalJackpotAlte: action.message,
            }
        case 'setAlteredJackpot':
            return {
                ...state,
                jackpotAltered: action.message,
            }
        case 'setStakingLoterraFunds':
            return {
                ...state,
                stakingLoterraFunds: action.message,
            }
        case 'setStakingAlteredFunds':
            return {
                ...state,
                stakingAlteredFunds: action.message,
            }
        case 'setYouWon':
            return {
                ...state,
                youWon: action.message,
            }
        case 'setLastDrawnJackpot':
            return {
                ...state,
                lastDrawnJackpot: action.message,
            }
        case 'setPoolInfo':
            return {
                ...state,
                poolInfo: action.message,
            }
        case 'setWinningCombination':
            return {
                ...state,
                winningCombination: action.message,
            }
        case 'setStateLPStaking':
            return {
                ...state,
                stateLPStaking: action.message,
            }
        case 'setBlockHeight':
            return {
                ...state,
                blockHeight: action.message,
            }
        case 'setModal':
            return {
                ...state,
                modal: action.message,
            }
        case 'setCurrentLotteryId':
            return {
                ...state,
                currentLotteryId: action.message,
            }
        case 'setHistoricalTicketLotteryId':
            return {
                ...state,
                historicalTicketLotteryId: action.message,
            }
        case 'setHistoricalJackpotLotteryId':
            return {
                ...state,
                historicalJackpotLotteryId: action.message,
            }
        case 'setHistoricalJackpot':
            return {
                ...state,
                historicalJackpot: action.message,
            }
        case 'setHolderPercentageFee':
            return {
                ...state,
                holderPercentageFee: action.message,
            }
        case 'setDaoFunds':
            return {
                ...state,
                daoFunds: action.message,
            }
        case 'setStaking':
            return {
                ...state,
                staking: action.message,
            }
        case 'setTokenInfo':
            return {
                ...state,
                tokenInfo: action.message,
            }
        case 'setAllWinners':
            return {
                ...state,
                allWinners: action.message,
            }
        case 'setAllRecentWinners':
            return {
                ...state,
                allRecentWinners: action.message,
            }
        case 'setWallet':
            return {
                ...state,
                wallet: action.message,
            }
        case 'setHolderAccruedRewards':
            return {
                ...state,
                holderAccruedRewards: action.message,
            }
        case 'setLPHolderAccruedRewards':
            return {
                ...state,
                LPHolderAccruedRewards: action.message,
            }
        case 'setAllPlayers':
            return {
                ...state,
                allPlayers: action.message,
            }
        case 'setAllProposals':
            return {
                ...state,
                allProposals: action.message,
            }
        case 'setConfig':
            return {
                ...state,
                config: action.message,
            }
        case 'setAllCombinations':
            return {
                ...state,
                allCombinations: action.message,
            }
        case 'setAllHolder':
            return {
                ...state,
                allHolder: action.message,
            }
        case 'setAllHolderLP':
            return {
                ...state,
                allHolderLP: action.message,
            }
        case 'setHolderClaims':
            return {
                ...state,
                holderClaims: action.message,
            }
        case 'setHolderClaimsLP':
            return {
                ...state,
                holderClaimsLP: action.message,
            }
        case 'setAllNativeCoins':
            return {
                ...state,
                allNativeCoins: action.message,
            }
        case 'setLotaBalance':
            return {
                ...state,
                LotaBalance: action.message,
            }
        case 'setUstBalance':
            return {
                ...state,
                ustBalance: action.message,
            }
        case 'setCombination':
            return {
                ...state,
                combination: action.message,
            }
        case 'setLPBalance':
            return {
                ...state,
                LPBalance: action.message,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)
