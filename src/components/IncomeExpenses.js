import React from 'react';

export const IncomeExpenses = () => {
	return (
		<div className="cal">
			<div className="flow">
				<h4 className="calText">Expense</h4>
				<p className="expense">$0.00</p>
			</div>
			<div className="flow">
				<h4 className="calText">Income</h4>
				<p className="income">$0.00</p>
			</div>
		</div>
	)
}