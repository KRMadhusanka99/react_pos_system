import React from "react";
import Style from "./SingleItem.module.css"

const SingleItem = () => {
    return ( 
        <div className={Style.container}>
			<span className={Style.timeTitle}>15 Minutes</span>
			<div className={Style.foodTitles} >
				<span className={Style.mainTitle}>Roast Chicken Buriyani</span>
				<span className={Style.subTitle}>Rs. 500.00</span>
			</div>
		</div>
     );
}

export default SingleItem;