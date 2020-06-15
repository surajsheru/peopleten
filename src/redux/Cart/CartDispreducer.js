import {DISP_CART,CART_DELETE,EDIT_ITEM,UPDATE_ITEM} from './CartActionTypes'
import {data} from '../../data/cartdata'
const clist= data.products

const CartProducts={
    orders:clist,
    item:{}
   
}
 const CartDispReducer=(state=CartProducts,action)=>
 {
   switch (action.type) {
       case DISP_CART: return{...state}
           
      case CART_DELETE:
        return{
          ...state,
          orders: state.orders.filter(order=>order.p_id!==action.payload.p_id)
        }
        case EDIT_ITEM:
          console.log(action.payload)
          return{
            ...state,
            item:action.payload
            
          }
          case UPDATE_ITEM:
          
          return{
            ...state,
                      
          }
        
          default:
              return state
           
   }
 }
 export default CartDispReducer