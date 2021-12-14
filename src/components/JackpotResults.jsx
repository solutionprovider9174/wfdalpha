import React, { useState } from 'react'
import { useStore } from '../store'
import numeral from 'numeral'
import {
    LCDClient,
    MsgExecuteContract,
    StdFee,
    WasmAPI,
    BankAPI,
} from '@terra-money/terra.js'

import { Trophy, ArrowCircleLeft, ArrowCircleRight, NumberCircleTwo, NumberCircleOne, NumberCircleThree, NumberCircleFour, NumberCircleFive, NumberCircleSix, CheckCircle } from 'phosphor-react'
import PriceLoader from './PriceLoader'

export default function JackpotResults() {
    const { state, dispatch } = useStore()

    async function winnerData(type) {
        try {

        } catch (e) {
            console.log(e, 'no found')
        }
    }
    return (
        <div className="container" style={{ marginTop: '7rem' }}>
            <div className="card lota-card">
                <div className="card-header text-center">
                    <div className="card-header-icon">
                        <Trophy size={90} color="#20FF93" />
                    </div>
                    <h3>
                        Project Backed by WeFund
                    </h3>
                    <div className="btn-group w-100">
                        <button
                            className="btn btn-default"
                            disabled={
                                state.historicalJackpotLotteryId == 1
                                    ? true
                                    : false
                            }
                            onClick={() => winnerData('prev')}
                        >
                            <ArrowCircleLeft size={24} />
                        </button>
                        <button
                            className="btn btn-default"
                            disabled={
                                state.historicalJackpotLotteryId == 0 ||
                                state.historicalJackpotLotteryId ==
                                    state.currentLotteryId - 1
                                    ? true
                                    : false
                            }
                            onClick={() => winnerData('current')}
                        >
                            Latest
                        </button>
                        <button
                            className="btn btn-default"
                            disabled={
                                state.historicalJackpotLotteryId == 0 ||
                                state.historicalJackpotLotteryId ==
                                    state.currentLotteryId - 1
                                    ? true
                                    : false
                            }
                            onClick={() => winnerData('next')}
                        >
                            <ArrowCircleRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="w-100 text-center latest-combination">
                        <h4 style={{ color: '#ff36ff' }}>
                            Project backed
                        </h4>                     
                        <p>
                            {state.winningCombination ? (
                                state.winningCombination
                                    .split('')
                                    .map((obj) => {
                                        return <span>{obj}</span>
                                    })
                            ) : (
                                <PriceLoader />
                            )}
                        </p>
                    </div>
                    <h4 className="mt-4">Ranking</h4>
                    <div className="table-responsive">
                        <table className="table text-white mb-3">
                            <thead>
                                <tr>
                                    <th>Ranks</th>
                                    <th>Symbols</th>
                                    <th>Amount Request</th>
                                    <th>Amount Collected</th>
                                    <th>WeFund fee</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
