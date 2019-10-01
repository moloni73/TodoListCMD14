import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let menu = [
	{ label: "Home", url: "/home" },
	{ label: "Contact Us", url: "/contact-us" }
];

const NavBar = props => {
	//I have to loop all the items and convert them into LIs
	const items = props.items.map(item => (
		<li class="nav-item">
			<a class="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	//this methods says how the NavBar should look like in HTML
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				{/* here I pass the logo url to the navbar image */}
				<img src={props.logo} />
			</a>
			{/* here I pass the array of LIs into the UL */}
			<ul class="navbar-nav mr-auto">{items}</ul>
		</nav>
	);
};

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar
					items={menu}
					logo="http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks"
				/>
				<div className="text-center mt-5">
					<h1>Hello Carlos! I hope you see the project working</h1>
					<p>
						<img src={rigoImage} />
					</p>
					<a href="#" className="btn btn-success">
						If you see this green button... bootstrap is working
					</a>
					<p>
						Made by{" "}
						<a href="http://www.4geeksacademy.com">
							4Geeks Academy
						</a>
						, with love!
					</p>
				</div>
			</div>
		);
	}
}
