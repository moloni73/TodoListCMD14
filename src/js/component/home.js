import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

export class ControlledImput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			data: []
		};
	}

	Change = e => {
		this.setState({ value: e.target.value });
	};

	Submit = s => {
		s.preventDefault();
		let auxdata = this.state.data;
		this.setState({ data: auxdata.concat(this.state.value) });
		console.log("textArray " + this.state.value);
	};

	render() {
		return (
			<div className="container">
				<nav className="navbar" align-items-center>
					<h3>{"todos"}</h3>
				</nav>
				<div className="input-group mb-3">
					<form onSubmit={this.Submit}>
						<input
							type="text"
							className="form-control"
							placeholder="No tasks, add a task"
							onChange={this.Change}
							value={this.state.value}
						/>
					</form>
				</div>
				<br />
				<ul className="todo-list">
					{this.state.data.map((item, index) => (
						<li key={index}>
							<div className="name">
								<span className="item-name">{item}</span>
							</div>
							<button className="remove">
								<i className="material-icons">close</i>
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

/*<ul className="list-group">

                	<li className="list-group-item">
						{this.state.value}
						<button
							type="button"
							className="close"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</li>
				</ul>




*/
