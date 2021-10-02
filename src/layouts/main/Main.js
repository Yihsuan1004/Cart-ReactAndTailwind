import React, {useState, useEffect,} from 'react'
import { ShopItem }  from '../../components/ShopItem';
import { inventoryData } from '../../assets/data';
import { Cart } from '../../components/Cart';
import  banner  from '../../assets/banner.jpg';
export const Main = () => {

    const [cart, setCart] = useState([]);
    const [total ,setTotal] = useState(0);
    useEffect(() => {
        console.log(cart,'Cart Content');
        calculateTotal();
    });

    
    const addToCart = (item) =>{
        if(cart.length > 0 && cart.find(ele => ele.name === item.name)){
            let duplicate = cart.find(ele => ele.name === item.name);
            let duplicateIndex =  cart.findIndex(ele => ele.name === item.name);
            let duplicateNum = duplicate.number;
            duplicateNum++
            let copy = Object.assign({},item)
            copy['number'] = duplicateNum;
            cart.splice(duplicateIndex,1,copy);
            setCart([...cart]);
        }
        else{
            setCart([...cart,item]);
        }
    }

    const removeFromCart = (item) =>{
        let deletArr = cart.filter(el => el !== item);
        setCart(deletArr);
    }

    const increaseNum = (item) =>{
     let num = cart.map((i) =>{
          let new_i = Object.assign({},i);
          if(item.name === i.name){
            new_i.number++
          }
          return new_i
      })
      setCart(num);
    }

    const decreaseNum = (item) =>{
        let num = cart.find(ele => ele.name === item.name).number;
        if(num === 1){
            removeFromCart(item);
            return
        }
        else{
            let numArr = cart.map((i) =>{
                let new_i = Object.assign({},i);
                if(item.name === i.name){
                    new_i.number--
                }
                return new_i
            })
            setCart(numArr);
        }
    }

    const calculateTotal = () =>{
        let calTotal = 0;
        cart.forEach((item) =>{
            calTotal += item.price * item.number;
        })
        setTotal(calTotal);
    }

    return (
        <div className="bg-gray-100 p-32 pt-16">
            <div className="relative">
                <img className="w-full" src={banner} alt="banner"/>
                <div className=" bg-gray-600  p-6 my-2 absolute bottom-10 right-6 opacity-75">
                    <h1 className="font-bold bg-gray-600 text-5xl text-white">A world of Inspiration for your home</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {
                inventoryData.map(item =>
                    <ShopItem src={item.img} 
                              name={item.name} 
                              price={item.price}
                              key={item.name} 
                              number={1}
                              addToCart={addToCart}
                    />
                )
            }
            </div>
            <Cart cart={cart} 
                  total={total}
                  decreaseNum={decreaseNum}
                  increaseNum={increaseNum}
                  removeFromCart={removeFromCart}/>
        </div>
    )
}
