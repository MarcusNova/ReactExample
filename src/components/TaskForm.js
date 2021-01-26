import React, { Component } from 'react';
import Task from './Task';

export default class TaskForm extends Component {
    //Evitar que haga un reload de la pagina
    state = {
        title: '',
        description: ''
    }
    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Write a task"
                    onChange={this.onChange}/>
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder="Write a description"
                    onChange={this.onChange}
                    value={this.state.description} />
                <input type="submit" />
            </form>
        )
    }
}
// Asi tambien se puede exportar export default TaskForm