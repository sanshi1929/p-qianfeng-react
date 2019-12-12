import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,
        onCompeletedChange: PropTypes.func
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return(
                            {/* <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title = {todo.title}
                                completed = {todo.completed}
                            /> */},

                            //不定参数数量式声明
                            <TodoItem
                                onCompeletedChange={this.props.onCompeletedChange}
                                key={todo.id}
                                {...todo}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
