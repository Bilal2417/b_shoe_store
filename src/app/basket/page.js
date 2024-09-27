"use client"
import { useDispatch, useSelector } from "react-redux"
import "./basket.css"
import ReduxProvider from "@/component/reduxProvider/reduxProvider"
import { removeFromCart , increaseQty , decreaseQty } from "@/store/shoeSlice"


export default () =>{
    return <ReduxProvider>
        <Cart></Cart>
    </ReduxProvider>
}

export function Cart (){
  let dispatch = useDispatch()
    let products = useSelector( function (store){
        return store.shoeSlice.cart
    })
    let total = 0;

    products.forEach(function(item){
            total += item.price * item.qty; 
    })
    return <>
  {products.length ? <table style={ {width:'100%'} }>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((productItem)=>{
                        return <tr className="table-height">
                            <td><img width={140} src={productItem.image} /></td>
                            <td>{productItem.name}</td>
                            <td>${productItem.price}</td>
                            <td>{productItem.qty}</td>
                            <td>${ Math.round(productItem.price * productItem.qty)}</td>
                            <td>
                                
                                <button className="btn-func" onClick={()=>{
                                    dispatch( increaseQty(productItem.id) ) 
                                }}>+</button>
                                
                                <button className="btn-func" onClick={()=>{
                                    dispatch( decreaseQty(productItem.id) ) 
                                }}>-</button>


                            </td>
                            <td>
                                <button className="btn-cross" onClick={()=>{

                                dispatch( removeFromCart(productItem.id) )

                                }}>X</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            <tfoot>
                <tr  className="table-height">
                    <td></td>
                    <th>
                        <h4>
                            Total Bill
                        </h4>
                        </th>
                    <th>
                        <h4>
                            ${ Math.round(total)}
                        </h4>
                        </th>
                </tr>
            </tfoot>
        </table> : <h1><strong>Cart is empty!!!</strong></h1>}

</>

}