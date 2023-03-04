import React from "react";
import Style from "./FoodTileContainer.module.css";
import FoodTypeTile from "./FoodTypeTile";

const FoodTileContainer = () => {
    return ( 
        <div className={Style.container}>
            <FoodTypeTile heading = "Breakfast" subheading = "13" defColour="#B4FFF6" chanColour="#00FFE0"/>
            <FoodTypeTile heading = "Drinks" subheading = "5" defColour="#A4FFB8" chanColour="#78e08f"/>
            <FoodTypeTile heading = "Drinks" subheading = "5" defColour="#FFF6A4" chanColour="#f6b93b"/>
            <FoodTypeTile heading = "Lunch" subheading = "25" defColour="#9BB7FF" chanColour="#4a69bd"/>
            <FoodTypeTile heading = "Dinner" subheading = "25" defColour="#FFB4B4" chanColour="#cf6a87"/>
            <FoodTypeTile heading = "Desserts" subheading = "5" defColour="#FC7CFF" chanColour="#82589F"/>
        </div>
     );
}

export default FoodTileContainer;