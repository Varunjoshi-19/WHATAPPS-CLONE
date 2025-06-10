import React , { createContext, useContext, useReducer } from "react";


export const stateContext = createContext();


export const StateProvider = ({ initialState, reducer, children }) => {

    return (
        <stateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </stateContext.Provider>
    );

}

export function useStateContext() {

    const context = useContext(stateContext);
    if (!context) {
        throw new Error("The context is not avaliable or probably null or undefiend");
    }

    return context;

}
