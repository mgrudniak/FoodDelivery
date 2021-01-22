import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Menu from './components/Menu';
import History from './components/History';
import Gallery from './components/Gallery';
import './App.css';
export default () => (React.createElement(Layout, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: '/', component: Home }),
        React.createElement(Route, { path: '/menu', component: Menu }),
        React.createElement(Route, { exact: true, path: '/about-us', component: AboutUs }),
        React.createElement(Route, { path: '/about-us/history', component: History }),
        React.createElement(Route, { path: '/about-us/gallery', component: Gallery }),
        React.createElement(Route, { path: '/contact', component: Contact }),
        React.createElement(Route, { exact: true, path: '/cart', component: Cart }),
        React.createElement(Route, { path: '/cart/checkout', component: Checkout }))));
//# sourceMappingURL=App.js.map