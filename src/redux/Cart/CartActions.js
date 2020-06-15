import {DISP_CART,CART_DELETE, EDIT_ITEM,UPDATE_ITEM} from './CartActionTypes'

//action creator for dispplaying cart products
export const Dispcart=()=>
{
    return{
        type:DISP_CART
    }
}

export const CartDelete=item=>{
    return{
        type:CART_DELETE,
        payload: item

    }
}

export const EditItem=item=>{
    console.log(item)
    return{
        type:EDIT_ITEM,
        payload:item
    }
}
export const UpdateItem=item=>{
    console.log(item)
    return{
        type:UPDATE_ITEM
        
    }
}

