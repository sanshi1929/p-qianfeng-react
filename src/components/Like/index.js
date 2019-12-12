import React, { Component } from 'react'

export default class Like extends Component {
    constructor () {
        super ()
        this.state = {
            isLiked:false
        }
    }
    handleLikedClick = () => {
        //修改sate数据用setState
        this.setState((prevState) => {
            //(2)
            console.log('seteState内部的this.state.isLike:', this.state.isLiked)
            //isLiked: !this.state.isLiked
            return {
                isLiked: !prevState.isLiked
            }
            
        }, () => {
            //由于setState是异步的， 如果想要获取最新的state， 应该在这个回调里来获取
            // 先执行栈中的同步任务
            // 异步任务（回调函数）放入任务列队中
            // 执行完同步，读取异步
            //(3)
            console.log(this.state.isLiked)
        })
        //异步执行
        //(1)
        console.log('seteState外部的this.state.isLike:', this.state.isLiked)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                    {
                        this.state.isLiked ? '取消 ❤️' : '喜欢 🖤'
                    }
                </span>
            </div>
        )
    }
}
