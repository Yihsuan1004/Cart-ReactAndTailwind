export const ShopItem = (props) =>{
    
   let item = props;
   let { src, name, price } = props;
   const addToCart = props.addToCart;
    return(
        <div className="w-100 p-12 bg-white">
            <img src={src} alt={name}/>
            <h3 className="font-bold text-2xl">{name}</h3>
            <h5 className="font-semibold text-xl my-2">{price}</h5>
            <button className="w-100 h-10 p-2 text-gray-400 hover:bg-gray-200 hover:text-black font-medium w-full"
                    onClick={()=>addToCart(item)}>
                Add to Cart
            </button>
        </div>
    )
}

