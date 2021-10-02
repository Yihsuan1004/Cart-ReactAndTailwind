import React from 'react'

export const Cart = (props) => {
   const cart = props.cart;
   const removeFromCart =  props.removeFromCart;
   const increaseNum = props.increaseNum;
   const decreaseNum = props.decreaseNum;
   const total = props.total;
    return (
        <div className="mt-20">
            <h5  className="text-4xl">Cart</h5>
             <ul className="w-full">
                {
                    cart.map(item => 
                        <li className="flex justify-center items-center my-1 py-4 bg-white">
                            <div className="font-bold">{item.name}</div>
                            <div className="mx-8 font-bold text-green-600">{item.price}</div>
                            <button className="bg-blue-300 p-2 w-10 h-10 rounded-md" onClick={()=> increaseNum(item)}>+</button>
                            <div className="p-2 w-10 text-center">{item.number}</div>
                            <button className="bg-blue-300 p-2 w-10 h-10  rounded-md" onClick={()=> decreaseNum(item)} >-</button>
                            <button className="bg-red-300 p-2 ml-4 w-20 h-10  rounded-md" onClick={()=> removeFromCart(item)}>刪除</button>
                        </li>
                    )
                }
                <h1 className="text-4xl text-right text-green-600">Total: {total}</h1>
            </ul>
        </div>
    )
}
