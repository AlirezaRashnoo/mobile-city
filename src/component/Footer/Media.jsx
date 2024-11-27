import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";


function Media() {
    return ( 
        <>
                <a href="#">
                    <RiWhatsappFill className="size-6 fill-white"/>
                </a>
                <a href="#">
                    <RiInstagramFill className="size-6 fill-white"/>
                </a>
                <a href="#">
                    <SiTelegram className="size-6 fill-white"/>
                </a>
        </>
        
                  
     );
}

export default Media;