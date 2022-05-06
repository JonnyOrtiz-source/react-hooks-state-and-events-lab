import React, { useState } from 'react';

function Item({ name, category }) {
   const [mode, setMode] = useState(true);
   const btnClass = mode ? '' : 'in-cart';
   function handleItem() {
      setMode((mode) => !mode);
   }
   return (
      <li className="">
         <span>{name}</span>
         <span className="category">{category}</span>
         <button className={btnClass} onClick={handleItem}>
            {mode ? 'Add to Cart' : 'Remove from Cart'}
         </button>
      </li>
   );
}

export default Item;
