import React,{useState} from 'react'
import{connect} from 'react-redux'
import {Dispcart,CartDelete,EditItem} from '../../redux/Cart/CartActions'
import Myedititem from './Content'
import{Button,ButtonToolbar,Image,Row,Col,Container,FormControl,Modal} from 'react-bootstrap'
import  t1 from './images/T1.jpg'
import  t2 from './images/T2.jpg'
import  t3 from './images/T3.jpg'
import  t4 from './images/T4.jpg'
import { render } from '@testing-library/react';
let prod;

////CART ELEMENTS
function Cartcontainer(props) {
    const clist=props.orders
     console.log(clist)
    let sum=0,price=0,path='',q=1,aj10=5.9;
    const [modalShow, setModalShow] = React.useState(false);
    const[item,setItem]=React.useState({});
    //const [qty,setQty]=useState('1')
     const edit=(item)=>{
         console.log(item)
        let pro=props.Edit(item)
        prod=pro.payload
       console.log(pro.payload.p_id)
       setModalShow(true)
     }
     
    return (
        <>
            <Container>
            <Row  >
  <Col >PRODUCT </Col>
  <Col sm={6}>ITEM DETAILS</Col>
  <Col >SIZE</Col>
  <Col >QUENTITY</Col>
  <Col >PRISE</Col>
</Row>
<hr/>
           
  { 
      clist.map(product=>  {  return(<Row  key={product.p_id}> 
      <Col  >
          <Image src={product.p_id==='1'?t1 :product.p_id==='2'?t2:
           product.p_id==='3'?t3:t4} alt="product" width='100px' height='100px'/></Col>
        <Col sm={6}>{product.p_name}<br/>
         STYLE:{product.p_style}<br/>
         COLOR:{product.p_selected_color.name}<br/>
         {/* <Button variant="link"  size="sm" onClick={() => edit(product)}> EDIT </Button> */}
         <Button variant="link"  size="sm" onClick={() => edit(product)}> EDIT </Button>|
         <Button variant="link"  size="sm"   onClick={()=>props.DeleteItem(product)}>X REMOVE</Button>|
         <Button variant="link"  size="sm" >SAVE FOR LATER</Button><hr/></Col>
         <Col>{product.p_selected_size.code}</Col>
         <Col> <FormControl as='input' id={product.p_id} value={product.p_quantity} /></Col>
         <Col><del>{product.p_originalprice!==product.p_price? product.p_originalprice:  ""}</del><br/>
           {product.c_currency} { price=(product.p_originalprice===product.p_price? product.p_originalprice: product.p_price  )}</Col>
          {console.log(sum=sum+price*q)}
              
         </Row>
         
          )})
          }
          <hr/>
          {<Myedititem  show={modalShow} onHide={() => setModalShow(false)}
      />}
          <Row><Col></Col>
          <Col>ENTER PROMOCODEOR GIFT CARD</Col><Col xs={5}><FormControl/><Button variant='info' size="sm" >APPLY</Button><hr/></Col>
          </Row>
          <Row><Col></Col>
          <Col>SUB TOTAL</Col><Col><h4>{sum}</h4></Col></Row>
          <Row><Col></Col>
          <Col>PROMOTIONAL CODE AJ10 APPLIED</Col><Col><h4>{aj10}</h4></Col></Row>
          <Row><Col></Col>
          <Col>ESTIMATED SHIPPING</Col><Col><h4>FREE</h4></Col><hr/></Row>
          <Row><Col></Col>
          <Col>ESTIMATED TOTAL<br/><span>tax will be applied during checkout</span></Col><Col><h4>{sum-aj10}</h4></Col></Row>
          
          </Container>
        </>
    )
}


const mapStateToProps=state=>{
    return{orders:state.orders}
}

const mapDispatchToProps=dispatch=>{
    return{
        Dispcart:()=>dispatch(Dispcart()),
        DeleteItem:item=>dispatch(CartDelete(item)),
        Edit:item=>dispatch(EditItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Cartcontainer)