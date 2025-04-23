export interface GroceryProp {
  id: number;
  name: string;
  price: number;
  image: string
}

export interface NotificationState {
  show: boolean;
  message: string;
}

export interface CartItem extends GroceryProp {
  quantity: number;
}

export interface CartItemProps {
  item: CartItem;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
}

export interface GroceryItemProps {
  item: GroceryProp;
  addToCart: (item: GroceryProp) => void;
}
