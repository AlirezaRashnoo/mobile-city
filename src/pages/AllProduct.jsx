import React from "react";
import { useState,useEffect } from "react";
import Boxes from "../component/Box";
import Footer from "../component/Footer/Footer";
import supabase from '../../supabase';

function AllProduct() {

    const [productData , setProductData] = useState([])
    // const [isLoding,setIsLoding] = useState(true)

    useEffect(()=>{
        // const getDataProduct = async() =>{
        //     const responseProductGet = await fetch(`http://localhost:3000/products`)
        //     const dataProductJson = await responseProductGet.json()
        //     setProductData(dataProductJson)

        // }
        // setTimeout(() =>{
        //     setIsLoding(false)
        //     getDataProduct()
        // },2000)
        const getDataBox = async() =>{
            const { data, error } = await supabase
            .from('product')
            .select('*')
            // .limit(8)

            if(error){
              console.log(error);
            }else{
                setProductData(data)
            }
          }
          getDataBox()

    },[productData])

    


    return ( 
        <>
            {/* <Header /> */}
            <div className="mt-14 mb-10">
                <div>
                    <img src="images/baner_img3.jpg" alt="img" className='w-full h-[265px] sm:h-80 lg:h-96'/>
                </div>
                <div className="container">
                    <div className="flex items-center justify-between my-10">
                        <h4 className="font-semibold">مطالب خواندنی</h4>
                        <select className='w-32 xs:w-52 py-2 text-white text-[13px] xs:text-base bg-gray-400 dark:bg-gray-500 rounded-md focus:outline-none'>
                            {/* <option value="new">جدید ترین</option> */}
                            <option value="asc">ارزان ترین</option>
                            <option value="desc">گران ترین</option>
                            {/* <option value="تخفیفی ترین">تخفیفی ترین</option> */}
                            {/* <option value="محبوب ترین">محبوب ترین</option> */}
                        </select>
                    </div>
                    {/* {isLoding && 
                        <div className="flex items-center justify-center mx-auto text-center mt-6">
                            <div className="py-2 px-5 text-sm font-medium text-white bg-orange-400 rounded-lg">
                            <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-2 text-white animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="orange-400"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#fff"/>
                            </svg>
                            درحال بارگیری ...
                            </div>
                        </div>
                    } */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                        {productData.map(box=>(
                        <Boxes key={productData.id} {...box}></Boxes>
                        ))}
            
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}

export default AllProduct;
