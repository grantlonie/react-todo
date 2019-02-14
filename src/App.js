import React, { Component } from 'react'
import _ from 'lodash'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: ['pizza', 'sausage'],
			value: '',
			filterValue: '',
		}
	}

	addTodo() {
		const todos = [...this.state.todos]
		todos.push(this.state.value)
		this.setState({
			todos,
			value: '',
			filterValue: '',
		})
	}

	changeInputVal(e) {
		this.setState({ value: e.target.value })
	}

	deleteTodo(todo) {
		const todos = [...this.state.todos].filter(arrayTodo => todo !== arrayTodo)
		this.setState({ todos })
	}

	changeFilterValue(e) {
		this.setState({ filterValue: e.target.value })
	}

	render() {
		const todos = this.state.todos.filter(todo => todo.indexOf(this.state.filterValue) > -1)

		return (
			<div>
				Filter
				<input
					type="input"
					value={this.state.filterValue}
					onChange={this.changeFilterValue.bind(this)}
				/>
				<br />
				<br />
				<input type="input" value={this.state.value} onChange={this.changeInputVal.bind(this)} />
				<button onClick={this.addTodo.bind(this)}>Add to do</button>
				<Todos todos={todos} deleteTodo={this.deleteTodo.bind(this)} />
			</div>
		)
	}
}

function Todos(props) {
	return (
		<div>
			{props.todos.map(todo => (
				<Todo val={todo} deleteTodo={props.deleteTodo} key={_.random}/>
			))}
		</div>
	)
}

function Todo(props) {
	return (
		<div>
			<button onClick={() => props.deleteTodo(props.val)}>Done</button>
			{props.val}
		</div>
	)
}

export default App
