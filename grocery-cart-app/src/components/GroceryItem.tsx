import React from 'react'
import { GroceryItemProps } from '../interface/groceryProp'

const GroceryItem = ({addToCart, item}: GroceryItemProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-green-600 font-bold my-2">${item.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-auto bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GroceryItem
