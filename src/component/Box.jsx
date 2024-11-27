import React from "react";
import { useState} from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
// import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Boxes({id,image,title,price,existent}) {
        // const [boxId,setBoxId] = useState(null)
        
        // const handelBoxClick = async (boxId)=>{
        //     const fetchBoxId = await fetch(`http://localhost:3000/products/${boxId}`)
        //     const dataBoxIdJson = await fetchBoxId.json()
        //     setBoxId(dataBoxIdJson)
        //     console.log(boxId);
        // }
        
              


        return (  
            <>  
                <div className="bg-white rounded-xl">
                    <div className="py-1 px-3 space-y-3">
                        <div className="flex items-center justify-center">
                            <img className="h-[180px]" src={image} alt="img"/>
                        </div>
                        {/* <Link to=""/> */}
                        <div className="cursor-pointer">
                            <div>
                                <p className="font-semibold text-sm line-clamp-2">{title}</p>
                            </div>
                        </div>
                        
                        <div>
                            {existent == true ? <p className="text-orange-400 font-semibold text-sm">{price} تومان</p>:<p className="text-red-600 font-semibold text-sm">موجود نیست</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <Link to={`/productdatalist/${id}`} className="text-blue-500 font-semibold">بیشتر</Link>
                            
                            <div className="flex items-center">
                                <IoMdStarOutline className="size-4 fill-blue-400"/>
                                <IoMdStarOutline className="size-4 fill-blue-400"/>
                                <IoMdStar className="size-4 fill-blue-400"/>
                                <IoMdStar className="size-4 fill-blue-400"/>
                                <IoMdStar className="size-4 fill-blue-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>            
        );
}

export default Boxes;