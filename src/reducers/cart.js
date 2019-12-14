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


export default (state = initState, action) => {
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
        default:
            return state
    }
}