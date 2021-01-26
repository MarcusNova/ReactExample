import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'grey' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    //Tambien podemos hacer la eliminacion de los elementos creando una funcion que este pendiente del evento
    //Y de ahi llamamos a la funcion
    //onClick = (e) => {
      //  this.props.deleteTask(this.props.task.id);
    //}
    render() {
        const {task} = this.props;
        return (
            <div style={this.StyleCompleted()}>
                {task.title} - {task.description} - {task.done} - {task.id}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                    x
                </button>
            </div>
        )
    }
}
Task.propTypes = {
    task: PropTypes.object.isRequired
}
//Estilos en linea utilizando objetos JSON, tambien podemos utiliza el estilo clasico de CSS
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task;