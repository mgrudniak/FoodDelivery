import * as React from 'react';
import { Container, Dropdown, Nav, Navbar } from '../../node_modules/react-bootstrap/cjs/index';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { cartActionCreators } from '../store/cart/actions';
import { MdShoppingCart } from '../../node_modules/react-icons/md/index';
import { createStyles, withStyles } from '../../node_modules/@material-ui/core/styles/index';
import { Badge } from '../../node_modules/@material-ui/core/index';
const StyledBadge = withStyles((theme) => createStyles({
    badge: {
        right: -2,
        top: 16,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 0',
        fontWeight: 'bold',
        fontSize: '0.7rem',
    },
}))(Badge);
class Header extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            dropdownOpen: false
        };
        this.onMouseOver = () => {
            this.setState({
                dropdownOpen: true
            });
        };
        this.onMouseLeave = () => {
            this.setState({
                dropdownOpen: false
            });
        };
    }
    render() {
        return (React.createElement("header", null,
            React.createElement(Navbar, { collapseOnSelect: true, fixed: 'top', expand: 'md', bg: 'light', variant: 'light' },
                React.createElement(Container, null,
                    React.createElement(Navbar.Brand, { as: Link, to: '/' }, "Food Delivery"),
                    React.createElement(Navbar.Toggle, { className: 'mr-2' }),
                    React.createElement(Navbar.Collapse, null,
                        React.createElement(Nav, { className: 'ml-auto', style: { alignItems: 'center' } },
                            React.createElement(Nav.Link, { as: Link, className: 'text-dark', to: "/" }, "Home"),
                            React.createElement(Dropdown, { show: this.state.dropdownOpen, onMouseEnter: this.onMouseOver, onMouseLeave: this.onMouseLeave },
                                React.createElement(Dropdown.Toggle, { as: Link, to: "/about-us", id: 'nav-dropdown-toggle', className: 'text-dark' }, "About us"),
                                React.createElement(Dropdown.Menu, { className: 'nav-dropdown-menu' },
                                    React.createElement(Dropdown.Item, null,
                                        React.createElement(Nav.Link, { as: Link, className: 'text-dark', to: '/about-us/history' }, "History")),
                                    React.createElement(Dropdown.Item, null,
                                        React.createElement(Nav.Link, { as: Link, className: 'text-dark', to: '/about-us/gallery' }, "Gallery")))),
                            React.createElement(Nav.Link, { as: Link, className: "text-dark", to: "/contact" }, "Contact"),
                            React.createElement(Nav.Link, { as: Link, className: "text-dark", to: "/menu" }, "Menu"),
                            React.createElement(Nav.Link, { as: Link, className: "text-dark", to: "/cart" },
                                React.createElement(StyledBadge, { badgeContent: this.props.numOfItems, color: 'error' },
                                    React.createElement(MdShoppingCart, { size: 20 })))))))));
    }
}
export default connect((state) => state.cart, cartActionCreators)(Header);
//# sourceMappingURL=Header.js.map