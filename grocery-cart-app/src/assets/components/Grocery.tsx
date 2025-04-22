import { useEffect, useState } from "react";
import { CartItem, GroceryProp, NotificationState } from "../interface/groceryProp";
import { GroceryData } from "../data/groceryData";
import CartItemComponent from "./CartItem";
import GroceryItem from "./GroceryItem";



export default function GroceryApp() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [notification, setNotification] = useState<NotificationState>({show:false, message: ''})

    useEffect(() => {
        const savedCart = localStorage.getItem('groceryCart');
        if(savedCart){
            setCart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('groceryCart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (item: GroceryProp): void => {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }

      setNotification({ show: true, message: `Added ${item.name} to cart` });
      setTimeout(() => setNotification({ show: false, message: "" }), 2000);
    };

    const removeCart = (itemId: number): void => {
        setCart(cart.filter((item) => item.id !== itemId));
    }

     const updateQuantity = (itemId: number, newQuantity: number): void => {
       if (newQuantity < 1) {
         removeCart(itemId);
         return;
       }

       setCart(
         cart.map((item) =>
           item.id === itemId ? { ...item, quantity: newQuantity } : item
         )
       );
     };
       const calculateTotal = (): number => {
         return cart.reduce(
           (total, item) => total + item.price * item.quantity,
           0
         );
       };

       return (
         <div className="max-w-4xl mx-auto p-4">
           <h1 className="text-3xl font-bold mb-6 text-center text-pruple-600">
             Grocery Cart App
           </h1>

           <div className="flex flex-col md:flex-row gap-6">
             {/* Grocery Items Section */}
             <div className="md:w-1/2">
               <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">
                 Available Items
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {GroceryData.map((item) => (
                   <GroceryItem
                     key={item.id}
                     item={item}
                     addToCart={addToCart}
                   />
                 ))}
               </div>
             </div>

             {/* Cart Section */}
             <div className="md:w-1/2 bg-gray-50 p-4 rounded-lg">
               <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-300">
                 Shopping Cart
               </h2>

               {cart.length === 0 ? (
                 <p className="text-gray-500 text-center py-8">
                   Your cart is empty
                 </p>
               ) : (
                 <>
                   <div className="space-y-3 mb-4">
                     {cart.map((item) => (
                       <CartItemComponent
                         key={item.id}
                         item={item}
                         removeFromCart={removeCart}
                         updateQuantity={updateQuantity}
                       />
                     ))}
                   </div>

                   <div className="mt-6 pt-4 border-t border-gray-300">
                     <div className="flex justify-between items-center text-lg font-bold">
                       <span>Total:</span>
                       <span>${calculateTotal().toFixed(2)}</span>
                     </div>
                     <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition">
                       Checkout
                     </button>
                   </div>
                 </>
               )}
             </div>
           </div>

           {/* Notification Toast */}
           {notification.show && (
             <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
               {notification.message}
             </div>
           )}
         </div>
       );
       
}