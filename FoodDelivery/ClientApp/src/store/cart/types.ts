export interface CartState {
	cartItems: CartItem[];
	numOfItems: number;
	totalPrice: number;
}

export interface CartItem {
	dishId: string;
	dish: string;
	price: number;
	dishType: string;
	quantity: number;
	notes: string;
}


export interface Client {
	firstName: string;
	lastName: string;
	address: string;
	address2: string;
	city: string;
	state: string;
	zip: string;
	phone: string;
	email: string;
}

export interface OrderItem {
	dishId: string;
	quantity: number;
	notes: string;
}

export interface Order {
	client: Client;
	orderItems: OrderItem[];
	orderTime: number;
	deliveryTime: number;
	totalPrice: number;
}

export const SUBMIT_ORDER = 'SUBMIT_ORDER';

interface SubmitOrderAction {
	type: typeof SUBMIT_ORDER;
	order: Order;
}


export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_ONE = 'ADD_ONE';
export const REMOVE_ONE = 'REMOVE_ONE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const PROCEED_TO_CHECKOUT = 'PROCEED_TO_CHECKOUT';

interface AddToCartAction {
	type: typeof ADD_TO_CART;
	cartItem: CartItem;
}

interface AddOneItemAction {
	type: typeof ADD_ONE;
	dishId: string;
}

interface RemoveOneItemAction {
	type: typeof REMOVE_ONE;
	dishId: string;
}

interface RemoveItemAction {
	type: typeof REMOVE_ITEM;
	dishId: string;
}

interface ProceedToCheckoutAction {
	type: typeof PROCEED_TO_CHECKOUT;
	cartState: CartState;
}

export type CartAction = AddToCartAction | AddOneItemAction | RemoveOneItemAction | RemoveItemAction | ProceedToCheckoutAction | SubmitOrderAction;
