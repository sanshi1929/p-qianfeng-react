import actionType from "../actions/actionType";

const initState = [{
    id: 1,
    title: 'Apple',
    price: 20,
    amount: 10
},{
    id: 2,
    title: 'Orange',
    price: 14,
    amount: 18
}]

//创建购物车的reducer, reducer的固定写法是两个参数，第一个就是state并有一个初始值，第二个是action
export default (state = initState, action) => {
    //根据不同的action,type,做不同的处理，每次返回一个新的state,返回的类型要一样
    switch(action.type){
        case actionType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if(item.id === action.payLoad.id){
                    item.amount += 1
                }
                return item
            })
        case actionType.CART_AMOUNT_DECREMENT:
                return state.map(item => {
                    if(item.id === action.payLoad.id){
                        item.amount -= 1
                    }
                    return item
                })
        //一定要有default,当actionType不对的时候，就不做任何处理，返回上一次的state
        default:
            return state
    }
}