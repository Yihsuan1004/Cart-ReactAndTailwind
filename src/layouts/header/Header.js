
export const Header = () =>{

    return(
        <div className="w-full flex justify-end bg-gray-100">
            <ul className="flex align-middle mr-60">
                <li className="p-2 pr-28 py-6">
                    <a href="#" className="hover:underline font-light">HOME</a>

                </li>
                <li className="p-2 pr-28 py-6">
                    <a href="#" className="hover:underline font-light">SHOP</a>
                </li>
                <li className="p-2 pr-28 py-6">
                    <a href="#" className="hover:underline font-light">PRODUCT</a>
                </li>
                <li className="p-2 pr-28 py-6">
                    <a href="#" className="hover:underline font-light">ABOUT US</a>
                </li>
            </ul>
        </div>
    )
}