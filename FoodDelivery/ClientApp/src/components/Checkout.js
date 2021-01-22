import * as React from 'react';
import { connect } from 'react-redux';
import Sticky from 'react-sticky-el';
import { checkoutActionCreators } from '../store/checkout/actions';
import { Button, Col, Form, Jumbotron, Row } from '../../node_modules/react-bootstrap/cjs/index';
class Checkout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.state = { isvalid: false };
    }
    onFirstNameChange(event) {
        this.props.checkout.order.client.firstName = event.target.value;
    }
    getTime(minutes = 1) {
        let timeString = new Date(new Date().setTime(new Date().getTime() + (minutes * 60 * 1000))).toLocaleTimeString();
        return timeString.substr(0, 5);
    }
    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.setState({ isvalid: true });
        this.props.submitOrder();
    }
    renderForm() {
        return (React.createElement(Form, { id: 'clientForm', noValidate: true, validated: this.state.isvalid, onSubmit: event => this.handleSubmit(event) },
            React.createElement(Form.Row, null,
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "First Name"),
                    React.createElement(Form.Control, { type: 'text', placeholder: 'John', isValid: false, onChange: (e) => this.props.checkout.order.client.firstName = e.target.value, required: true }),
                    React.createElement(Form.Control.Feedback, { type: 'invalid' }, "Please provide your first name.")),
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "Last Name"),
                    React.createElement(Form.Control, { placeholder: 'Smith', onChange: (e) => this.props.checkout.order.client.lastName = e.target.value, required: true }))),
            React.createElement(Form.Row, null,
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "Address"),
                    React.createElement(Form.Control, { placeholder: '123 Mulholland Dr', onChange: (e) => this.props.checkout.order.client.address = e.target.value, required: true })),
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "Address 2"),
                    React.createElement(Form.Control, { placeholder: 'Apartment, studio, or floor', onChange: (e) => this.props.checkout.order.client.address2 = e.target.value }))),
            React.createElement(Form.Row, null,
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "City"),
                    React.createElement(Form.Control, { placeholder: 'Los Angeles', onChange: (e) => this.props.checkout.order.client.city = e.target.value, required: true })),
                React.createElement(Form.Group, { as: Col, md: 4 },
                    React.createElement(Form.Label, null, "State"),
                    React.createElement(Form.Control, { placeholder: 'CA', onChange: (e) => this.props.checkout.order.client.state = e.target.value, required: true })),
                React.createElement(Form.Group, { as: Col, md: 2 },
                    React.createElement(Form.Label, null, "Zip"),
                    React.createElement(Form.Control, { placeholder: '90068', onChange: (e) => this.props.checkout.order.client.zip = e.target.value, required: true }))),
            React.createElement(Form.Row, null,
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "Phone Number"),
                    React.createElement(Form.Control, { placeholder: '+1 987 654 321 0', type: 'tel', onChange: (e) => this.props.checkout.order.client.phone = e.target.value, required: true })),
                React.createElement(Form.Group, { as: Col, md: 6 },
                    React.createElement(Form.Label, null, "E-mail"),
                    React.createElement(Form.Control, { placeholder: 'john.smith@example.com', type: 'email', onChange: (e) => this.props.checkout.order.client.email = e.target.value, required: true }))),
            React.createElement(Form.Row, null,
                React.createElement(Form.Group, { as: Col, md: 3, xl: 2 },
                    React.createElement(Form.Label, null, "Delivery Time"),
                    React.createElement(Form.Control, { type: 'time', defaultValue: this.getTime(30), onChange: (e) => this.props.checkout.order.deliveryTime = e.target.value })))));
    }
    renderSummary() {
        return (React.createElement(Sticky, { stickyStyle: { marginTop: '4.5rem' } },
            React.createElement(Jumbotron, { style: { padding: '1.5rem 3rem 1.5rem' } },
                React.createElement(Row, null,
                    React.createElement("p", null,
                        "Total price: ",
                        React.createElement("b", null,
                            "$",
                            this.props.cart.totalPrice)),
                    React.createElement("br", null)),
                React.createElement(Row, null,
                    React.createElement("p", null,
                        "Delivery: ",
                        React.createElement("b", null, "FREE")),
                    React.createElement("br", null)),
                React.createElement(Row, null, this.props.cart.numOfItems > 0 ?
                    React.createElement(Button, { form: 'clientForm', type: 'submit', block: true }, "Submit order")
                    : React.createElement(Button, { disabled: true, block: true }, "Submit order")))));
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Row, null,
                React.createElement(Col, { xs: 12, lg: 9 },
                    React.createElement(Jumbotron, null,
                        React.createElement("h1", { id: 'tableLabel' }, "Checkout"),
                        this.renderForm())),
                React.createElement(Col, { xs: 12, lg: 3 }, this.renderSummary()))));
    }
}
export default connect((state) => state, checkoutActionCreators)(Checkout);
//# sourceMappingURL=Checkout.js.map