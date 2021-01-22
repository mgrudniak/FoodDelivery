import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import './Cart.css';
import { cartActionCreators } from '../store/cart/actions';
import { Button, Col, Container, FormControl, InputGroup, Jumbotron, ListGroup, Row } from '../../node_modules/react-bootstrap/cjs/index';
import { FaTrashAlt } from '../../node_modules/react-icons/fa/index';
class Cart extends React.PureComponent {
    renderCartTable(cartItem) {
        return (React.createElement(ListGroup.Item, { key: cartItem.dish },
            React.createElement(Row, { style: { alignItems: 'center' } },
                React.createElement(Col, { xs: 9, sm: 4, md: 6, lg: 6, xl: 5 },
                    React.createElement("b", { className: 'dish-name' }, cartItem.dish),
                    React.createElement("br", null)),
                React.createElement(Col, { xs: 3, sm: 2, md: 1, lg: 1, xl: { span: 1, offset: 2 } },
                    React.createElement("b", null,
                        "$",
                        cartItem.price)),
                React.createElement(Col, { xs: 9, sm: 4, md: 4, lg: 4, xl: 3 },
                    React.createElement(InputGroup, null,
                        React.createElement(InputGroup.Prepend, null, cartItem.quantity > 1 ?
                            React.createElement(Button, { className: 'changeQtyBtn', variant: 'danger', onClick: () => this.props.removeOneItem(cartItem.dishId) },
                                React.createElement("b", null, "-"))
                            : React.createElement(Button, { className: 'changeQtyBtn', variant: 'danger', disabled: true },
                                React.createElement("b", null, "-"))),
                        React.createElement(FormControl, { className: 'inputQty w-15', value: cartItem.quantity, disabled: true }),
                        React.createElement(InputGroup.Append, null,
                            React.createElement(Button, { className: 'changeQtyBtn', variant: 'success', onClick: () => this.props.addOneItem(cartItem.dishId) }, "+")))),
                React.createElement(Col, { xs: 3, sm: 2, md: 1, lg: 1, xl: { span: 1 } },
                    React.createElement(Button, { className: 'removeBtn', onClick: () => this.props.removeItem(cartItem.dishId) },
                        React.createElement(FaTrashAlt, { color: 'black' }))))));
    }
    renderCart() {
        return (this.props.numOfItems > 0 ?
            this.props.cartItems.map((cartItem) => React.createElement(ListGroup, { variant: 'flush' }, this.renderCartTable(cartItem)))
            : React.createElement("div", { style: { textAlign: 'center' } },
                React.createElement("p", null, "Your cart is empty"),
                React.createElement(Button, { variant: 'outline-secondary', as: Link, to: '/menu' }, "Buy something")));
    }
    renderSummary() {
        return (React.createElement(Sticky, { stickyStyle: { marginTop: '4.5rem' } },
            React.createElement(Jumbotron, { style: { padding: '1.5rem 3rem 1.5rem' } },
                React.createElement(Row, null,
                    React.createElement("p", null,
                        "Items: ",
                        React.createElement("b", null, this.props.numOfItems))),
                React.createElement(Row, null,
                    React.createElement("p", null,
                        "Total: ",
                        React.createElement("b", null,
                            "$",
                            this.props.totalPrice)),
                    React.createElement("br", null)),
                React.createElement(Row, null, this.props.numOfItems > 0 ?
                    React.createElement(Button, { as: Link, to: '/cart/checkout', className: 'checkoutBtn', onClick: () => this.props.proceedToCheckout() }, "Proceed to checkout")
                    : React.createElement(Button, { disabled: true, className: 'checkoutBtn' }, "Proceed to checkout")))));
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Row, null,
                React.createElement(Col, { xs: 12, lg: 9 },
                    React.createElement(Jumbotron, null,
                        React.createElement("h1", { className: 'pageHeader' }, "Your cart"),
                        this.renderCart())),
                React.createElement(Col, { xs: 12, lg: 3 }, this.renderSummary()))));
    }
}
export default connect((state) => state.cart, cartActionCreators)(Cart);
//# sourceMappingURL=Cart.js.map