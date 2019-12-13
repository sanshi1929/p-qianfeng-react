import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';

const Counter = () => {
    //coutn相当于class中state, setCount相当于class中setState
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('abc')
    //useEffect的参数是一个回调，不管是组件挂载还是更像，都会触发这个回调方法，类似于compomentDidMount和componentDidUpdate的结合
    useEffect(() => {
        console.log('update')
    })
    return (
        <div>
            <p>{title}</p>
            <button onClick={() => {setCount(count - 1)}}>-</button>
            <button>{count}</button>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
    )
}
render(
    <Counter/>,
    document.querySelector('#root')
)
