import React, { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import { LCDClient, WasmAPI } from '@terra-money/terra.js'
import {
    useWallet,
    WalletStatus,
    useConnectedWallet,
    ConnectType,
} from '@terra-money/wallet-provider'
import { Wallet, CaretRight, Power, Check } from 'phosphor-react'
import numeral from 'numeral'
import { useStore } from '../store'



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
        
    }

    async function contactBalance() {
        if (connectedWallet && connectedWallet.walletAddress && lcd) {
            //   setShowConnectOptions(false);
            
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
                    <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </>
        )
    }

    const [scrolled, setScrolled] = React.useState(false)
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 25) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
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
        window.addEventListener('scroll', handleScroll)
    }, [
        connectedWallet,
        lcd,
        state.config,
        state.allRecentWinners,
        state.youWon,
    ])
    
    return (
        <>
            <div className="navbar-nav ms-auto" style={{flexDirection:'row'}}>
                {!connected && (
                    <>
                        <div className="btn-group" style={{width:'185px'}}>
                            <button
                                className="btn btn-green nav-item dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                width="150px"
                                style={{color:'white', backGroundColor:'red', width:'100%', background: 'linear-gradient(180deg, rgba(254, 134, 0, 0.2) 0%, rgba(254, 134, 0, 0) 100%)', 
                                backdropFilter: 'blur(54px)', borderRadius:'30px'}}
                            >
                                Connect Wallet +
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
                    </>
                )}
                {connected && (
                    <>
                        <button
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
                            {bank && (
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
                    </>
                )}
            </div>
        </>
    )
}