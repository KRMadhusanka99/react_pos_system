import React from 'react';
import Style from './FoodTypeTile.module.css';
import Breakfast from '../../assets/breakfast.png';

const FoodTypeTile = () => {
    return (  
        <div>
            <img src={Breakfast} alt="" />
        </div>
    );
}

export default FoodTypeTile;