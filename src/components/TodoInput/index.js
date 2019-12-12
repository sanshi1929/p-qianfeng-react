//react 通过调用ref获取组件或者dom元素
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    //数据类型判断
    //npm install --save prop-types
    static propTypes = {
        btnText:PropTypes.string
    }
    //默认值
    static defaultProps = {
        btnText: '添加'
    }

    //设置state
    constructor(){
        super()
        this.state = {
            inputValue:''
        }
        //this.handleAddClick = this.handleAddClick.bind(this)

        this.inputDom = createRef()
    }
    //获取输入框的值，并显示（转了state一圈后的）。
    handleInputChange = (e) => {
        //console.log(e.currentTarget.value)
        this.setState({
            inputValue: e.currentTarget.value
        })
        
    }
    //按回车 -> 点击确认功能
    handleKeyUp = (e) => {
        if(e.keyCode === 13){
            this.handleAddClick()
        }
    }
    handleAddClick = (e) => {
        console.log(this.state)

        if(this.state.inputValue === ''){
            return
        }

        //给App.js 传下来的addTodo的参数todoTitle一个实参
        this.props.addTodo(this.state.inputValue)

        this.setState({
            inputValue:''
        },() => {
            //inputDom=createRef()
            this.inputDom.current.focus()
        })
    }
    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        )
    }
}
