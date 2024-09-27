import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

export let shoeSlice = createSlice({
    name : "shoeSlice",
    initialState : {
        products : [
 {
    name : "NIKE AIR MAX PREMIUM",
    price : 150 ,
    image : 'https://bit.ly/2lTBReR' ,
    color : "product--red",
    id : 0 ,
    qty : 1,
    desc : " The Nike Air Max Premium boasts a sleek design with premium materials and visible Air cushioning for superior comfort, perfect for a stylish yet relaxed look."
},
{
    name : "NIKE AIR MAX ESSENTIAL",
    price : 170 ,
    image : 'https://bit.ly/2kRrQxP',
    color : "product--black",
    id : 1,
    qty : 1,
    desc : "The Nike Air Max Essential combines iconic style with visible Air cushioning for ultimate comfort and support, perfect for everyday wear."

},
{
    name : "NIKE AIR MAX 90",
    price : 125 ,
    image : 'https://bit.ly/2kRsdIN',
    color : "product--blue",
    id : 2,
    qty : 1,
    desc : "The Nike Air Max 90 features a classic silhouette with visible Air cushioning for enhanced comfort and support, making it a stylish choice for any occasion."
 }
        ],
        cart : []
    },
    reducers : {
        addShoe : ( oldData , newData) =>{
            oldData.products.push(newData.payload)
        },
        addToBasket : ( oldData , newData )=> {
          
            if(oldData.cart.length){

                let product = oldData.cart.find((item) =>{
                    if(item.id == newData.payload.id){
                        return true
                    }
                }) 

                    if(product){
product.qty++
                    }
                    else{
                        oldData.cart.push(newData.payload)
                    }
            }
            else{
                oldData.cart.push(newData.payload)
            }

        },
increaseQty : ( oldData , newData ) => {
    let product = oldData.cart.find((item) =>{
        return item.id == newData.payload
    })
    product.qty++;
},
decreaseQty : ( oldData , newData ) => {
    let product = oldData.cart.find((item) =>{
        return item.id == newData.payload
    })
    if(product.qty > 0){
        product.qty--;
    }
    else{
        toast.error("Already at minimum value")
    }
},

removeFromCart : ( oldData , newData ) => {
oldData.cart = oldData.cart.filter(function(cartItem){
    return cartItem.id !== newData.payload
})
}

    }

})

export const { addShoe , addToBasket , increaseQty , decreaseQty , removeFromCart } = shoeSlice.actions