import { GroceryProp } from "../interface/groceryProp";
import Banana from '../assets/image/banana.jpg'
import Apple from '../assets/image/apple.jpg'
import Milk from '../assets/image/milk.jpg'
import Bread from '../assets/image/bread.jpg'
import Rice from '../assets/image/rice.jpg'
import Cheese from '../assets/image/cheese.jpg'
import Egg from '../assets/image/egg.jpg'

export const GroceryData: GroceryProp[] = [
  { id: 1, name: "Milk", price: 3.99, image:Milk },
  { id: 2, name: "Bread", price: 2.49, image: Bread },
  { id: 3, name: "Eggs", price: 4.99, image:Egg },
  { id: 4, name: "Apples", price: 1.99, image:Apple },
  { id: 5, name: "Rice", price: 5.99, image:Rice },
  { id: 6, name: "Bananas", price: 0.99, image:Banana },
  { id: 7, name: "Cheese", price: 6.49, image:Cheese },
];
