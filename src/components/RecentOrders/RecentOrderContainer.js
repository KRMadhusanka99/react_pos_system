import React from "react";
import RecentOrderRecord from "./RecentOrderRecord";
import Style from "./RecentOrderContainer.module.css"

const RecentOrdersContainer = () => {
    return ( 
        <div className={Style.container} >
         <span className={Style.title} >RECENT ORDERS</span>
            <RecentOrderRecord />
            <RecentOrderRecord />
            <RecentOrderRecord />
            <RecentOrderRecord />
            <RecentOrderRecord />
      </div>
     );
}

export default RecentOrdersContainer;