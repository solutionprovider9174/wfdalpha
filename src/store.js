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
    // managementContractAddress: "terra127ltw72x9xqgl5dru9xmd6sw6svapmvym9aywh",
    managementContractAddress: "terra1rsay5wpkr73ht5c8sp3eu0kuy49jerq0cz7wk8",
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
            console.log("Set Project ID to Store with coming here");
            console.log(action.message);            
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
