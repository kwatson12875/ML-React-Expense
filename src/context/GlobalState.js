import React, { createContext, useReducer } from 'react';
// initial state
const initialState = {
	transactions: [

	]
}

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
	
return (<GlobalContext.Provider value={{
	}}>
	{ children }
	</GlobalContext.Provider>);

}

