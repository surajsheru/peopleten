//import {Modal,Button,Row,Col,Form} from 'react-bootstrap'
import {Dispcart,CartDelete,EditItem,UpdateItem} from '../../redux/Cart/CartActions'
import React,{useState} from 'react'
import {connect} from 'react-redux'
import {Modal,Container,Row,Col,Image,Button,Form,Dropdown,DropdownButton,ButtonGroup, FormControl} from 'react-bootstrap'
import { isCompositeComponent } from 'react-dom/test-utils'
import  t1 from './images/T1.jpg'
import  t2 from './images/T2.jpg'
import  t3 from './images/T3.jpg'
import  t4 from './images/T4.jpg'
function Myedititem(props) 
{  const clist=props.orders
  const item=props.item
  console.log(item)
  console.log(clist)
  let price;
   const ChangeItem=(e)=>{
    console.log(item)
    
    }
const[pcolor,setPcolor]=useState(item.p_selected_color?.name)
const[psize,setPsize]=useState('')
const[qty,setQty]=useState('')
   return (
     <Modal
       {...props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
           Edit ITEM
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>

  <Container>
    <Row>
      <Col>
        <h3 className="text-uppercase text-center">{item.p_name}</h3>
        <h4 className="text-uppercase text-center"><del>{item.p_originalprice!==item.p_price? item.p_originalprice:  ""}</del><br/>
           {item.c_currency} { price=(item.p_originalprice===item.p_price? item.p_originalprice: item.p_price  )}</h4>
           <h6 className="text-uppercase text-center">{item.p_style}</h6>
           <h6 className="text-uppercase text-center">SELECTED COLOR:{item.p_selected_color?.name}</h6>
           <h6 className="text-uppercase text-center ">CHANGED COLOR:{pcolor}</h6>  
           {item.p_selected_color?.name==pcolor}    
           
       <div className="  text-center">  
          
          <ButtonGroup aria-label="Basic example" >
                 
  <Button variant="secondary" onClick={()=>{setPcolor(item.p_available_options?.colors[0]?.name)}}>{item.p_available_options?.colors[0]?.name}</Button>
  <Button variant="secondary" onClick={()=>{setPcolor(item.p_available_options?.colors[1]?.name)}}>{item.p_available_options?.colors[1]?.name}</Button>
  <Button variant="secondary" onClick={()=>{setPcolor(item.p_available_options?.colors[2]?.name)}}>{item.p_available_options?.colors[2]?.name}</Button> 
     </ButtonGroup></div>
     <div className="text-center">
     <h5 className="text-uppercase text-center ">SELECTED SIZE:<h6 className="text-danger">{item.p_selected_size?.code}</h6></h5>        
     <select onClick={(e)=>{setPsize(e.target.value)}}>
      { item.p_available_options?.sizes.map(size=><option key={Math.floor((Math.random() * 50) )} value={size?.code}>{size?.name}</option>)}
      </select>
    <h5 className="text-uppercase text-center ">CHANGED SIZE:>{psize}</h5>
    {item.p_selected_size?.code==psize}
    
    <FormControl variant="primary" type="text"  placeholder="Change the Quantity" onChange={(e)=>{setQty(e.target.value)}}/>
{item?.p_quantity=={qty}}
</div>
<div className="text-center"><Button  size="lg" variant="primary" onClick={(e)=>ChangeItem}>EDIT</Button></div>
     {console.log({pcolor})}
     {console.log({psize})}
     {console.log({qty})}
     {console.log(item.p_available_options?.sizes)}

      </Col>
      <Col>

      {<Image src={item.p_id==='1'?t1 :item.p_id==='2'?t2:
           item.p_id==='3'?t3:t4} alt="product" width='300px' height='400px'/>}

      </Col>
    </Row>
  </Container>



       </Modal.Body>
       <Modal.Footer>
         <Button variant="primary" onClick={props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
   );
 }



 
const mapStateToProps=state=>{
  return{orders:state.orders,
         item:state.item}
}

const mapDispatchToProps=dispatch=>{
  return{
      update:dispatch(UpdateItem())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Myedititem)
