import { AppThunkAction } from "..";
import { MenuItem, ReceiveMenuAction } from "../menu/types";
import { ADD_ONE, ADD_TO_CART, CartAction, CartItem, PROCEED_TO_CHECKOUT, REMOVE_ITEM, REMOVE_ONE } from "./types";

export const cartActionCreators = {
	requestMenu: (): AppThunkAction<ReceiveMenuAction> => (dispatch, getState) => {
		const appState = getState();
		if (appState && appState.menu) {
			fetch('api/menu')
				.then(response => response.json() as Promise<MenuItem[]>)
				.then(data => {
					dispatch({ type: 'RECEIVE_MENU', menuItems: data });
				});
		}
	},
	addToCart: (cartItem: CartItem): CartAction => {
		return { type: ADD_TO_CART, cartItem: cartItem };
	},
	addOneItem: (dishId: string): CartAction => {
		return { type: ADD_ONE, dishId: dishId };
	},
	removeOneItem: (dishId: string): CartAction => {
		return { type: REMOVE_ONE, dishId: dishId };
	},
	removeItem: (dishId: string): CartAction => {
		return { type: REMOVE_ITEM, dishId: dishId };
	},
	proceedToCheckout: (): AppThunkAction<CartAction> => (dispatch, getState) => {
		const appState = getState();
		if (appState && appState.cart.cartItems) {
			dispatch({ type: PROCEED_TO_CHECKOUT, cartState: appState.cart });
		}
	},

}
