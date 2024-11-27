import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Blog({id,title,image,data}) {
    const log = ()=>{

        console.log(id)
    }
    // imgweblog2_1
    // const updating = ()=>{
    //     console.log("در حال بروزرسانی...");
    //     Swal.fire({
    //         text: 'در حال بروزرسانی ...',
    //         icon: 'info',
    //         confirmButtonText: 'متوجه شدم',
    //         // confirmButtonColor:"green",
    //     })
    // }
    return ( 
        <div className="bg-white rounded-xl">
            <div className="p-3">
                <div className="flex items-center gap-x-6 border-b border-zinc-300 pb-3" onClick={log}>
                    <div className="rounded-xl overflow-hidden">
                    <img className="w-40 h-20" src={image} alt=""/>
                    </div>
                    <Link to={`/weblog/${id}`}>
                        <div className="font-semibold">
                        <div className="text-justify">
                            <p className="line-clamp-1">{title}</p>
                        </div>
                        </div>
                    </Link>
                </div>
                <div className="pt-2">
                    <p className="text-orange-400 text-center">{data}</p>
                </div>
               
                
            </div>
        </div>
     );
}

export default Blog;