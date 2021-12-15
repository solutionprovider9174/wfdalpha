import React, { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import { LCDClient, WasmAPI } from '@terra-money/terra.js'
import {
    useWallet,
    WalletStatus,
    useConnectedWallet,
    ConnectType,
} from '@terra-money/wallet-provider'
import {
    Wallet,
    CaretRight,
    UserCircle,
    Trophy,
    Power,
    List,
    Check,
    X,
    Ticket,
    Coin,
    Bank,
} from 'phosphor-react'
import numeral from 'numeral'
<<<<<<< Updated upstream
import { useStore } from '../store'

=======
import UserModal from './UserModal'
import { useStore } from '../store'
// import { Link } from '@reach/router'

// let useWallet = {}
// if (typeof document !== 'undefined') {
//     useWallet = require('@terra-money/wallet-provider').useWallet
// }
/*const Modal = {
    position: "absolute",
    width: "100%",
    height:"100%",
    left: "0",
    top: "0",
}
const Dialog = {
    position: "absolute",
    right: "100px",
    top: "120px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",

} */
>>>>>>> Stashed changes

const DialogButton = {
    margin: '10px 20px 10px 20px',
}
export default function ConnectWallet() {
    let connectedWallet = ''
    const [isDisplayDialog, setIsDisplayDialog] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [sideNav, setSideNav] = useState(false)
    const [bank, setBank] = useState()
    const [alteBank, setAlteBank] = useState()
    const [connected, setConnected] = useState(false)
    const { state, dispatch } = useStore()

    //Nav link active settings
    let homeClass, stakingClass, daoClass
    if (typeof location !== 'undefined') {
        homeClass = location.pathname === '/' ? 'active' : ''
        stakingClass = location.pathname.match(/^\/staking/) ? 'active' : ''
        daoClass = location.pathname.match(/^\/dao/) ? 'active' : ''
    }

    let wallet = ''
    if (typeof document !== 'undefined') {
        wallet = useWallet()
        connectedWallet = useConnectedWallet()
    }

    const lcd = useMemo(() => {
        if (!connectedWallet) {
            return null
        }

        return new LCDClient({
            URL: connectedWallet.network.lcd,
            chainID: connectedWallet.network.chainID,
        })
    }, [connectedWallet])
    //Get proposals and save to state
    // const terra = new LCDClient({
    //     URL: 'https://lcd.terra.dev/',
    //     chainID: 'columbus-4',
    // })
    const api = new WasmAPI(state.lcd_client.apiRequester)
    async function baseData() {
        const latestBlocks = await axios.get(
<<<<<<< Updated upstream
            'https://lcd.terra.dev/blocks/latest',
=======
            'https://lcd.terra.dev/blocks/latest'
>>>>>>> Stashed changes
        )

        dispatch({
            type: 'setBlockHeight',
            message: latestBlocks.data.block.header.height,
        })

        const contractConfigInfo = await api.contractQuery(
            state.loterraContractAddress,
            {
                config: {},
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )

        dispatch({ type: 'setConfig', message: contractConfigInfo })
        dispatch({
            type: 'setCurrentLotteryId',
            message: contractConfigInfo.lottery_counter,
        })
        dispatch({
            type: 'setHolderPercentageFee',
            message: contractConfigInfo.token_holder_percentage_fee_reward,
        })

        const { winners } = await api.contractQuery(
            state.loterraContractAddress,
            {
                winner: {
                    lottery_id: contractConfigInfo.lottery_counter - 1,
                },
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({ type: 'setAllRecentWinners', message: winners })

        const contractDaoBalance = await api.contractQuery(
            state.loterraContractAddressCw20,
            {
                balance: {
                    address: state.loterraContractAddress,
                },
<<<<<<< Updated upstream
            },
        )
        dispatch({ type: 'setDaoFunds', message: contractDaoBalance.balance })

        const contractDogetherState = await api.contractQuery(
            state.dogetherAddress,
            {
                state: {}
            },
        )
        dispatch({
            type: 'setDogetherState',
            message: contractDogetherState,
        })

=======
            }
        )
        dispatch({ type: 'setDaoFunds', message: contractDaoBalance.balance })
>>>>>>> Stashed changes
        const contractLPLoterraBalance = await api.contractQuery(
            state.loterraContractAddressCw20,
            {
                balance: {
                    address: state.loterraStakingLPAddress,
                },
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({
            type: 'setStakingLoterraFunds',
            message: contractLPLoterraBalance.balance,
        })
        const contractLPAlteredBalance = await api.contractQuery(
            state.loterraContractAddressCw20,
            {
                balance: {
                    address: state.alteredStakingLPAddress,
                },
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({
            type: 'setStakingAlteredFunds',
            message: contractLPAlteredBalance.balance,
        })

        // Get total pool in Dogether
        const total_pool_dogether = await api.contractQuery(
<<<<<<< Updated upstream
            'terra19h4xk8xxxew0ne6fuw0mvuf7ltmjmxjxssj5ts',
            {
                state: {},
            },
        )
        dispatch({
            type: 'setTotalBalancePoolDogether',
            message: total_pool_dogether.total_ust_pool,
=======
            state.dogetherStakingAddress,
            {
                state: { },
            }
        )
        dispatch({
            type: 'setTotalBalancePoolDogether',
            message: total_pool_dogether.total_balance,
>>>>>>> Stashed changes
        })

        const jackpotAltered = await api.contractQuery(
            state.alteredContractAddress,
            {
                balance: {
                    address: state.loterraContractAddress,
                },
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({
            type: 'setAlteredJackpot',
            message: jackpotAltered.balance,
        })

        //console.log('config',contractConfigInfo)

<<<<<<< Updated upstream
=======
        if(typeof window === "object"){
>>>>>>> Stashed changes
        if (window.location.href.indexOf('dao') > -1) {
            let pollCount = contractConfigInfo.poll_count
            //console.log('count',pollCount)
            let allProposals = []
            for (let index = 1; index < pollCount + 1; index++) {
                const proposal = await api.contractQuery(
                    state.loterraContractAddress,
                    {
                        get_poll: { poll_id: index },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                proposal.nr = index
                allProposals.push(proposal)
                //console.log('single', proposal)
            }
            dispatch({ type: 'setAllProposals', message: allProposals })
            //console.log('proposals',allProposals)
        }
<<<<<<< Updated upstream

=======
        }
>>>>>>> Stashed changes
        const staking = await api.contractQuery(state.loterraStakingAddress, {
            state: {},
        })
        dispatch({ type: 'setStaking', message: staking })
        //console.log('staking',staking)

        const token_info = await api.contractQuery(
            state.loterraContractAddressCw20,
            {
                token_info: {},
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({ type: 'setTokenInfo', message: token_info })

        const state_lp_staking = await api.contractQuery(
            state.loterraStakingLPAddress,
            {
                state: {},
<<<<<<< Updated upstream
            },
=======
            }
>>>>>>> Stashed changes
        )
        dispatch({ type: 'setStateLPStaking', message: state_lp_staking })
        const pool_info = await api.contractQuery(state.loterraPoolAddress, {
            pool: {},
        })
        console.log('pool_info')
        console.log(pool_info)
        dispatch({ type: 'setPoolInfo', message: pool_info })
    }

    //const installChrome = useInstallChromeExtension();
    //const connectedWallet = ConnectedWallet ? useConnectedWallet() : undefined;

    function display() {
        // active or disable dialog
        setIsDisplayDialog(!isDisplayDialog)
    }
    function closeModal() {
        setIsDisplayDialog(false)
    }
    function connectTo(to) {
        if (to == 'extension') {
            wallet.connect(wallet.availableConnectTypes[1])
        } else if (to == 'mobile') {
            wallet.connect(wallet.availableConnectTypes[2])
        } else if (to == 'disconnect') {
            wallet.disconnect()
            dispatch({ type: 'setWallet', message: {} })
        }
        setConnected(!connected)
        setIsDisplayDialog(false)
    }

    async function checkIfWon() {
        // Code for winner detector
        try {
            let type = false
            console.log('checking for winner')
            // Query all winners for most recent draw

            //Test purposes
            //   recentWinners = [
            //       {address:"terra1an23yxwkfda0m5dmkcxpyrqux83cw5esg9ex86",claims:{claimed:true,ranks:[4]}},
            //      ]

            if (state.allRecentWinners.length == 0) {
                type = false
            }

            state.allRecentWinners.map((obj) => {
                if (obj.address == connectedWallet.walletAddress) {
                    type = obj
                }
            })

            dispatch({ type: 'setYouWon', message: type })
            console.log(state.youWon)
        } catch (e) {
            console.log(e)
        }
    }

    async function contactBalance() {
        if (connectedWallet && connectedWallet.walletAddress && lcd) {
            //   setShowConnectOptions(false);
            dispatch({ type: 'setWallet', message: connectedWallet })

            let coins
            let alteTokens

            let token
            try {
                const api = new WasmAPI(lcd.apiRequester)
                coins = await lcd.bank.balance(connectedWallet.walletAddress)

                const contractConfigInfo = await api.contractQuery(
                    state.loterraContractAddress,
                    {
                        config: {},
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                setConnected(true)
                const lastDrawnJackpot = await api.contractQuery(
                    state.loterraContractAddress,
                    {
                        jackpot: {
                            lottery_id: contractConfigInfo.lottery_counter - 1,
                        },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({
                    type: 'setLastDrawnJackpot',
                    message: parseInt(lastDrawnJackpot) / 1000000,
                })

                // Get balance to staked on Dogether
<<<<<<< Updated upstream
                const balance_stake_on_dogether = await api.contractQuery(
                    state.dogetherStakingAddress,
                    {
                        holder: { address: connectedWallet.walletAddress },
                    },
                )
                dispatch({
                    type: 'setBalanceStakeOnDogether',
                    message: balance_stake_on_dogether.balance,
                })
=======
                const balance_stake_on_dogether = await api.contractQuery(state.dogetherStakingAddress, {
                    holder: {address: connectedWallet.walletAddress},
                })
                dispatch({ type: 'setBalanceStakeOnDogether', message: balance_stake_on_dogether.balance })
>>>>>>> Stashed changes

                // Get balance pending to claim on Dogether
                const claims_unstake_dogether = await api.contractQuery(
                    state.dogetherStakingAddress,
                    {
                        claims: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({
                    type: 'setHolderClaimsDogether',
                    message: claims_unstake_dogether.claims,
                })

                const holder = await api.contractQuery(
                    state.loterraStakingAddress,
                    {
                        holder: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({ type: 'setAllHolder', message: holder })
                //console.log(holder)

                const holderAccruedRewards = await api.contractQuery(
                    state.loterraStakingAddress,
                    {
                        accrued_rewards: {
                            address: connectedWallet.walletAddress,
                        },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({
                    type: 'setHolderAccruedRewards',
                    message: holderAccruedRewards.rewards,
                })
                //console.log(holder)

                const token = await api.contractQuery(
                    state.loterraContractAddressCw20,
                    {
                        balance: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({ type: 'setLotaBalance', message: token })
                //console.log(token)

                const claims = await api.contractQuery(
                    state.loterraStakingAddress,
                    {
                        claims: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                //console.log("claims")
                //console.log(claims)
                dispatch({ type: 'setHolderClaims', message: claims.claims })

                const tokenLP = await api.contractQuery(
                    state.loterraLPAddress,
                    {
                        balance: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({ type: 'setLPBalance', message: tokenLP })
                //console.log(tokenLP)
                const LPHolderAccruedRewards = await api.contractQuery(
                    state.loterraStakingLPAddress,
                    {
                        accrued_rewards: {
                            address: connectedWallet.walletAddress,
                        },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({
                    type: 'setLPHolderAccruedRewards',
                    message: LPHolderAccruedRewards.rewards,
                })

                const holderLP = await api.contractQuery(
                    state.loterraStakingLPAddress,
                    {
                        holder: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )
                dispatch({ type: 'setAllHolderLP', message: holderLP })

                const claimsLP = await api.contractQuery(
                    state.loterraStakingLPAddress,
                    {
                        claims: { address: connectedWallet.walletAddress },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )

                dispatch({
                    type: 'setHolderClaimsLP',
                    message: claimsLP.claims,
                })

                checkIfWon()

                alteTokens = await api.contractQuery(
                    state.alteredContractAddress,
                    {
                        balance: {
                            address: connectedWallet.walletAddress,
                        },
<<<<<<< Updated upstream
                    },
=======
                    }
>>>>>>> Stashed changes
                )

                // Better to keep it at the end
                // This one can generate an error on try catch if no combination played
                // Because if error others query will not be triggered right after the error
                const combinations = await api.contractQuery(
                    state.loterraContractAddress,
                    {
                        combination: {
                            lottery_id: contractConfigInfo.lottery_counter,
                            address: connectedWallet.walletAddress,
                        },
<<<<<<< Updated upstream
                    },
                )
                dispatch({ type: 'setAllCombinations', message: combinations })
=======
                    }
                )
                dispatch({ type: 'setAllCombinations', message: combinations })

>>>>>>> Stashed changes
            } catch (e) {
                console.log(e)
            }

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
            //Store coins global state
            dispatch({ type: 'setAllNativeCoins', message: coins })
            // console.log(coins)
            let alte = parseInt(alteTokens.balance) / 1000000
            console.log(alte)
            let uusd = coins.filter((c) => {
                return c.denom === 'uusd'
            })
            let ust = parseInt(uusd) / 1000000
            setBank(numeral(ust).format('0,0.00'))
            dispatch({ type: 'setUstBalance', message: ust })
            setAlteBank(numeral(alte).format('0,0.00'))
            // connectTo("extension")
        } else {
            setBank(null)
            setAlteBank(null)
            dispatch({ type: 'setWallet', message: {} })
        }
    }

    function renderDialog() {
        if (isDisplayDialog) {
            return (
                <div /*style={Modal}*/ onClick={() => closeModal()}>
                    <div /*style={Dialog}*/ className="card-glass">
                        <button
                            onClick={() => connectTo('extension')}
                            className="button-pink-outline"
                            style={DialogButton}
                        >
                            Terra Station (extension)
                        </button>
                        <button
                            onClick={() => connectTo('mobile')}
                            className="button-pink-outline"
                            style={DialogButton}
                        >
                            Terra Station (mobile)
                        </button>
                    </div>
                </div>
            )
        }
    }

    function returnBank() {
        return (
            <>
                <Wallet
                    size={24}
                    color="#0F0038"
                    style={{ display: 'inline-block', marginTop: '-3px' }}
                />{' '}
                {bank && alteBank ? (
                    <>
                        <Check
                            size={16}
                            color="#0F0038"
                            weight="bold"
                            style={{
                                display: 'inline-block',
                                marginTop: '-8px',
                                marginLeft: '-5px',
                            }}
                        />
                    </>
                ) : (
<<<<<<< Updated upstream
                    <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                    >
=======
                    <div className="spinner-border spinner-border-sm" role="status">
>>>>>>> Stashed changes
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </>
        )
    }

    const [scrolled, setScrolled] = React.useState(false)
    const handleScroll = () => {
<<<<<<< Updated upstream
=======
        if(typeof window === 'object'){
>>>>>>> Stashed changes
        const offset = window.scrollY
        if (offset > 25) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
<<<<<<< Updated upstream
=======
        }
>>>>>>> Stashed changes
    }

    function showSideNav() {
        setSideNav(!sideNav)
    }

    useEffect(() => {
        if (!state.config.lottery_counter) {
            baseData()
        }
        if (connectedWallet) {
            contactBalance()
        }

        //console.log(connectedWallet)
<<<<<<< Updated upstream
        window.addEventListener('scroll', handleScroll)
=======
        if(typeof window === 'object')
            window.addEventListener('scroll', handleScroll)
>>>>>>> Stashed changes
    }, [
        connectedWallet,
        lcd,
        state.config,
        state.allRecentWinners,
        state.youWon,
    ])
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
    return (
        <>
            <div className="navbar-nav ms-auto" style={{flexDirection:'row'}}>
                {!connected && (
                    <>
                        <div className="btn-group" style={{width:'100%'}}>
                            <button
                                className="btn btn-green nav-item dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                width="150px"
                                style={{backGroundColor:'red', width:'100%'}}
                            >
                                Connect
                            </button>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <button
                                    onClick={() => connectTo('extension')}
                                    className="dropdown-item"
                                    style={{display:'flex', flexDirection:'row', alignItems:'center'}}
                                >
                                    <CaretRight
                                        size={16}
                                    />{' '}
                                    Terra Station (extension/mobile)
                                </button>
                                <button
                                    onClick={() => connectTo('mobile')}
                                    className="dropdown-item"
                                    style={{display:'flex', flexDirection:'row', alignItems:'center'}}
                                >
                                    <CaretRight
                                        size={16}
                                    />{' '}
                                    Terra Station (mobile for desktop)
                                </button>
                            </ul>
                        </div>
<<<<<<< Updated upstream
=======
                        <button
                            className="btn btn-default nav-item ms-2 main-nav-toggle"
                            onClick={() => showSideNav()}
                        >
                            <List size={26} />
                        </button>
>>>>>>> Stashed changes
                    </>
                )}
                {connected && (
                    <>
                        <button
<<<<<<< Updated upstream
=======
                            className={
                                'btn btn-default nav-item me-2' +
                                (state.youWon ? ' winner' : '')
                            }
                            style={{
                                padding: '0.275rem 0.55rem',
                            }}
                            onClick={() => setIsModal(!isModal)}
                        >
                            {state.youWon ? (
                                <>
                                    <Trophy
                                        size={33}
                                        style={{
                                            marginTop: '-2px',
                                            color: '#ecba26',
                                        }}
                                    />
                                    <span className="badge">YOU WON</span>
                                </>
                            ) : (
                                <UserCircle
                                    size={33}
                                    style={{
                                        marginTop: '-2px',
                                        color: '#72ffc1',
                                    }}
                                />
                            )}
                        </button>
                        <button
>>>>>>> Stashed changes
                            className="btn btn-green nav-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {returnBank() ? returnBank() : 'loading'}
                        </button>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton2"
                            style={{ top: '70px' }}
                        >
<<<<<<< Updated upstream
                            {bank && (
=======
                            {bank && alteBank && (
>>>>>>> Stashed changes
                                <div
                                    className="wallet-info d-inline-block text-start px-3"
                                    style={{ fontSize: '13px' }}
                                >
                                    <span className="d-block">
                                        <strong>YOUR WALLET:</strong>
                                    </span>
                                    <span
                                        className="d-block"
                                        style={{ marginBottom: '-5px' }}
                                    >
                                        {bank}{' '}
                                        <span className="text-sm">UST</span>
                                    </span>
<<<<<<< Updated upstream
=======
                                    <span className="d-block">
                                        {alteBank}{' '}
                                        <span className="text-sm">
                                            ALTE
                                        </span>
                                    </span>
>>>>>>> Stashed changes
                                </div>
                            )}
                            <button
                                onClick={() => connectTo('disconnect')}
                                className="dropdown-item"
                            >
                                <Power
                                    size={16}
                                    style={{ marginTop: '-2px' }}
                                />{' '}
                                <span style={{ fontSize: '13px' }}>
                                    Disconnect
                                </span>
                            </button>
                        </ul>
<<<<<<< Updated upstream
                    </>
                )}
            </div>
=======
                        <button
                            className="btn btn-default nav-item ms-2 main-nav-toggle"
                            onClick={() => showSideNav()}
                        >
                            <List size={26} />
                        </button>
                    </>
                )}
            </div>
            {/*<button onClick={() => display()}>Connect Wallet</button>
                {renderDialog()}*/}
            {connected && connectedWallet && (
                <UserModal
                    open={isModal}
                    toggleModal={() => setIsModal(!isModal)}
                    connectedWallet={connectedWallet}
                />
            )}
>>>>>>> Stashed changes
        </>
    )
}
