import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

function Title({title}) {
    return (  
        <div className="flex items-center justify-between my-4">
            <h4 className="font-semibold">{title}</h4>
            <a href="#" className="flex items-center text-blue-500">مشاهده ی همه
                <IoChevronBackOutline className="size-4"/>
            </a>
        </div>
        
    );
}

export default Title;