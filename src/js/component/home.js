import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

let menu = [
	{
		label: "About",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	},
	{
		label: "Service",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	},
	{
		label: "Contact",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

let menuStar = [
	{
		label: "Start Bootstrap",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

let menuHome = [
	{
		label: "Home",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

const NavBar = props => {
	//I have to loop all the items and convert them into LIs

	const itStar = props.itStar.map(item => (
		<a className="navbar-brand" href={item.url}>
			{item.label}
		</a>
	));

	const itHome = props.itHome.map(item => (
		<li className="nav-item active">
			<a className="nav-link" href={item.url}>
				{item.label}
				<span className="sr-only">(current)</span>
			</a>
		</li>
	));

	const items = props.items.map(item => (
		<li className="nav-item">
			<a className="nav-link" href={item.url}>
				{item.label}
			</a>
		</li>
	));

	//this methods says how the NavBar should look like in HTML
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				{itStar}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						{itHome}
						{items}
					</ul>
				</div>
			</div>
		</nav>
	);
};

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar itStar={menuStar} itHome={menuHome} items={menu} />
			</div>
		);
	}
}
