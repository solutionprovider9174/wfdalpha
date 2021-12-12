import React, { Component, Suspense, useContext } from 'react'
import { Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './styles/base.scss'
import { Head } from 'react-static'
import { popper } from '@popperjs/core'

let bootstrap = {}
if (typeof document !== 'undefined') {
    bootstrap = require('bootstrap')
}
import { StoreProvider } from './store'
import AppRouter from 'router'

class App extends Component {
    render() {
        return (
            <Suspense
                fallback={
                    <div className="vh-100 d-flex">
                        <div className="align-self-center w-100 text-center">
                            <img src="logo.png" className="img-fluid mb-4" />
                            <p
                                style={{
                                    color: '#f038f0',
                                    textTransform: 'uppercase',
                                    fontSize: '36px',
                                    fontWeight: '300',
                                    textShadow: '0px 0px 26px #ff36ff',
                                    fontFamily: "'Monoton', cursive",
                                }}
                                className="loading_animation"
                            >
                                Loading...{' '}
                            </p>
                        </div>
                    </div>
                }
            >
                <Root>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                        />
                        <title>
                            WeFund - Decentralized back project on Terra blockchain
                        </title>
                        <link
                            rel="icon"
                            type="image/x-icon"
                            href="https://loterra.io/favicon.ico"
                        />
                        <link
                            data-hid="shortcut-icon"
                            rel="shortcut icon"
                            href="https://loterra.io/favicon.ico"
                        />
                        <meta property="og:title" content="LoTerra" />
                        <meta
                            property="og:image"
                            content="https://loterra.io/loterra.png"
                        />
                        <meta property="og:image:alt" content="LoTerra icon" />
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:site_name"
                            content="WeFund - Back To Project"
                        />
                        <meta
                            property="og:description"
                            content="WeFund is ready!"
                        />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="LoTerra" />
                        <meta
                            name="twitter:title "
                            content="WeFund - Decentralized Back to Project Terra blockchain"
                        />
                        <meta
                            name="twitter:description"
                            content="WeFund is ready!"
                        />
                        <meta
                            name="twitter:image"
                            content="https://loterra.io/loterra.png"
                        />
                        <script
                            src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"
                            async
                        />
                    </Head>
                    <StoreProvider>
                        {/* <Navbar/> */}
                        <AppRouter> 
                        {/* <Navbar/> */}
                        </AppRouter>
                        {/* <Routes default /> */}
                    </StoreProvider>

                    {/*<Footer/>*/}
                </Root>
            </Suspense>
        )
    }
}

export default App
