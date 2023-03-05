import React from "react";
import Style from "./FoodTileContainer.module.css";
import FoodTypeTile from "./FoodTypeTile";
import Breakfast from '../../assets/breakfast.png';
import Drinks1 from '../../assets/drink1.png';
import Drinks2 from '../../assets/drink2.png';
import Lunch from '../../assets/lunch.png';
import Dinner from '../../assets/dinner.png';
import Desserts from '../../assets/dessert.png';

const FoodTileContainer = () => {
    return ( 
        <div className={Style.container}>
            <FoodTypeTile src={Breakfast} heading = "Breakfast" subheading = "13" defColour="#B4FFF6" chanColour="#00FFE0"/>
            <FoodTypeTile src={Drinks1} heading = "Drinks" subheading = "5" defColour="#A4FFB8" chanColour="#78e08f"/>
            <FoodTypeTile src={Drinks2} heading = "Drinks" subheading = "5" defColour="#FFF6A4" chanColour="#f6b93b"/>
            <FoodTypeTile src={Lunch} heading = "Lunch" subheading = "25" defColour="#9BB7FF" chanColour="#4a69bd"/>
            <FoodTypeTile src={Dinner} heading = "Dinner" subheading = "25" defColour="#FFB4B4" chanColour="#cf6a87"/>
            <FoodTypeTile src={Desserts} heading = "Desserts" subheading = "5" defColour="#FC7CFF" chanColour="#82589F"/>
        </div>
     );
}

export default FoodTileContainer;