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


export default () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route path='/about-us/history' component={History} />
            <Route path='/about-us/gallery' component={Gallery} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/cart' component={Cart} />
            <Route path='/cart/checkout' component={Checkout} />
        </Switch>
    </Layout>
);
