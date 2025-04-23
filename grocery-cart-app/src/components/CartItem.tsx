import React from 'react'
import { CartItemProps } from '../interface/groceryProp'

const CartItemComponent = ({item, removeFromCart, updateQuantity,}:CartItemProps) => {
  return (
    <div className="flex items-center justify-between !bg-white p-3 rounded-md shadow-sm">
      <div className="flex items-center">
        <div>
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 text-gray-700 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 text-gray-700 hover:bg-gray-100"
          >
            {" "}
            +{" "}
          </button>
        </div>

        <span className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button onClick={() => removeFromCart(item.id)} className='text-red-500 hover:text-red-700 ml-2'>✕</button>
      </div>
    </div>
  );
}

export default CartItemComponent
