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
import { useStore } from '../store'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import {Web3ReactProvider} from "@web3-react/core"
import {useWeb3React} from "@web3-react/core"
import Web3 from 'web3'
import { Web3Provider } from "@ethersproject/providers";
import {MathWalletConnector} from '@harmony-react/mathwallet-connector'
import { useEagerConnect, useInactiveListener } from '../hooks'
const injected = new InjectedConnector({
    supportedChainIds : [1, 3, 4, 5, 42]
})

const mathwallet = new MathWalletConnector({ chainId: [1,2] })
const walletconnect = new WalletConnectConnector({
    supportedChainIds:[1],
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000
  })
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

const DialogButton = {
    margin: '10px 20px 10px 20px',
}
export default function ConnectWallet() {
    let connectedWallet = ''
    const [isDisplayDialog, setIsDisplayDialog] = useState(false)
    const [bank, setBank] = useState()
    const [connected, setConnected] = useState(false)
    const { state, dispatch } = useStore()
    const [userwallet, setUserwallet] = useState("")
    const [loaded, setLoaded] = useState(false)
    function getLibrary(provider){
        const library = new Web3Provider(provider);
        library.pollingInterval = 12000;
        return library;
    }

    function MetaMaskProvider({ children }) {
        const { active: networkActive, error: networkError, activate:activateNetwork } = useWeb3React()
    
            useEffect(() => {
                injected
                .isAuthorized()
                .then((isAuthorized) => {
                  setLoaded(true)
                  if (isAuthorized && !networkActive && !networkError) {
                    //   console.log(isAuthorized)
                    //   console.log(networkActive)
                    //   console.log(networkError)
                    activateNetwork(injected)
                  }
                })
                .catch(() => {
                  setLoaded(true)
                })
            }, [activateNetwork, networkActive, networkError])
            
    
            if (loaded) {
              return children
            }
            return <>Loading</>
          }
    //Nav link active settings

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


    async function contactBalance() {
        if (connectedWallet && connectedWallet.walletAddress && lcd) {
            //   setShowConnectOptions(false);
            dispatch({ type: 'setWallet', message: connectedWallet })

            let coins
            try {
                const api = new WasmAPI(lcd.apiRequester)
                coins = await lcd.bank.balance(connectedWallet.walletAddress)
            } catch (e) {
                console.log(e)
            }


            //Store coins global state
            dispatch({ type: 'setAllNativeCoins', message: coins })
            console.log(coins)
            let uusd = coins.filter((c) => {
                return c.denom === 'uusd'
            })
            let ust = parseInt(uusd) / 1000000
            setBank(numeral(ust).format('0,0.00'))
            dispatch({ type: 'setUstBalance', message: ust })
            // connectTo("extension")
        } else {
            setBank(null)
            dispatch({ type: 'setWallet', message: {} })
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
                {bank ? (
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
                    <div className="spinner-border spinner-border-sm" role="status">
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

    useEffect(() => {
        // if (!state.config.lottery_counter) {
            // baseData()
        // }
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


    const ConnectWallet = () =>{
        const connectorsByName={
            // MathWallet: mathwallet, 
            MetaMask : injected,
            WalletConnect : walletconnect,
        }

        const context = useWeb3React()
        const {active, account, library, connector, activate, deactivate, error} = context
        const [activatingConnector, setActivatingConnector] = React.useState()
        useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
            }
        }, [activatingConnector, connector])

          // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
        const triedEager = useEagerConnect()

        // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
        useInactiveListener(!!activatingConnector)

        const [hoveredConnectorButtons, setHoveredConnectorButtons] = React.useState(new Map());
        const updateHoveredConnectorButtons = (k,v) => {
            setHoveredConnectorButtons(new Map(hoveredConnectorButtons.set(k,v)))
          }
        
        // var connectorsByName = {MathWallet: MathWalletConnector, Injected:InjectedConnector}
        const onConnectionClicked = (currentConnector, name, setActivatingConnector, activate) => {
        setActivatingConnector(currentConnector);
        
        activate(connectorsByName[name])
        alert(name +" : "+account)
        }

        const onDeactivateClicked = (deactivate, connector) => {
            if (deactivate) {
              deactivate()
            }
            if (connector && connector.close) {
              connector.close()
            }
          }
          console.log(!triedEager, !!activatingConnector, connected, !!error)
        return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {Object.keys(connectorsByName).map(name => {
                const currentConnector = connectorsByName[name];
                const activating = currentConnector === activatingConnector;
                const connected = (currentConnector === connector);
                const disabled = !!activatingConnector || connected || !!error;
                const hovered = hoveredConnectorButtons.get(name);
                const dotColor = (connected && !hovered) ? '#4caf50' : '#FF0000';
                var display = (hovered && connected) ? 'Disconnect' : name;

                return (
                <div key={name} style={{ width: '252px'}}>
                    <button 
                    // onMouseEnter={() => updateHoveredConnectorButtons(name, true) }
                    // onMouseLeave={() => updateHoveredConnectorButtons(name, false) }
                    onClick={() => {
                        // connected ? onDeactivateClicked(deactivate, currentConnector) : onConnectionClicked(currentConnector, name, setActivatingConnector, activate)
                        onConnectionClicked(currentConnector, name, setActivatingConnector, activate)
                    }}
                    disabled={ disabled }
                    className="dropdown-item"
                    style={{display:'flex', flexDirection:'row', alignItems:'center', borderColor: activating ? 'orange' : connected ? 'green' : 'unset',}}
                    >
                        <CaretRight
                            size={16}
                        />{' '}
                        { display }

                    {/* { (!activating && !connected) && <img style={
                        {
                        position: 'absolute',
                        right: '20px',
                        width: '30px',
                        height: '30px'
                        }
                    }  alt=""/> } */}
                    {/* { activating && <CircularProgress size={ 15 } style={{marginRight: '10px'}} /> } */}
                    { (!activating && connected) && <div style={{ background: dotColor, borderRadius: '10px', width: '10px', height: '10px', marginRight: '10px' }}></div> }
                    </button>
                </div>
                )
            }) }

            <div style={{ width: '252px'}}>
                <button 
                onClick={() => { onDeactivateClicked(deactivate, connector); }}
                className="dropdown-item"
                style={{display:'flex', flexDirection:'row', alignItems:'center'}}
            >
                <CaretRight
                    size={16}
                />{' '}
                    Deactivate
                </button>
            </div>
            </div>
        )

    }
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
                                <>
                                    <Web3ReactProvider getLibrary={getLibrary}>
                                        <MetaMaskProvider>
                                        {/* <MathWalletProvider> */}
                                            <ConnectWallet />
                                        {/* </MathWalletProvider> */}
                                        </MetaMaskProvider>
                                    </Web3ReactProvider>
                                </>
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
