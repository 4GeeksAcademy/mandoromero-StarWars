import React, { useDtate, useEffect } from "react";
import "../../styles/home.css";


 function Home() {

	const [people, setPeople] = useStat([]);
	const [ships, setShips] = useState([]);
	const [loading, setLoading] = useState(true);

useEffect => {
	async function fetchPeople() {
		let res = await fetch('https://swapi.dev/api/people/?format=jason/');
		let data = await res.json();
		setPeople(data.results);
	}

	async function fetchSpaceShips() {
		let res = await fetch('https://swapi.dev/api/spaceships/?format=json/');
		let data = await res.jason();
		setSpaceShips(data.results);	
	}

	fetchPeople();
	fetchSpaceShips();

}, []}

console.log('data', people);
console.log('data', spaceShips);

	return(

	<div className="container">
			Hello World
	</div>
		
	);

	export default Home;
