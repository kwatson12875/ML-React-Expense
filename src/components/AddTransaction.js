import React, { useState } from 'react';

export const AddTransaction = () => {
	return (
		<>
			<h3 className="header2">New Entry</h3>
			<form>
				<div className="form-control">
					<label htmlFor="text">Description</label> 
					<input type="text" id="text" placeholder="What spend on..." />
					<label htmlFor="amount">Amount(+/-) <br /></label> 
					<input type="number" id="amount" placeholder="How much..." /> 
					<label>Category:&#160;&#160;</label>					
					<select name="category" >
						<option value="home">Home</option>
						<option value="food">Food</option>
						<option value="car">Car</option>
					</select>
					<br />
					<label>Date:</label> 
					<input type="text" id="date" placeholder="2021-01-28" />
				</div>
				<button className="btn"> Add Transaction</button>
			</form>
		</>
	)
}