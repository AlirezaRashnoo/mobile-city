import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import { ToastContainer } from "react-toastify";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase";

function Header() {
    const[isMenuOpen,setIsMenuOpen] = useState(false)
    const[isShopBasketOpen,setisShopBasketOpen] = useState(false)
    const [countProductShop,setCountProductShop] = useState(1)
    const [shopingCart,setShopingCart] = useState([])

    
    const menuMobileHandeler = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    const shopBasketHandeler = () =>{
        setisShopBasketOpen(!isShopBasketOpen)
    }

    const plusProduct = () =>{
        setCountProductShop(prev => prev+1)
    }
    const minusProduct = () =>{
        if(countProductShop > 0){
            setCountProductShop(prev => prev-1)
        }
    }
    
    useEffect(()=>{
        const fetchShopingCart = async() =>{
            // const resDataShopingCart = await fetch(`http://localhost:3000/shopingCart`)
            // const dataShopingCartJson = await resDataShopingCart.json()
            const {data , error} = await supabase
            .from('shoppingCart')
            .select()
            if(error){
                console.log(error);
            }
            setShopingCart(data)            
           
        }
        fetchShopingCart()
        
    },[shopingCart])

    const updatingLogin = () =>{
        toast.info("این بخش در حال بروزرسانی میباشد",{
            className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
        })
    }
    const updatingDark = () =>{
        toast.info("این قابلیت هنوز تکمیل نشده",{
            className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
        })
    }



    const deleteHandelerCart = async(id) =>{
        // fetch(`http://localhost:3000/shopingCart/${id}`,{
        //     method:"DELETE",
        // })
        // .then((res) => {
        //     if(res.ok){
        //         toast.success("با موفقیت از سبد خرید حذف شد",{
        //             className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
        //         })
        //     }else{
        //         toast.error("خطا در برقراری ارتباط با سرور",{
        //             className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
        //         })
        //     }
        // })
            const { error } = await supabase
            .from('shoppingCart')
            .delete()
            .eq("id", id)
            if(error){
                toast.error("خطا در برقراری ارتباط با سرور",{
                    className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                })
            }else{
                toast.success("با موفقیت از سبد خرید حذف شد",{
                    className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                })
            }
        }
    
    return (  
        <>
            <header className="">
                {/* menu mobile */}
                
                <nav className="fixed top-0 w-full border border-b-black/30 z-40 bg-white">
                    <div className="container">
                        <div className="flex items-center justify-between py-3">
                            <div className="" onClick={menuMobileHandeler}>
                                <IoMenu className="size-8 transition-all">
                                    
                                </IoMenu>
                            </div>
                            <div>
                                <a href="/">
                                    <img className="" src="../images/logo_header.png" alt="logo_img" />
                                </a>
                            </div>
                            <div className="relative" onClick={shopBasketHandeler}>
                                <RiShoppingCart2Line className="size-8"/>
                                <span className={`${shopingCart.length > 0 ? '':"hidden "}absolute -top-1 right-0 flex items-center justify-center bg-green-700 size-[18px] text-white rounded-full text-sm`}>{shopingCart.length}</span>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Nav Bar */}
                
                <div className={`${isMenuOpen ? '':'hidden'} w-full h-screen fixed top-0 left-0 bg-zinc-700/40 z-40`} onClick={() => setIsMenuOpen(!isMenuOpen)}></div>

                <div className={`${isMenuOpen ? '':'hidden'} menu-mobile-btn h-screen fixed top-0 right-0 bg-white w-60 z-50`}>
                    <div className="menu-mobile-btn">
                        <div className="flex items-center justify-between pb-5 pt-2 px-2.5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
                            <div>
                                <img className="" src="../images/logo_header.png" alt="logo_img"/>
                            </div>
                            <div >
                                <IoMdClose className="size-5 text-zinc-600 dark:text-white" onClick={menuMobileHandeler}/>
                            </div>
                        </div>
                        {/* nav menu */}
                        
                        <ul className="space-y-6 text-zinc-600 dark:text-white child:pr-2.5 child:font-semibold">
                            <li>
                                <div className="flex items-center gap-x-2">
                                    <a href="/" className="flex items-center gap-x-2">
                                        <IoHomeOutline className="size-5"/>
                                        صفحه اصلی
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/products" className="inline-flex items-center gap-x-2">
                                        <RiShoppingCart2Line className="size-5"/>
                                        فروشگاه
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href="/about" className="inline-flex items-center gap-x-2">
                                    
                                    <MdOutlineMedicalInformation className="size-5"/>
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="/weblogs" className="inline-flex items-center gap-x-2">
                                    <IoDocumentTextOutline className="size-5"/>
                                    مقاله ها
                                </a>
                            </li>
                            <li>
                                <a href="/contactus" className="inline-flex items-center gap-x-2">
                                    <MdOutlinePhoneCallback  className="size-5"/>
                                    تماس با ما
                                </a>
                            </li>
                        </ul>
                    {/* Nav Footer  */}
                        <div className="flex flex-col items-start gap-y-6 text-blue-500 py-8 px-2.5 mt-8 border-t border-t-gray-300 dark:border-b-white/10 child:font-semibold">
                            {/* {islogin ? (
                                <a href="/login" className="flex items-center gap-x-1">
                                    پنل کاربر
                                </a>
                            ):(

                            )} */}
                            <a href="#" className="flex items-center gap-x-1" onClick={updatingLogin}>
                                <MdLogin className="size-5"/>
                                ورود | ثبت نام
                            </a>
                            <div className="toggle-theme inline-block" onClick={updatingDark}>
                                <div className="flex items-center gap-x-2 dark:hidden">
                                    <FaRegMoon className="size-5"/>
                                    <span>تم تیره</span>
                                </div>
                                <div className="hidden dark:flex items-center gap-x-2">
                                    
                                    <IoSunnyOutline className="size-5"/>
                                    <span>تم روشن</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
    
                </div>
                {/* soping section */}
                <div className={`${isShopBasketOpen ?'':'hidden'} fixed top-0 left-0 bg-white h-screen w-full z-50`}>
                    
                    <div className="container">
                        <div className="flex items-center justify-between pt-2 pb-4 border-black/20 border-b-[1px]">
                            <div>
                                <IoMdClose className="size-6 text-zinc-600" onClick={shopBasketHandeler}/>
                            </div>
                            <p className="text-lg font-semibold">سبد خرید</p>
                        </div>    
                        <div className="child:pb-5 child:mb-5 pt-6">
                            {shopingCart.length == 0 ?(
                                <div>
                                    <div className="flex items-center justify-center pt-3">
                                        <div className="text-center space-y-3">
                                            <img className="size-36" src="../images/shop-basket-empty-img.png" alt="" />
                                            <p className="text-red-600 font-semibold">سبد خرید شما خالی است</p>
                                            <div className="bg-orange-400 p-1 rounded-2xl text-white">
                                                <a href="/">بازگشت به فروشگاه</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ):(
                                shopingCart.map((product,index) => (
                                    <div key={index} className="flex justify-between border-b border-b-gray-300 dark:border-b-white/10">
                                        <div className="flex gap-x-1">
                                            <img src={product.image} className="w-[90px] h-[90px]" alt="Product 1"/>
                                            <div className="space-y-1.5 px-4">
                                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-1">{product.title}</h4>
                                                <div className="mt-5">
                                                    <div className="text-zinc-700 dark:text-white font-DanaDemiBold">
                                                        {product.price}
                                                        <span className="font-Dana text-xm"> تومان </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between w-24 h-10 p-2 border border-gray-600 rounded-lg text-blue-800 font-semibold">
                                                    <button className="flex items-center justify-center bg-orange-400 size-6 rounded-full cursor-pointer" onClick={plusProduct}>
                                                        <span className="text-xl font-bold">+</span>
                                                    </button>
                                                    <span>{countProductShop}</span>
                                                    <button className="flex items-center justify-center bg-orange-400 size-6 rounded-full" onClick={minusProduct}>
                                                        <span className="text-xl font-bold">-</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <IoIosCloseCircleOutline  className="size-8" onClick={() => deleteHandelerCart(product.id)}/>
                                    </div>

                                ))
                            )}
                            {shopingCart.length == 0 ? "" : <div className="flex items-center justify-between">
                                <div className="">
                                    <span class="font-DanaMedium text-gray-400 text-xs tracking-tighter">مبلغ قابل پرداخت</span>
                                    <div class="text-zinc-700 dark:text-white font-DanaDemiBold">
                                        350,000
                                        <span class="font-Dana text-xm">تومان</span>
                                    </div>
                                </div>
                                <button className="h-11 px-4 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl">ثبت سفارش</button>
                            </div>}
                        </div> 
                    </div>
                </div>


               
                
            </header>

            <ToastContainer position='bottom-right' autoClose="1600"/>
            
        </>
        
    )
}

export default Header;

