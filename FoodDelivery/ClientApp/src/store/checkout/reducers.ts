import { Action, Reducer } from "redux";
import { CheckoutAction, CheckoutState } from "./types";

const unloadedState: CheckoutState = {
	order: {
		client: { firstName: '', lastName: '', address: '', address2: null, city: '', state: '', zip: '', phone: '', email: '' },
		orderItems: [],
		orderTime: '',
		deliveryTime: null,
		totalPrice: 0
	},
	formIsValid: false
};

export const checkoutReducer: Reducer<CheckoutState> = (state: CheckoutState | undefined, incomingAction: Action): CheckoutState => {
	if (state === undefined) {
		return unloadedState;
	}

	const action = incomingAction as CheckoutAction;
	switch (action.type) {
		case 'SUBMIT_ORDER':
			if (action.success) {
				return {
					order: {
						client: { firstName: '', lastName: '', address: '', address2: null, city: '', state: '', zip: '', phone: '', email: '' },
						orderItems: [],
						orderTime: '',
						deliveryTime: null,
						totalPrice: 0
					},
					formIsValid: false
				};
			}

			return {
				...state
			};
		default:
			return state;
	}
}
