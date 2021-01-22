export interface CheckoutState {
	order: Order;
	formIsValid: boolean;
}

export interface Client {
	firstName: string;
	lastName: string;
	address: string;
	address2: string | null;
	city: string;
	state: string;
	zip: string;
	phone: string;
	email: string;
}

export interface OrderItem {
	dishId: string;
	quantity: number;
	notes: string | null;
}

export interface Order {
	client: Client;
	orderItems: OrderItem[];
	orderTime: string;
	deliveryTime: string | null;
	totalPrice: number;
}

export const SUBMIT_ORDER = 'SUBMIT_ORDER';

interface SubmitOrderAction {
	type: typeof SUBMIT_ORDER;
	order: Order;
	success: boolean;
}

export type CheckoutAction = SubmitOrderAction;
