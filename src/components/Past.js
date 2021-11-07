import React from 'react';

export const Past = () => {
	return (
		<div>
			<button id="windowWeekBtn" className="btn3">Money spent last week</button>
			<div className="trendDiv">
				<p className="textWhite">Cash spent last week:</p> 
			</div>			
			<div className="windowStyles" id="windowTest"></div>			
			<button id="windowMonthBtn" className="btn3">Money spent last month</button>
			<div className="trendDiv">
				<p className="textWhite">Cash spent last month:</p> 
			</div>			
			<div className="windowStyles" id="windowTest2"></div>			
			<button id="windowYearBtn" className="btn3">Money spent last year</button>
			<div className="trendDiv">
				<p className="textWhite">Cash spent last year:</p> 
			</div>			
			<div className="windowStyles" id="windowTest3"></div>			
		</div>
	)
}