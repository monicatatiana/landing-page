import React from "react";

//include images into your bundle

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
