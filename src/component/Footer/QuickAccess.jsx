import React from "react";


function QuickAccess({textLink}) {
    return ( 
        <>
            <a href="#">
                <span className="w-2 h-[3px] bg-white"></span>
                {textLink}
            </a>
        </>
        
     );
}

export default QuickAccess;