import React, { Component, Fragment } from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}from './components';
import {getTodos} from './services';

export default class App extends Component {
    //state 声明方式一
    // state = {
    //     title: '待办事列表'
    // }

    //state 声明方式二
    constructor(){
        super();
        this.state = {
            title: '待办事列表',
            todos:[{
                id:1,
                title: 'eat',
                assignee: 'Leo',
                completed: true
            },
            {
                id:2,
                title: 'sleep',
                assignee: 'XiaoMing',
                completed: false
            }],
            isLoading:false
        }
    }

    getData = () => {
        this.setState({
            isLoading:true
        })
        getTodos().then(resp => {
            console.log(resp)
            if(resp.status === 200){
                // setTimeout(() => {
                //     this.setState({
                //         todos: resp.data
                //     })
                // },5000)
                this.setState({
                    todos: resp.data
                })
                
            }else{
                
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading:false
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    addTodo = (todoTitle) => {
        console.log(todoTitle)
        //push返回的是数组长度
        // this.setState({
        //         todos:this.state.todos.push({
        //             id: Math.random(),
        //             title: todoTitle,
        //             assignee:'',
        //             completed: false
        //         })
        //     )}

        this.setState({
            todos:this.state.todos.concat({
                id: Math.random(),
                title: todoTitle,
                assignee:'',
                completed: false
            })
        })

        // const newTodos = this.state.todos.slice()
        // //const newTodos = [...this.state.todos]
        // newTodos.push({
        //     todos:this.state.todos.concat({
        //         id: Math.random(),
        //         title: todoTitle,
        //         assignee:'',
        //         completed: false
        //     })
        // })

        // this.setState({
        //     todos:newTodos
        // })
    }

    onCompeletedChange = (id) => {
        console.log('onCompletedChange', id)
        this.setState((prevState) => {
            return{
                todos:prevState.todos.map(todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <TodoHeader desc={'明天过后'} x={1} y={2}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput addTodo={this.addTodo} btnText='ADD'/>
                {
                    this.state.isLoading ?
                    <div>loading...</div>:
                    <TodoList 
                    todos={this.state.todos}
                    onCompeletedChange={this.onCompeletedChange}
                />
                }
                <Like/>
            </Fragment>
        )
    }
}
