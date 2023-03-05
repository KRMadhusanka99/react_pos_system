import React from "react";
import Style from './SearchBar.module.css';
import Img from '../../../assets/search.png'

const searchBar = () => {
    return ( 
        <div className={Style.outer}>
            <img className={Style.Image} src={Img} />
            <input className={Style.Input} type="text" placeholder="search" />
        </div>
     );
}

export default searchBar;