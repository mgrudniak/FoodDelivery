import { menuReducer } from './menu/reducers';
import { MenuState } from './menu/types';
import { cartReducer } from './cart/reducers';
import { CartState } from './cart/types';
import { CheckoutState } from './checkout/types';
import { checkoutReducer } from './checkout/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

export interface ApplicationState {
    menu: MenuState;
    cart: CartState;
    checkout: CheckoutState;
}

export const reducers = {
    menu: menuReducer,
    cart: cartReducer,
    checkout: checkoutReducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

export default function configureStore(history: History, initialState?: ApplicationState) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
