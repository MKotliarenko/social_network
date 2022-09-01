import React from 'react';
import preloader from "../../../assets/images/Spin-1s-167px.svg";



const Preloader = () => {
    return (
        <div>
            { <img src={preloader}/>}
        </div>
    );
};
export default Preloader;