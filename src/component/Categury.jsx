import React from "react";


function Categury({image}) {
    return (  
        <div>
            <a href="#">
                <img className="rounded-xl w-full max-h-44 sm:h-48 lg:h-60" src={image}c alt="img_categuri"/>
            </a>
        </div>
    );
}

export default Categury;