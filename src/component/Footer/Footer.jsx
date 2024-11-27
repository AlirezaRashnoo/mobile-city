import React from "react";
import Media from "./Media";
import QuickAccess from "./QuickAccess";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
function Footer() {
    return ( 
        <footer className="bg-zinc-700 mt-3">
      <div className="container">
        <div className="py-5">
          <div className="flex items-center justify-center">
            <img className="w-20" src="../images/logo_header.png" alt="logo_img"/>
          </div>
          <div>
            <div className="py-4">
              <h4 className="text-xl text-white font-semibold">فروشگاه اینترنتی موبایل شاپ</h4>
            </div>
            <div className="text-justify text-gray-300">
              <p><span className="font-semibold">سایت موبایل شاپ یکی از فروشگاه های اینترنتی قدیمی و با سابقه آنلاین در زمینه خرید گوشی و لوازم دیجیتال است که بیش از 14 سال است در حوزه خرید آنلاین لوازم اصل و اورجینال فعالیت می کند.</span> تنوع بالای کالاها در دسته بندی های گوشی موبایل، لپ تاپ، لوازم جانبی موبایل، هدفون، پاور بانک و ساعت هوشمند و همچنین اعتماد کاربر در خرید از سایت <a className=" text-blue-500" href="#">mobile city</a>  با داشتن نماد اعتماد الکترونیک و SSL برای رمزگذاری تراکنش ها، امکان خرید قسطی از این سایت از دلایل رضایتمندی کاربران این سایت است.</p>
            </div>
          </div>
          <div className="my-6">
            <div className="text-[18px] font-semibold text-white pb-3">
              <h4>دسترسی سریع</h4>
            </div>
            <div className="">
              <div className="flex items-center gap-x-5 child:space-y-2 child:font-semibold">
                <div className="child:flex child:items-center child:gap-x-1 child:text-gray-300">
                  <QuickAccess textLink="حریم خصوصی"/>
                  <QuickAccess textLink="شرایط استفاده"/>
                  <QuickAccess textLink="پرسش های متداول"/>
                  <QuickAccess textLink="ضمانت نامه ها"/>
                </div>
                <div className="child:flex child:items-center child:gap-x-1 child:text-gray-300">
                  <QuickAccess textLink="عودت کالا"/>
                  <QuickAccess textLink="ثبت سفارش"/>
                  <QuickAccess textLink="فرصت های شغلی"/>
                  <QuickAccess textLink="ارتیاط با ما"/>
                </div>
                
              </div>
            </div>
          </div>
          <div className="text-[18px] font-semibold text-white pb-3">
            <h4>در تماس باشیم</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <MdOutlineLocationOn className="size-5 fill-gray-300"/>             
              <p className="text-gray-300">لرستان, خرم آباد , گلدشت شرقی</p>
            </div>
            <a className="flex items-center gap-x-2 text-blue-500" href="mailto: alirezara6noo@gmail.com">
            <MdOutlineMailOutline className="size-5"/>
              alirezara6noo@gmail.com
            </a>
            <a className="flex items-center gap-x-2 text-gray-300" href="tel: 09928943276">
              <MdOutlinePhoneCallback  className="size-5"/>
              09928943276
            </a>
            <div className="flex items-center justify-between pb-5 border-b border-zinc-600">
              <div className="flex items-center justify-center">
                <p className="font-semibold text-gray-300">ما را در فضای مجازی دنبال کنید:</p>
              </div>
              <div className="flex items-center gap-x-2 child:rounded-xl child:bg-blue-500 child:p-1">
                <Media></Media>
              </div>
            </div>
            <div className="text-center">
              <p className="text- text-gray-300">ساخته شده توسط <a className="text-blue-500" href="#"><i>علیرضا رشنو</i></a></p>
            </div>
            <div dir="ltr">
              <p className="text-xs text-gray-300">Copyright © 2023 Mobile City. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
     );
}

export default Footer;