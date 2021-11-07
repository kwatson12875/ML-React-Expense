import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance.js'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Expenses } from './components/Expenses';
import { Past } from './components/Past';
import { GlobalProvider } from './context/GlobalState';


import './App.css';

function App() {
  return (
    <GlobalProvider>
	    <div className="container">
	 	   <Header />
	    	<AddTransaction />
	    	<Balance />
	    	<IncomeExpenses />
	    	<TransactionList />
	    	<Expenses />
	    	<Past />
	    </div>
    </GlobalProvider>
  );
}

export default App;
