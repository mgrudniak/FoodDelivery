import { Action, Reducer } from "redux";
import { ReceiveMenuAction, MenuState } from "./types";

const unloadedState: MenuState = { menuItems: [], isLoading: true };

export const menuReducer: Reducer<MenuState> = (state: MenuState | undefined, incomingAction: Action): MenuState => {
	if (state === undefined) {
		return unloadedState;
	}

	const action = incomingAction as ReceiveMenuAction;
	switch (action.type) {
		case 'RECEIVE_MENU':
			return {
				menuItems: action.menuItems,
				isLoading: false,
			};
		default:
			return state;
	}
}
