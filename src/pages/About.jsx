import React from "react";
// import Header from "../component/Header";
import Footer from "../component/Footer/Footer";
function About() {
    return ( 
        <>
        {/* <Header /> */}
            <div className="container">
                <div className="mt-28 bg-white p-4">
                    <div>
                        <div className="space-y-8 text-justify font-medium text-lg">
                        <h4 className="inline font-bold text-3xl pb-2 border border-b-black">درباره ما</h4>
                            <div>
                                <p>سایت موبایل سیتی یکی از فروشگاه های اینترنتی قدیمی و با سابقه آنلاین در زمینه خرید گوشی و لوازم دیجیتال است که بیش از 14 سال است در حوزه خرید آنلاین لوازم اصل و اورجینال فعالیت میکند. تنوع بالای کالاها در دسته بندی های گوشی موبایل,لپ تاب,لوازم جانبی موبایل, هدفون, پاور بانک و ساعت هوشمند و همچنین اعتماد کاربر در خرید از سایت cityshop.liara.run با داشتن نماد اعتماد الکترونیک و SSL برای رمزگذاری تراکنش ها, امکان خرید قسطی از سایت از دلایل رضایتمندی کاربران این سایت است</p>
                            </div>
                            <div>
                                <p>سایت موبایل سیتی یکی از فروشگاه های اینترنتی قدیمی و با سابقه آنلاین در زمینه خرید گوشی و لوازم دیجیتال است که بیش از 14 سال است در حوزه خرید آنلاین لوازم اصل و اورجینال فعالیت میکند. تنوع بالای کالاها در دسته بندی های گوشی موبایل,لپ تاب,لوازم جانبی موبایل, هدفون, پاور بانک و ساعت هوشمند و همچنین اعتماد کاربر در خرید از سایت cityshop.liara.run با داشتن نماد اعتماد الکترونیک و SSL برای رمزگذاری تراکنش ها, امکان خرید قسطی از سایت از دلایل رضایتمندی کاربران این سایت است</p>
                            </div>

                        </div>
                        <div className="mt-12">
                            <h4 className="inline font-bold text-3xl pb-2 border border-b-black">راه های ارتباطی</h4>
                            <ul className='mt-7 list-disc ms-5 child:marker:text-blue-700 space-y-2'>
                                <li>لرستان , خرم آباد, گلدشت شرقی</li>
                                <li> <a href="mailto: alirezara6noo@gmail.com"> alirezara6noo@gmail.com </a> </li>
                                <li> <a href="tel: 09928968391"> 09928968391 </a> </li>
                                <li> @city_mobile </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />

        </>
     );
}

export default About;