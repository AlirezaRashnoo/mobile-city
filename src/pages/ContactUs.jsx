import React from 'react'
import Footer from '../component/Footer/Footer'
import { useState } from 'react'
import Swal from 'sweetalert2'
import supabase from "../../supabase";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ContactUs() {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const postFormHandeler = async(e) =>{
        e.preventDefault()

        // const dataUsers = {
        //     name,
        //     phone,
        //     email,
        //     message
        // }
        
        // const postRequestUser = async()=>{
            const { data, error } = await supabase
            .from('contact')
            .insert([
                {
                    name,
                    phone,
                    email,
                    message
                }
            ])
            .select()
            if(error){
                console.log(error)
                console.log(data);
            }else{
                setName('')
                setPhone('')
                setEmail('')
                setMessage('')          
                      
                Swal.fire({
                    text: 'درخواست شما با موفقیت ارسال شد',
                    icon: 'success',
                    confirmButtonText: 'متوجه شدم!'
                })
            }
            // postRequestUser()
        // }
        // fetch("http://localhost:3000/cantactAdmin",{
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(dataUsers)
        // })
        // .then(res =>{
        //     if(res.ok){
        //         Swal.fire({
        //             text: 'درخواست شما با موفقیت ارسال شد',
        //             icon: 'success',
        //             confirmButtonText: 'متوجه شدم!'
        //         })
        //     }
        //     else if(res.ok!=true){
        //         Swal.fire({
        //             text: 'خطا در برقراری ارتباط با سرور',
        //             icon: 'error',
        //             confirmButtonText: 'متوجه شدم!'
        //         })
        //     }
        // })
    }

    return (
        <>
            {/* <TitlePage title='تماس با ما' /> */}
            {/* <Header /> */}
            <section className='contact-us'>
                <div className="container flex flex-col items-center mt-16 md:mt-48 mb-20">
                    <div className="space-y-8">
                        <div className='flex items-center justify-center'>
                            <MdOutlineSupportAgent className='size-64 fill-blue-600'/>
                            {/* <img loading="lazy" src="../images/baner_img3.jpg" alt="Contact Us Image" className='mx-auto' /> */}
                        </div>
                        <div className='bg-white p-5 rounded-xl'>
                            <div>
                                <h3 className='text-black dark:text-white text-center text-2xl xs:text-3xl font-dana-bold tracking-tighter'>تماس با ما</h3>
                                <p className='text-base xs:text-lg sm:text-xl mt-4 font-dana-medium text-zinc-500 dark:text-gray-400 text-center'>
                                    برای پیشنهاد,انتقاد یا همکاری و ... میتوانید از طریق فرم زیر با ما در ارتباط باشید.
                                </p>
                            </div>
                            <div>
                                <form className='space-y-3' onSubmit={postFormHandeler}>
                                    <div className='space-y-2'>
                                        <label htmlFor="name" className='text-black dark:text-white text-sm xs:text-base'> نام </label>
                                        <input type="text" placeholder='علیرضا رشنو' id='name' value={name} onChange={(e) => setName(e.target.value)} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                    </div>
                                    <div className='space-y-2'>
                                        <label htmlFor="user-tel" className='text-black dark:text-white text-sm xs:text-base'> شماره تماس </label>
                                        <input type="tel" placeholder='09928954432' id='user-tel' value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base text-right' />
                                    </div>
                                    <div className='space-y-2'>
                                        <label htmlFor="user-email" className='text-black dark:text-white text-sm xs:text-base'> ایمیل </label>
                                        <input type="email" placeholder='name@company.com' id='user-email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                    </div>
                                    <div className='space-y-2'>
                                        <label htmlFor="user-message" className='text-black dark:text-white text-sm xs:text-base'> متن پیام </label>
                                        <textarea rows={5} placeholder='پیام خود را بنویسید...' id='user-message' value={message} onChange={(e) => setMessage(e.target.value)} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base resize-none' />
                                    </div>
                                    <button className='bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 transition-colors'>
                                        ثبت درخواست
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}