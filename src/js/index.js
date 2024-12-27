import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import PropTypes from "prop-types"


export const SecondsCounter = (props) => {
    return(
		<div className="counter rounded d-flex justify-content-center">
			<div className="clock mx-4"><i className="fa-regular fa-clock"></i></div>
			<div className="first">{props.firstDigit %10}</div>
			<div className="second mx-4">{props.secondDigit %10}</div>
			<div className="third">{props.thirdDigit %10}</div>
			<div className="fourth mx-4">{props.fourthDigit %10}</div>
			<div className="fifth">{props.fifthDigit %10}</div>
			<div className="sixth mx-4">{props.sixthDigit %10}</div>
		</div>
    )
}
SecondsCounter.propTypes = {
    firsDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firsDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
};

let counter = 0;
setInterval(() => {
   const first = Math.floor(counter/100000);
   const second = Math.floor(counter/10000);
   const third = Math.floor(counter/1000);
   const fourth = Math.floor(counter/100);
   const fifth = Math.floor(counter/10);
   const sixth = Math.floor(counter/1);
   console.log (first,second, third, fourth, fifth ,sixth)

   counter ++;
   
   ReactDOM.render(<SecondsCounter firstDigit = {first} secondDigit={second} thirdDigit = {third} fourthDigit= {fourth} fifthDigit = {fifth} sixthDigit = {sixth} />,
    document.querySelector("#app"));

}, 1000);