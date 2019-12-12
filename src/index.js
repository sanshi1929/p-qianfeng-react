import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import classNames from 'classnames';
import App from './App';

// class App extends Component {
//     render () {
//         const style = { color: '#F00'}
//         return(
//             <div>
//                 <h1>元素中的样式</h1>
//                 <ol>
//                     <li style={style}>use inner style</li>
//                     <li className='has-text-red'>react里要写成className</li>
//                     <li className={classNames('a', {'b':true, 'c':false})}>要动态添加不同的className就可以使用第三方的包叫classNames</li>
//                 </ol>
//             </div>
//         )
        
//     }
// }

//如果想要全局的扩展React.Component的prototype, 比如, 想把ajax的方法全局挂载组件的this上
//引入所有的ajax请求
//import * as services from './services'
//在prototype上挂载一个叫http的东西, 然后就可以在组件内部通过this.http.方法名来执行一些操作
//React.Component.prototype.http = services

render(
    <App />,
    document.querySelector('#root')
)