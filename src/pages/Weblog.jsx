import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Footer from "../component/Footer/Footer";
import supabase from "../../supabase";

function Weblog() {
    let prams = useParams()
    let getIdBlog = prams.id

    const [dataWeblog,setDataWeblog] = useState('')
    const [dataTiter,setDataTiter] = useState([])

    useEffect(()=>{
        const fetchDataListBlog = async() =>{
            const { data, error } = await supabase
            .from('weblogData')
            .select('*')
            .eq('id',getIdBlog)
            .single()
            // .limit(8)

            if(error){
              console.log(error);
            }else{
                setDataWeblog(data)
              // console.log(productSup);
            }
          }
          fetchDataListBlog()
    },[dataWeblog])
    useEffect(()=>{
        const fetchDataTiter = async() =>{
            const { data, error } = await supabase
            .from('titrContent')
            .select('*')
            // .eq('blog_id',getIdBlog)
            // .single()
            // .limit(8)

            if(error){
              console.log(error);
            }else{
                const titerDataFiltring = data.filter((data) => data.blog_id == getIdBlog)
                setDataTiter(titerDataFiltring)
            //   console.log(dataTiter);
            }
          }
          fetchDataTiter()
    },[dataTiter])
    // console.log(dataWeblog.id);

    return ( 
        <>
            <div className="py-6 mt-14">
                <div className="container">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="child:border-b child:border-black/30 child:pb-7 space-y-7">
                            <div>
                                <div className="mb-6 text-2xl font-semibold">
                                    <h1 className="text-center">{dataWeblog.title}</h1>
                                </div>
                                <div className="flex items-center justify-center mb-6">
                                    <img className="w-80 h-80" src={dataWeblog.imageBlog} alt="image" />
                                </div>
                                <div>
                                    <p className="text-lg leading-8 text-justify">{dataWeblog.introduction}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[22px] pb-5">{dataWeblog.subject}</h4>
                                <p className="text-lg text-justify leading-8">{dataWeblog.textSubject}</p>
                            </div>
                            {dataTiter.map(data=>(
                                <div>
                                    <div>
                                        <h4 className="font-semibold text-[22px] pb-6">{data.titleHeadline}</h4>
                                    </div>
                                    <div>
                                        <img src={data.imageHeadline} alt="image" />
                                    </div>
                                    <div className="pt-5 space-y-3 child:text-lg child:text-justify child:leading-8">
                                        <p>{data.textHeadline}</p>
                                    </div>
                                    {/* <div className="flex items-center gap-x-2 text-xl font-medium">
                                        <span className="text-red-500">بیشتر بخوانید:</span>
                                        <a className="text-purple-600" href="https://meghdadit.com/mag/%d8%a8%d9%87%d8%aa%d8%b1%db%8c%d9%86-%da%af%d9%88%d8%b4%db%8c-%d8%aa%d8%a7-3-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86-%d8%aa%d9%88%d9%85%d8%a7%d9%86/">بهترین گوشی تا 3 میلیون</a>
                                    </div> */}
                                </div>
                            ))}
                            {/* <div>
                                <div>
                                    <h4 className="font-semibold text-[22px] pb-6">گوشی موبایل آنر مدل 90</h4>
                                </div>
                                <div>
                                    <img src="../images/imgweblog_2.jpg" alt="img" />
                                </div>
                                <div className="pt-5 space-y-3 child:text-lg child:text-justify child:leading-8">
                                    <p>آنر 90 یک گوشی میان‌رده قدرتمند با طراحی مدرن و مشخصات جذاب است که در تاریخ 29 می 2023 معرفی شد. این گوشی با ابعاد 7.8 در 74.1 در 161.9 میلی‌متر و وزن سبک 183 گرم، حس خوبی از نظر ارگونومی و راحتی در دست را ارائه می‌دهد. همچنین با دو سیم‌کارت و پشتیبانی از شبکه‌های 5G، کاربری مناسبی برای کسانی دارد که به دنبال یک تلفن همراه با قابلیت‌های ارتباطی بالا هستند. صفحه‌نمایش AMOLED این گوشی با اندازه 6.7 اینچ و نرخ بروزرسانی 120 هرتز، تجربه بصری روان و با کیفیتی را فراهم می‌کند و با حداکثر روشنایی 1600 نیت، حتی در نور مستقیم خورشید نیز تصاویر واضح و جذابی ارائه می‌دهد.
                                    پردازنده Qualcomm Snapdragon 7 Gen 1 Accelerated Edition قدرت پردازشی بالایی برای آنر 90 به ارمغان آورده است. این گوشی دارای حافظه داخلی 512 گیگابایت و 12 گیگابایت RAM است که فضای کافی برای ذخیره‌سازی و اجرای همزمان چندین برنامه را فراهم می‌کند. نبود پشتیبانی از کارت حافظه ممکن است برای برخی کاربران محدودکننده باشد، اما فضای ذخیره‌سازی بزرگ این کمبود را جبران می‌کند.<p/>
                                    در بخش دوربین، آنر 90 با دوربین اصلی 200 مگاپیکسلی خود توجه زیادی را به خود جلب می‌کند. این دوربین با دریچه دیافراگم f/1.9 و حسگرهای فوکوس خودکار PDAF، تصاویری با وضوح بالا و جزئیات دقیق ثبت می‌کند. همچنین دوربین‌های فوق‌عریض 12 مگاپیکسلی و ماکرو 2 مگاپیکسلی امکانات بیشتری را برای عکاسی به کاربر می‌دهد.</p>
                                </div>
                                <div className="flex items-center gap-x-2 text-xl font-medium">
                                    <span className="text-red-500">بیشتر بخوانید:</span>
                                    <a className="text-purple-600" href="https://meghdadit.com/mag/the-best-phones-up-to-20-million-2/">بهترین گوشی تا 20 میلیون</a>
                                </div>
                            </div> */}
                            {/* <div>
                                <div>
                                    <h4 className="font-semibold text-[22px] pb-6">گوشی موبایل سامسونگ مدل Galaxy A55</h4>
                                </div>
                                <div>
                                    <img src="../images/imgweblog_3.jpg" alt="img" />
                                </div>
                                <div className="pt-5 space-y-3 child:text-lg child:text-justify child:leading-8">
                                    <p>سامسونگ Galaxy A55 یک گوشی میان‌رده قدرتمند با طراحی شیک و عملکرد قوی است که در تاریخ 11 مارس 2024 معرفی شده است. این گوشی دارای ابعاد 161.1×77.4×8.2 میلی‌متر و وزنی برابر با 213 گرم است. بدنه این گوشی از شیشه (Gorilla Glass) برای پشت و فریم آلومینیومی ساخته شده که حس استحکام و زیبایی را به کاربر منتقل می‌کند. همچنین با استاندارد IP67، این گوشی در برابر نفوذ گرد و غبار و رطوبت مقاوم است که برای کاربرانی که در محیط‌های چالش‌برانگیز کار می‌کنند بسیار مناسب است.
                                   ین دستگاه از پردازنده Exynos 1480 استفاده می‌کند که عملکرد پردازشی سریع و روانی را فراهم می‌آورد. با 256 گیگابایت حافظه داخلی و 12 گیگابایت رم، فضای کافی برای ذخیره‌سازی داده‌ها و اجرای برنامه‌های سنگین وجود دارد. صفحه‌نمایش 6.6 اینچی Super AMOLED این گوشی با وضوح 1080×2340 پیکسل و نرخ بروزرسانی 120 هرتز، تجربه بصری بسیار روان و شفاف را به کاربر ارائه می‌دهد.
                                    دوربین‌های سه‌گانه پشتی شامل یک حسگر اصلی 50 مگاپیکسلی با OIS، یک حسگر فوق‌عریض 12 مگاپیکسلی و یک حسگر ماکرو 5 مگاپیکسلی است. این ترکیب دوربین‌ها امکان عکاسی با کیفیت بالا در شرایط مختلف را فراهم می‌کند. دوربین سلفی 32 مگاپیکسلی نیز تصاویر شفاف و با کیفیتی را ارائه می‌دهد و قابلیت فیلم‌برداری با وضوح 4K را نیز دارد. باتری 5000 میلی‌آمپر ساعتی با قابلیت شارژ 25 وات، عمر طولانی و شارژ سریع را به کاربر ارائه می‌دهد.</p>
                                </div>
                            </div> */}
                            {/* <div>
                                <div>
                                    <h4 className="font-semibold text-[22px] pb-6">گوشی موبایل شیائومی مدل 13T 5G </h4>
                                </div>
                                <div>
                                    <img src="../images/imgweblog_4.jpg" alt="img"/>
                                </div>
                                <div className="pt-5 space-y-3 child:text-lg child:text-justify child:leading-8">
                                    <p>وشی شیائومی 13T 5G به عنوان یک میان‌رده قدرتمند، با ابعاد ۸.۵ × ۷۵.۷ × ۱۶۲.۲ میلی‌متر و وزن ۱۹۳ گرم، طراحی شیکی دارد که به راحتی در دست جا می‌شود. این گوشی از دو سیم کارت سایز نانو پشتیبانی می‌کند و با تراشه Mediatek Dimensity 8200 Ultra عملکرد بسیار قوی و سریعی را ارائه می‌دهد. حافظه داخلی ۲۵۶ گیگابایت و ۱۲ گیگابایت RAM، این امکان را فراهم می‌کند که کاربران به راحتی چندین برنامه را به صورت همزمان اجرا کنند.
                                    صفحه نمایش ۶.۶۷ اینچی از نوع AMOLED با رزولوشن ۱۲۲۰ × ۲۷۱۲ و نرخ بروزرسانی ۱۴۴ هرتز، تجربه بصری فوق‌العاده‌ای را ارائه می‌دهد. این نمایشگر با حداکثر روشنایی ۲۶۰۰ نیت، در شرایط نوری مختلف، تصاویر را با وضوح و روشنی عالی نمایش می‌دهد. همچنین، محافظ Corning Gorilla Glass 5 از صفحه نمایش در برابر خط و خش و آسیب‌های احتمالی محافظت می‌کند.
                                    در بخش دوربین، شیائومی 13T 5G به سه حسگر دوربین اصلی با رزولوشن‌های ۵۰+۵۰+۱۲ مگاپیکسل مجهز است که به کاربران امکان عکاسی با کیفیت بالا را می‌دهد. دوربین سلفی ۲۰ مگاپیکسلی نیز به خوبی نیازهای عکاسی پرتره را برآورده می‌کند. باتری ۵۰۰۰ میلی‌آمپری این گوشی با فناوری شارژ سریع ۶۷ وات، در کمترین زمان ممکن شارژ می‌شود و تجربه کاربری بدون وقفه‌ای را به ارمغان می‌آورد. با این مشخصات، شیائومی 13T 5G گزینه‌ای عالی برای کاربرانی است که به دنبال یک گوشی میان‌رده با عملکرد بالا هستند.</p>
                                </div>
                            </div> */}
                            <div>
                                <div className="font-semibold text-[22px]">
                                    <h4>جمع‌ بندی</h4>
                                </div>
                                <div className="text-lg text-justify">
                                    <p className="pt-5 leading-8">{dataWeblog.conclusion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}

export default Weblog;