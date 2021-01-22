export interface MenuState {
	menuItems: MenuItem[];
	isLoading: boolean;
}

export interface MenuItem {
	dishId: string;
	dish: string;
	price: number;
	amount: number;
	vegan: boolean;
	description: string;
	dishType: string;
	order: number;
}

export interface ReceiveMenuAction {
	type: 'RECEIVE_MENU';
	menuItems: MenuItem[];
}
