import {createStore} from 'redux'
import CartReducer from './Cart/CartDispreducer'

const store=createStore(CartReducer)
console.log(store.getState())

export  default store
