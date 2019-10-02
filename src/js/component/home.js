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

let menujumbo = [
	{
		labeld: "A Warm Welcome!",
		labelp:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
		labelb: "Call to action!",
		url:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];

const Jumbot = props => {
	const itemsj = props.itemsj.map(item => (
		<div className="container">
			<h1 className="display-3">{item.labeld}</h1>
			<p className="lead">{item.labelp}</p>
			<a href={item.url} className="btn btn-primary btn-lg">
				{item.labelb}
			</a>
		</div>
	));

	return <header className="jumbotron my-4">{itemsj}</header>;
};

let menucard = [
	{
		labelt: "Card title",
		labelp:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		labelf: "Find Out More!",
		urlc: "http://placehold.it/500x325",
		urlf:
			"https://blackrockdigital.github.io/startbootstrap-heroic-features/#"
	}
];
const Cardt = props => {
	const itemsc = props.itemsc.map(item => (
		<div className="card h-100">
			<img className="card-img-top" src={item.urlc} alt="" />
			<div className="card-body">
				<h4 className="card-title">{item.labelt}</h4>
				<p className="card-text">{item.labelp}</p>
			</div>
			<div className="card-footer">
				<a href={item.urlf} class="btn btn-primary">
					{item.labelf}
				</a>
			</div>
		</div>
	));

	return <div className="col-lg-3 col-md-6 mb-4">{itemsc}</div>;
};

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar itStar={menuStar} itHome={menuHome} items={menu} />
				<Jumbot itemsj={menujumbo} />
				<div class="row text-center">
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
					<Cardt itemsc={menucard} />
				</div>
			</div>
		);
	}
}
