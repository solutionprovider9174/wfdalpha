import React, {
    useEffect,
    useState,
    useCallback,
    useContext,
    useRef,
} from 'react'
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
} from '@terra-money/terra.js'

import { useStore } from '../store'

import Footer from '../components/Footer'
import JackpotResults from '../components/JackpotResults'
import Navbar from '../components/Navbar'

export default () => {
    const [totalBackedMoney, setTotalBackedMoney] = useState(0)
    const [contractBalance, setContractBalance] = useState(0)
    const { state, dispatch } = useStore()
    
    const fetchContractQuery = useCallback(async () => {
        try {
            let terra = state.lcd_client;
            let api = new WasmAPI(terra.apiRequester);

            const projectData = await api.contractQuery(
                state.managementContractAddress,
                {
                    get_all_project: {
                    },
                }
            )
            dispatch({
                type: 'setProjectData',
                message: projectData,
            })

            let i, j
            let totalBacked = 0;
            for(i=0; i<projectData.length; i++){
                for(j=0; j<projectData[i].backer_states.length; j++){
                    totalBacked += parseInt(projectData[i].backer_states[j].amount.amount);
                }
            }
            totalBacked /= 10**6;
            setTotalBackedMoney(totalBacked);
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        console.log("in exploer project - fetchContractQuery");
        fetchContractQuery();
    }, [fetchContractQuery])

    function marketCap() {
        return 0;
    }

    function circulatingSupply() {
        return 0;
    }

    function totalSupply() {
        return 0
    }

    return (
        <>
            <Navbar/>
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
                                {numeral(totalBackedMoney)
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
                            </div>
                        
                    </div>

                    
                </div>
            </div>
            <div className="how">
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
                         <JackpotResults/>
                        <div
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
                                                    <>
                                                        <p>Current WFD price</p>
                                                        <h5>
                                                            {numeral(100).format('0.000')}
                                                            <span>UST</span>
                                                        </h5>
                                                    </>
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
                                                    <>
                                                        <p>Market Cap</p>
                                                        <h5>
                                                            {numeral(marketCap()).format(
                                                                '0,0.00'
                                                            )}
                                                            <span>UST</span>
                                                        </h5>
                                                    </>
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
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}
