"use client"
import { useParams } from "next/navigation"
import "./product.css"
import { useDispatch, useSelector } from "react-redux"
import ReduxProvider from "@/component/reduxProvider/reduxProvider"
import { addToBasket } from "@/store/shoeSlice"
import { toast } from "react-toastify"

export default () => {
  return <ReduxProvider>
    <ShoeProduct></ShoeProduct>
  </ReduxProvider>
}

export function ShoeProduct (){
  let dispatch = useDispatch()
  let params = useParams()
  let product = useSelector(function (store) {
    return store.shoeSlice.products[params.pId]
  })
  // product = product.filter((item) =>{
  //   return item.id === params.pId
  // })
    return <>
    <div id="wrapper">
  <div id="container">
    <div id="img-wrap">
          <img src= {product.image} />

    </div>
    <div className="info">
      <h1>{product.name}</h1>
      <h2>Sneaker from NIKE</h2>
      <p>{product.desc}</p>
      <div className="important">
        <p id="pricing">Price</p>

        <h1 id="price">${product.price}</h1>
      </div>
      {/* <div className="form">
        <p id="coloring">Choose color</p>
        <select className="color">
          <option>Peach Pink</option>
          <option>Mint Green</option>
          <option>Seafoam Blue</option>
        </select>
      </div> */}
      <button onClick={ () => {
        toast.success("Product added to Basket ")
        dispatch(addToBasket(product))
      }}>Add to cart</button>
    </div>
  </div>
</div>

    </>
}