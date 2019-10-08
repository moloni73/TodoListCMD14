import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
//import TodoItems from "./TodoItems";
import "../../styles/TodoList.css";

export class ControlledImput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			data: []
		};

		this.Submit = this.Submit.bind(this);
		this._remove = this._remove.bind(this);
	}

	Change = e => {
		this.setState({ value: e.target.value });
	};

	Submit = s => {
		s.preventDefault();
		let auxdata = this.state.data;
		this.setState({ data: auxdata.concat(this.state.value) });
	};

	_remove(position) {
		console.log(position);
		let data = this.state.data;

		let newData = [...data.slice(0, position), ...data.slice(position + 1)];

		this.setState({ data: newData });
	}

	render() {
		return (
			<div className="container">
				<nav className="navbar justify-content-center">
					<h3>{"todos"}</h3>
				</nav>
				<div className="input-group mb-3  justify-content-center">
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
				<ul className="list-group">
					{this.state.data.map((item, index) => (
						<li
							className="list-group-item  justify-content-center"
							key={index}>
							<div className="name">
								<span className="item-name">{item}</span>
							</div>
							<button
								className="close"
								onClick={() => this._remove(index)}
								data-dismiss="alert"
								aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
