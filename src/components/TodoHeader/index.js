import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <div>
            <h1>{props.children}</h1>
            <h3>{props.desc}</h3>
            <h3>{props.x+props.y}</h3>
        </div>
    )
}

//数据类型判断
//npm install --save prop-types
TodoHeader.prototype = {
    desc: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
}

//npm install --save prop-types
TodoHeader.defaultProps = {
    desc: '如果还有明天',
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
}