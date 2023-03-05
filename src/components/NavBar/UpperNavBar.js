import React from "react";
import MainLogo from "./MainLogo/MainLogo";
import SearchBar from "./SearchBar/SearchBar";
import Style from "./UpperNavBar.module.css";

const UpperNavBar = () => {
    return ( 
        <div className={Style.Nav}>
            <MainLogo />
            <SearchBar />
        </div>
     );
}

export default UpperNavBar;