import React, { Component } from 'react'
 import {data} from '../../data/cartdata'
const clist= data.products

class Cartcomp extends Component {

    render() {
        return (
            <div>
               <table className="table table-light"> 
               <tbody>
  <tr className="table-primary"><th colSpan="2"></th><th>SIZE</th><th>QUANTITY</th><th>PRICE</th></tr>
  { clist.map(product=><tr key={product.p_id}><td><img src={product.p_image} alt="product"/></td><td>
        {product.p_name}<br/>
         STYLE:{product.p_style}<br/>
         COLOR:{product.p_selected_color.name}<br/>
         <button type="button" className="btn btn-link btn-sm">EDIT</button>|
         <button type="button" className="btn btn-link btn-sm">X REMOVE</button>|
         <button type="button" className="btn btn-link btn-sm">SAVE FOR LATER</button></td>
         <td>{product.p_selected_size.name}</td>
         <td><input type="text" width='20px' ></input></td>
         <td>{product.c_currency}{product.p_originalprice}{(product.p_originalprice===product.p_price? "": product.p_price)}</td></tr>)}
         <tr>  <td colSpan='2'></td> <td>ENTER PROMOCODEOR GIFT CARD</td><td></td><td colSpan="2"><input type="text"></input><button className="btn btn-primary btn-sm">APPLY</button></td><hr/></tr>
        <tr>  <td colSpan='2'></td> <td>SUB TOTAL</td><td></td><td colSpan="2">Subtyotal1</td></tr>
        <tr>  <td colSpan='2'></td> <td> PROMOCODE APPLIED</td><td></td><td colSpan="2">code</td></tr>
        <tr>  <td colSpan='2'></td> <td>ESTIMATED SHIPPING</td><td></td><td colSpan="2">FREE<hr/></td></tr>

        <tr>  <td colSpan='2'></td> <td>ESTIMATED TOTAL</td><td></td><td colSpan="2">total<hr/></td></tr>
        </tbody>
         </table>
   
            </div>
        )
    }
}

export default Cartcomp
