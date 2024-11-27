import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { ImCamera } from "react-icons/im";
import { FaMemory } from "react-icons/fa6";
import { useEffect,useState } from "react";
import CommentsBox from "../component/commentsBox";
import Header from "../component/Header";
// import Swal from 'sweetalert2'
import { ToastContainer } from "react-toastify";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase";


function ProductDataList() {
    let prams = useParams()
    let getIdBox = prams.id
    const [dataBox,setDataBox] = useState([]) 
    const [dataComments,setDataComments] = useState([]) 
    const [userComments,setUserComments] = useState('')
    const [nameUser,setNameUser] = useState('')
    
    useEffect(()=>{
        const fetchProductDataList = async() =>{
            const { data, error } = await supabase
            .from('product')
            .select('*')
            .eq('id',getIdBox)
            .single()
            // .limit(8)

            if(error){
              console.log(error);
              toast.error("خطا در برقراری ارتباط با سرور",{
                className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
              })
            }else{
                setDataBox(data)
              // console.log(productSup);
            }
          }

          fetchProductDataList()
        },[dataBox])
    useEffect(()=>{
        const fetchComments = async() =>{
            // const resDataComment = await fetch(`http://localhost:3000/comments`)
            // const dataCommentJson = await resDataComment.json()
            // const commentFiltering = dataCommentJson.filter((data) => data.productId == getIdBox)
            // setDataComments(commentFiltering)
            // ------------------------------------------
            const { data, error } = await supabase
            .from('comments')
            .select('*')

            if(error){
                console.log(error)
                toast.error("خطا در برقراری ارتباط با سرور",{
                    className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                })
            }else{
              const commentFiltering = data.filter((data) => data.productId == getIdBox)
              setDataComments(commentFiltering)
            //   console.log(dataComments);

           
            }

        }
        fetchComments()

    },[dataComments])


    const addToCart = (dataBox)=>{


        const postCartRequest = async() =>{
            // const resPostCart = await fetch('http://localhost:3000/shopingCart', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(dataBox)
            // })
            // if(resPostCart.ok){
            //     // console.log("با موفقیت به سبد خرید اضافه شد");
            //     toast.success("با موفقیت به سبد خرید اضافه شد",{
            //         className:"bottom-7 bg-white rounded-lg w-80 text-base text-black z-40 border border-black/50"
            //     })
                
            // }else{
            //     toast.error("خطا در برقراری ارتباط با سرور",{
            //         className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
            //     })
            // }
            const {data,error} = await supabase
            .from('shoppingCart')
            .insert([
                {
                    image:dataBox.image,
                    title:dataBox.title,
                    price:dataBox.price
                }
            ])
            .select()
            if(error){
                toast.error("خطا در برقراری ارتباط با سرور",{
                    className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                })
            }else{
                toast.success("با موفقیت به سبد خرید اضافه شد",{
                    className:"bottom-7 bg-white rounded-lg w-80 text-base text-black z-40 border border-black/50"
                })
            }
        }
        postCartRequest()
    }


    const postHandeler = (e) =>{
        e.preventDefault()
        // const commentUser = {
        //     userComments,
        //     nameUser,
        //     productId:dataBox.id
        // }
       
        if(userComments != ''){
            const postCommentRequest = async() =>{

                // --------------------------------------------
                const { data, error } = await supabase
                .from('comments')
                .insert([
                    {
                        name_user:nameUser,
                        user_comment:userComments,
                        productId:dataBox.id                  
                    }
                ])
                .select()
                if(error){
                    console.log(error)
                    // console.log(data);
                    toast.error("خطا در ارسال اطلاعات به سرور",{
                        className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                    })
                    
                }else{
                    setUserComments('')
                    setNameUser('')     
                        
                    toast.success("کامنت شما با موفقیت ثبت شد",{
                        className:"bottom-7 bg-white rounded-lg w-80 text-base text-black z-40 border border-black/50"
                    })
                }
            }
            postCommentRequest()

        }else{
            alert("لطفا متن رو وارد کنید")
        }
    }
    

    return ( 
        <>
        <Header cart={dataBox}/>
           <div className="mb-12 mt-14">
                <div className="container">
                    <div className="pt-4 space-y-3 mb-8 child:rounded-xl child:bg-white">
                        <div className="flex items-center justify-center bg-white overflow-hidden">
                            <img loading="lazy" src={dataBox.image} alt="image" className="w-[60%]"/>
                        </div>
                        <div className="p-4 space-y-3 font-semibold">
                            <p>{dataBox.title}</p>
                            {dataBox.existent == true ? <div className="bg-green-200"><p className="text-green-800 text-center py-1">موجود است</p></div>:<div className="bg-red-300"><p className="text-red-800 text-center py-1">موجود نیست</p></div>}
                        </div>
                        <div className="p-4 text-justify">
                            <h4 className="font-bold pb-2 text-lg">درباره محصول</h4>
                            <div className="font-medium">
                                <p className="text-sm leading-6">{dataBox.explain}</p>
                            </div>
                            <div className="flex items-center gap-x-1 pt-2">
                                <p className="font-semibold">امتیاز:</p>
                                <div className="flex items-center">
                                    <IoMdStarOutline className="size-4 fill-blue-400"/>
                                    <IoMdStarOutline className="size-4 fill-blue-400"/>
                                    <IoMdStar className="size-4 fill-blue-400"/>
                                    <IoMdStar className="size-4 fill-blue-400"/>
                                    <IoMdStar className="size-4 fill-blue-400"/>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold pb-2 text-lg">ویژگی ها:</h4>
                            <div className="child:flex child:items-center child:gap-x-2 space-y-4">
                                <div className="">
                                    <div className="flex items-center gap-x-2">
                                        <FaMemory />
                                        <p className="text-gray-600">حافظه:</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">{dataBox.memory} گیگابایت</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-x-2">
                                        <FaMemory />
                                        <p className="text-gray-600">رم:</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">{dataBox.ram} گیگابایت</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-x-2">
                                        <ImCamera />
                                        <p className="text-gray-600">دوربین:</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">{dataBox.camera} مگاپیکسل</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-x-2">
                                        <FaMobileScreen />
                                        <p className="text-gray-600">اندازه صفحه:</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">{dataBox.screen} اینچ</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-5">
                            <h4 className="inline font-bold text-2xl pb-2 border-b border-b-black">نظر شما</h4>
                            <div className="bg-white p-4 rounded-xl border border-dashed border-black">
                                <h6 className="mb-3">نام</h6>
                                <input value={nameUser} onChange={(event) => setNameUser(event.target.value)} type="text" className="w-full h-10 mb-3 bg-blue-200/80 rounded-lg outline-none placeholder:text-gray-700 p-2" required  maxLength="20" placeholder="نام خود را بنویسید .." />
                                <div>
                                    <h6 className="mb-3">متن نظر شما</h6>
                                    <textarea value={userComments} onChange={(event) => setUserComments(event.target.value)} className="resize-none w-full h-36 mb-3 bg-blue-200/80 rounded-lg outline-none placeholder:text-gray-700 p-2" placeholder="دیدگاه خود را بنویسید..."></textarea>
                                    <button type="submit" onClick={postHandeler} className="bg-orange-500 h-9 w-24 text-white font-semibold rounded-lg">ثیت نظر</button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <h4 className="inline font-bold text-2xl pb-2 border-b border-b-black">نظر کاربرها</h4>
                            {/* {dataComments.length == 0 ? <div>no comment</div>:''} */}
                            {dataComments.length == 0 ? (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center">
                                        <img className="size-52" src="../images/comments-slash.png" alt="img" />
                                    </div>
                                    <p className="text-red-500 text-xl font-semibold text-center">هیچ دیدگاهی وجود ندارد</p>
                                </div>
                            ):('')}
                            <div className="space-y-3 pb-6">
                                {/* {dataComments.map(comment=>(
                                    <CommentsBox {...comment}/>
                                ))} */}
                                
                                
                                    {dataComments.map(comment =>(
                                        <CommentsBox {...comment}/>
                                    ))}
                                   
                                
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="fixed bottom-0 w-full bg-white h-16 flex items-center justify-center z-30 border border-t-zinc-400 border-t-2">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className="">
                            <button className="flex items-center justify-center bg-orange-500 text-white h-10 w-32 rounded-md font-semibold disabled:bg-orange-300" disabled={!dataBox.existent} onClick={() => addToCart(dataBox)}>افزودن به سبد</button>
                            </div>
                            <div>
                                {dataBox.existent == true ? <p className="text-green-500">{dataBox.price} تومان</p>:<p className="text-red-500 font-semibold">ناموجود</p>}
                            </div>
                        </div>
                    </div>
                </div>
               <Footer />
                <ToastContainer position='bottom-right' autoClose="1600" closeButton={true}/>
           </div>
           
        </>
     );
}

export default ProductDataList;