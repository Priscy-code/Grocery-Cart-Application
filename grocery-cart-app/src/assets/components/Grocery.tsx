import { useEffect, useState } from "react";
import { CartItem, NotificationState } from "../interface/groceryProp";
import { GroceryData } from "../data/groceryData";

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

    const addToCart = (item:GroceryData): void => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if(existingItem) {
            setCart( cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1}: cartItem))
        } else {
            setCart([...cart, { ...item, quantity:1}])
        };

        setNotification({ show:true, message: `Added ${item.name} to cart`});
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
}