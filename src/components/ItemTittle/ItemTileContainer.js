import React from 'react';
import Style from './ItemTileContainer.module.css';
import SingleItemTile from './SingleItem';

const ItemTileContainer = () => {
   return (
      <div className={Style.outer} >
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
         <SingleItemTile />
      </div>
   );
}

export default ItemTileContainer;