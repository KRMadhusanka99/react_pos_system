import React, {useState} from 'react';
import Style from './FoodTypeTile.module.css';
import Breakfast from '../../assets/breakfast.png';

const FoodTypeTile = () => {

    const [mouseState, setMouseEnter] = useState(false);

    const mouseEnterHandler = () =>{
        setMouseEnter(true);
    }

    const mouseLeaveHandler = () =>{
        setMouseEnter(false);
    }

    return (  
        <div 
            className={Style.outer} 
            onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler}
            style={{backgroundColor: !mouseState ? "#B4FFF6":"red"}}    
        >
            <img className={Style.img} src={Breakfast} alt="" />
            <div className={Style.title_holder}>
                <span className={Style.main_title}>Breakfast</span>
                <span className={Style.sub_title}>13 Items</span>
            </div>
        </div>
    );
}

export default FoodTypeTile;