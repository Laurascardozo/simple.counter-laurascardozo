import React from "react";
import { element } from "prop-types";

//create your first component
const Home = ({ counter }) => {
	const stringCounter = `${counter}`.padStart(6, "0");
	const elementsArray = stringCounter.split("");
	elementsArray.map((elemento) => console.log(elemento));
	return (
		<div className="bigCounter">
			<div className="clock"><i class="far fa-clock"></i></div>
			<div className="bodySeconds">
				<h1>{elementsArray.map((item, index) => {
					return <span className="seconds" key={item + index}>{item}</span>
				})}</h1>
			</div>
		</div>
	);
};

export default Home;