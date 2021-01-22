import { AppThunkAction } from "..";
import { CheckoutAction, SUBMIT_ORDER } from "./types";

export const checkoutActionCreators = {
	submitOrder: (): AppThunkAction<CheckoutAction> => (dispatch, getState) => {
		const appState = getState();

		appState.cart.cartItems.map(item => 
			appState.checkout.order.orderItems.push({
				dishId: item.dishId,
				quantity: item.quantity,
				notes: item.notes
			})
		);
		appState.checkout.order.totalPrice = appState.cart.totalPrice;

		appState.checkout.order.orderTime = new Date().toLocaleTimeString().substr(0, 5);

		console.log(JSON.stringify(appState.checkout.order));
		console.log(appState.checkout.order);

		const settings = {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(appState.checkout.order)
		}

		try {
			fetch('api/orders', settings)
				.then(response => response.json() as Promise<Response>)
				.then(data => { dispatch({ type: SUBMIT_ORDER, order: appState.checkout.order, success: data.ok }) })
		} catch (e) {
			dispatch({ type: SUBMIT_ORDER, order: appState.checkout.order, success: false })
		}

			
	}
}
