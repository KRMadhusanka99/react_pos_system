import React, {useState} from 'react';
import Style from './FoodTypeTile.module.css';


const FoodTypeTile = (props) => {

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
            style={{backgroundColor: !mouseState ? props.defColour:props.chanColour}}    
        >
            <img className={Style.img} src={props.src} alt="" />
            <div className={Style.title_holder}>
                <span className={Style.main_title}>{props.heading}</span>
                <span className={Style.sub_title}>{props.subheading} Items</span>
            </div>
        </div>
    );
}

export default FoodTypeTile;