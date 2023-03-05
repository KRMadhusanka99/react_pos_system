import React from "react";
import Style from "./RecentOrderRecord.module.css"

const RecentOrders = () => {
    return ( 
        <div className={Style.recordContainer} >
            <span className={Style.orderID} >#O-1232</span>         
            <span className={Style.status}>IN-PROGRESS</span>
        </div>
     );
}

export default RecentOrders;