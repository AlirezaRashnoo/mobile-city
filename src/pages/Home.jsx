import { useState,useEffect } from 'react'
// import Title from '../component/Title';
import Boxes from "../component/Box";
import supabase from '../../supabase';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation , Autoplay} from 'swiper/modules';
import Categury from '../component/Categury'
// import Grouping from '../component/Grouping'
import Blog from '../component/Blog'
import Footer from '../component/Footer/Footer'
// import { IoChevronForward } from "react-icons/io5";
// import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronBackOutline } from 'react-icons/io5';



function Home() {
  

  // const allGrouping = [
  //   {"name":"دسته بندی 1", "image":"images/categuri1_section2.webp"},
  //   {"name":"دسته بندی 2", "image":"images/categuri2_section2.webp"},
  //   {"name":"دسته بندی 3" ,"image":"images/categuri3_section2.webp"},
  //   {"name":"دسته بندی 4" ,"image":"images/categuri4_section2.webp"},
  //   {"name":"دسته بندی 5" ,"image":"images/categuri5_section2.webp"},
  //   {"name":"دسته بندی 6" ,"image":"images/categuri2_section2.webp"}

  // ]

  const [dataBoxFix,setDataBoxFix] = useState([])
  const [dataBoxSlider,setDataBoxSlider] = useState([])
  const [dataWeblog,setDataWeblog] = useState([])
  const [dataBox,setDataBox] = useState([])
  
  // const [isLoding,setIsLoding] = useState(true)

        useEffect(()=>{
          const getDataBox = async() =>{
            const { data, error } = await supabase
            .from('product')
            .select('*')
            // .limit(8)

            if(error){
              console.log(error);
              toast.error("خطا در برقراری ارتباط با سرور",{
                className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
              })
            }else{
              // setDataBoxFix(data.slice(0,8))
              // setDataBoxSlider(data.slice(8,23))
              setDataBox(data)
              setDataBoxFix(dataBox.slice(0,8))
              setDataBoxSlider(dataBox.slice(8,23))
              // console.log(productSup);
            }
          }
          getDataBox()
        },[dataBox])
        
        useEffect(()=>{
           
            const getDataWeblog = async()=>{

              const { data, error } = await supabase
              .from('weblog')
              .select('*')

              if(error){
                console.log(error)
                toast.error("خطا در برقراری ارتباط با سرور",{
                  className:"bottom-7 bg-white rounded-lg w-80 text-base text-black"
                })
              }else{
                setDataWeblog(data)
              }
            }

            getDataWeblog()
            
            // setTimeout(() =>{
            //     // getDataProduct()
            //     // getDataBox()
            //     // getDataWeblog()
            //     setIsLoding(false)
            // },2000)

        },[dataWeblog])



  return (
    <>

      <div className="pt-14">
        <div>
          <img src="images/baner_img1.jpg" alt="img" className='w-full h-[265px] sm:h-80 lg:h-96'/>
        </div>          
        {/* <div>
          <img src="images/baner_img2.jpg" alt="img" className='w-full h-[265px] sm:h-80 lg:h-96'/>
        </div>          
        <div>
          <img src="images/baner_img3.jpg" alt="img" className='w-full h-[265px] sm:h-80 lg:h-96'/>
        </div>           */}
      </div>

      <div className='container'>
        {/* <Title title="جدید ترین موبایل ها"></Title> */}
        <div className="flex items-center justify-between my-4">
            <h4 className="font-semibold">جدید ترین موبایل ها</h4>
            <a href="/products" className="flex items-center text-blue-500">مشاهده ی همه
                <IoChevronBackOutline className="size-4"/>
            </a>
        </div>
        {/* Boxes */}
        <section>
            {/* {isLoding && 
              <div className="flex items-center justify-center mx-auto text-center">
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
            {/* {isLoding && <div className="text-center">Loding ... :))</div>} */}
            {dataBoxFix.map(box=>(
              <Boxes key={dataBoxFix.id} {...box}></Boxes>
            ))}
            {/* <Boxes></Boxes> */}
            
          </div>
        </section>
        {/* Categures */}
        <section className='my-6'>
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2">
            <Categury image ="/images/categuri1_section1.jpg"></Categury>
            <Categury image ="/images/categuri2_section1.jpg"></Categury>
          </div>
        </section>
        {/* Grouping site */}
        {/* <section>
          <div className="grid grid-cols-3 gap-3">
            {allGrouping.map(item =>(
              <Grouping key={allGrouping.id} {...item}/>
            ))}
            
          </div>
        </section> */}

        <div className="flex items-center justify-between my-4">
            <h4 className="font-semibold">محبوب ترین موبایل ها</h4>
            
        </div>
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints= {{
              640: {
                slidesPerView:3
              },
              1024: {
                slidesPerView:4
              }
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">

            {/* {isLoding && <div className="text-center">Loding ... :))</div>} */}
            {/* {isLoding && 
              <div className="flex items-center justify-center mx-auto text-center">
                <div className="py-2 px-5 text-sm font-medium text-white bg-orange-400 rounded-lg">
                  <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-2 text-white animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="orange-400"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#fff"/>
                  </svg>
                  درحال بارگیری ...
                </div>
              </div>
            } */}
            {dataBoxSlider.map(item=>(
              <SwiperSlide key={dataBoxSlider.id}>
                <Boxes {...item}></Boxes>
              </SwiperSlide>
            ))}
            
        </Swiper>
        {/* blog */}
        {/* <Title title="مطالب خواندنی"></Title> */}
        <div className="flex items-center justify-between my-4">
            <h4 className="font-semibold">مطالب خواندنی</h4>
            <a href="/weblogs" className="flex items-center text-blue-500">مشاهده ی همه
                <IoChevronBackOutline className="size-4"/>
            </a>
        </div>
        {/* {isLoding && <div className="text-center">Loding ... :))</div>} */}
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2">
          {dataWeblog.map(blog=>(
            <Blog key={dataWeblog.id} {...blog}/>
          ))}
        </div>

        {/* Footer */}
        
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home