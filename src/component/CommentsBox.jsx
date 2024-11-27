import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { TiArrowBackOutline } from "react-icons/ti";
function CommentsBox({name_user,user_comment}) {
    return ( 
        <>
            <div className="bg-white p-4 rounded-xl border border-dashed border-black">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <FaCircleUser className="size-9 fill-gray-500"/>
                        <div className="flex flex-col gap-x-1 font-semibold">
                            <span className="text-sm">{name_user}</span>
                            <span className="text-xs">1403/6/14</span>
                        </div>
                    </div>
                    <div className="rounded-full hover:bg-slate-300 w-9 h-9 flex items-center justify-center">
                        <TiArrowBackOutline className="size-6"/>
                    </div>
                </div>
                <div className="pt-3 font-medium text-sm">
                    <p>{user_comment}</p>
                </div>
            </div>
        </>
     );
}

export default CommentsBox;