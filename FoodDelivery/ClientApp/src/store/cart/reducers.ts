import { Action, Reducer } from "redux";
import { CartAction, CartItem, CartState } from "./types";


const unloadedState: CartState = { cartItems: [], numOfItems: 0, totalPrice: 0 };

const sumItems = (cartItems: CartItem[]) => {
	let numOfItems = cartItems.reduce((total, current) => total + current.quantity, 0);
	let totalPrice = cartItems.reduce((total, current) => total + (current.price * current.quantity), 0);
	return { numOfItems, totalPrice }
}

export const cartReducer: Reducer<CartState> = (state: CartState | undefined, incomingAction: Action): CartState => {
	if (state === undefined) {
		return unloadedState;
	}

	const action = incomingAction as CartAction;
	switch (action.type) {
		case 'ADD_TO_CART':
			if (!state.cartItems.find(item => item.dishId === action.cartItem.dishId)) {
				state.cartItems.push({
					...action.cartItem
				})
			}
			return {
				cartItems: state.cartItems,
				...sumItems(state.cartItems)
			};
		case 'ADD_ONE':
			state.cartItems[state.cartItems.findIndex(item => item.dishId === action.dishId)].quantity++;
			return {
				cartItems: state.cartItems,
				...sumItems(state.cartItems)
			};
		case 'REMOVE_ONE':
			let index = state.cartItems.findIndex(item => item.dishId === action.dishId);

			state.cartItems[index].quantity === 1 ?
				state.cartItems.splice(index, 1)
				: state.cartItems[index].quantity--;

			return {
				cartItems: state.cartItems,
				...sumItems(state.cartItems)
			};
		case 'REMOVE_ITEM':
			let cartItems = state.cartItems.filter(item => item.dishId !== action.dishId);
			return {
				cartItems: cartItems,
				...sumItems(cartItems)
			}
		case 'SUBMIT_ORDER':
			return {
				cartItems: [],
				numOfItems: 0,
				totalPrice: 0
			}
		default:
			return state;
	}
}
