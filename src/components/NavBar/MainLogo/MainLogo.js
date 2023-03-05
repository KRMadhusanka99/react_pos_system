import React from 'react';
import Style from './MainLogo.module.css'
import logo from '../../../assets/iCET_logo.png';

const MainLogo =  () => {
    return ( 
        <div className={Style.outer}>
            <img className={Style.logo} src={logo} alt="" />
        </div> 
    );
}

export default MainLogo;