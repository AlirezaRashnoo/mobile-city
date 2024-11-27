import React, { useState } from 'react'
import Footer from '../component/Footer/Footer'
// import Header from '../component/Header'
// import Swal from 'sweetalert2'

// import { Link } from 'react-router-dom'
import supabase from '../../supabase';


export default function Login() {



// ---------------------------------------------------------------------------

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSuccesAlert = () => {
        Swal.fire({
            text: 'شما با موفقیت وارد حساب کاربری خود شدید',
            icon: 'success',
            confirmButtonText: 'متوجه شدم!'
        }).then((result) =>{
            if(result.isConfirmed){
                window.location.replace("/")
            }
        })
    }

    const loginRejectAlert = () => {
        Swal.fire({
            text: 'حسابی با اطلاعات وارد شده وجود ندارد',
            icon: 'error',
            showCancelButton:true,
            cancelButtonText: 'تلاش مجدد',
            confirmButtonText: 'ثبت نام',
            cancelButtonColor:'blue',
        }).then((result) =>{
            if(result.isConfirmed){
                window.location.replace("/register")
            }
        })
    }
    const loginFormHandeler = (e) =>{
        e.preventDefault()
        const getDataUsers = async() =>{
            const responseDataUsers = await fetch(`http://localhost:3000/users?email=${email}`)
            const dataUsersJson = await responseDataUsers.json()
            // console.log(dataUsersJson);
            if(email.length < 15){
                console.log("ایمیل کوتاه است");
            }
            else if(password.length < 8){
                console.log("رمز حداقل باید 8 کاراکتر باشد");
            }
            else if(dataUsersJson.length > 0){
                console.log("شما با موفقیت وارد حساب کاربری خود شدید");
                loginSuccesAlert()
                window.addEventListener("click",() =>{
                    window.location.replace("/")
                })
            }else{
                loginRejectAlert()
            }
        }
        getDataUsers()
    }
// ---------------------------------------------------------------------------

 
    
  


    return (
        <>
            {/* <TitlePage title="ورود به حساب" /> */}
            {/* <Header /> */}
            <div className='h-max-content flex justify-center items-center'>
                <div className='bg-white dark:bg-zinc-700 h-max-content w-[450px] sm:w-[500px] mx-2 mt-28 md:mt-40 mb-16 p-5 xs:p-10 rounded-lg shadow'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='text-black  text-xl xs:text-2xl text-center'> ورود به حساب </h1>
                        <div>
                            <a href="/" className='text-purple-600 font-semibold'>بازگشت به فروشگاه</a>
                        </div>
                    </div>
                    <form className='space-y-10' onSubmit={loginFormHandeler}>
                        <div className='space-y-2'>
                            <label htmlFor="user-email" className='text-black dark:text-white text-sm xs:text-base'> ایمیل </label>
                            <input type="email" placeholder='name@company.com' id='user-email' value={email} onChange={(event) => setEmail(event.target.value)} className='w-full bg-blue-200/70 p-2 rounded-md focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300/60 dark:text-white text-sm xs:text-base' />
                        </div>
                        <div className='space-y-2 relative'>
                            <label htmlFor="user-password" className='text-black dark:text-white text-sm xs:text-base'> رمز عبور </label>
                            <input type={showPassword ? "text" : "password"} placeholder='••••••••' id='user-password' value={password} onChange={(event) => setPassword(event.target.value)} className='w-full bg-blue-200/70 ps-2 py-2 pe-10 rounded-md focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300/60 dark:text-white text-sm xs:text-base' />

                            <div className="inline">
                                <div onClick={() => setShowPassword(!showPassword)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 absolute left-3 top-[61%] cursor-pointer text-gray-800 dark:text-gray-100">
                                        {
                                            showPassword ? (
                                                <>
                                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                                </>
                                            ) : (
                                                <>
                                                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                                </>
                                            )
                                        }
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <button className='bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 group transition-colors'>ورود</button>
                            <div className='text-center child:tracking-tightest'>
                                <span className='text-base text-zinc-800 dark:text-white'>حسابی ندارید؟</span>
                                <a href="/register" className='text-orange-400'> ثبت نام </a>
                                {/* <Link to="/register" className='text-orange-400'> ثبت نام </Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )










}
