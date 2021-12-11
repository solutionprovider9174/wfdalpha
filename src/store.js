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

const initialState = {
    allNativeCoins: [],
    wallet: {},
    //managementContractAddress: "terra1g8uaxw608v4kpxhumrcu98csl3fflh0ee93r50",
    managementContractAddress: "terra1luu5pqcz7xvyr5lqx3397wmhnf4rhrmrdngh4d",
    ustBalance: 0,
    projectData: {},
    projectID: 0,
    lcd_client: new LCDClient({
        URL: 'https://bombay-lcd.terra.dev',
        chainID: 'bombay-12',
    }),
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setWallet':
            return {
                ...state,
                wallet: action.message,
            }
        case 'setAllNativeCoins':
            return {
                ...state,
                allNativeCoins: action.message,
            }
        case 'setUstBalance':
            return {
                ...state,
                ustBalance: action.message,
            }
        case 'setManagementContractAddress':
            return{
                ...state,
                managementContractAddress: action.message,
            }
        case 'setProjectData':
            return{
                ...state,
                projectData: action.message,
            }
        case 'setProjectID':
            return{
                ...state,
                projectID: action.message,
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
