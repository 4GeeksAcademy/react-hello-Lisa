import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Welcome from "./welcome.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Header/>
		<Welcome />
		<Card/>
		<Footer/>
		</>
		
	);
};



export default Home;

