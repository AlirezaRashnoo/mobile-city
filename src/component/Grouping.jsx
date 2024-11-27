import React from "react";


function Grouping({image,name}) {
    return (  
        <div>
            <a href="#" className="flex flex-col items-center gap-y-1">
                <img src={image} alt="img"/>
                <div><p>{name}</p></div>
            </a>
        </div>
    );
}

export default Grouping;