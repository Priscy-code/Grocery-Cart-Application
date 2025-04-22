export interface GroceryProp {
  id: number;
  name: string;
  price: number;
}

export interface NotificationState {
  show: boolean;
  message: string;
}

export interface CartItem extends GroceryProp {
  quantity: number;
}
