//createStore是redux提供的一个用于创建store的方法
import { createStore } from 'redux'
//引入全并后的reducer
import rootReducer from './reducers'
//createStore的第一个参数必须是一个reducer,如果是多个，在reducers目录下用combineReducers全并后再导出
export default  createStore(rootReducer)