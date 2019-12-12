import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleCheckboxChange = () => {
        //this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
        const {
            onCompeletedChange= ()=>{},
            id
        } = this.props
        onCompeletedChange(id)
        
    }
    
    //让状态改变的渲染（点吃饭时，睡觉不应该重新渲染）
    shouldComponentUpdate (nextPage, nextState){
        return nextPage.completed !== this.props.completed
    }

    render() {
        const {
            completed,
            title
        } = this.props
        return (
            <li>
                <input 
                    checked={completed}
                    onChange={this.handleCheckboxChange}
                    type="checkbox"
                />
                {/* <span>{this.props.title} : {this.props.completed?'已完成':'未完成'} </span> */}
                <span>{title} : {this.props.completed?'已完成':'未完成'} </span>
                {/* {this.props.assignee} */}
            </li>
        )
    }
}

//===========================================================================

//PureComponent 吃饭重新渲染时，睡觉不渲染
// import React, { PureComponent } from 'react'

// export default class TodoItem extends PureComponent {
//     handleCheckboxChange = () => {
//         //this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
//         const {
//             onCompeletedChange= ()=>{},
//             id
//         } = this.props
//         onCompeletedChange(id)
        
//     }

//     render() {
//         const {
//             completed,
//             title
//         } = this.props
//         return (
//             <li>
//                 <input 
//                     checked={completed}
//                     onChange={this.handleCheckboxChange}
//                     type="checkbox"
//                 />
//                 {/* <span>{this.props.title} : {this.props.completed?'已完成':'未完成'} </span> */}
//                 <span>{title} : {this.props.completed?'已完成':'未完成'} </span>
//                 {/* {this.props.assignee} */}
//             </li>
//         )
//     }
// }
