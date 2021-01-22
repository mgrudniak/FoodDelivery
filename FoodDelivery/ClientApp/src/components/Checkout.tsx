import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Sticky from 'react-sticky-el';
import { checkoutActionCreators } from '../store/checkout/actions';
import { Button, Col, Form, Jumbotron, Row } from '../../node_modules/react-bootstrap/cjs/index';
import { ApplicationState } from '../store/index';

type CheckoutProps = ApplicationState
	& typeof checkoutActionCreators
	& RouteComponentProps<{}>;


class Checkout extends React.PureComponent<CheckoutProps, {isvalid: boolean}> {
	constructor(props: CheckoutProps) {
		super(props);

		this.onFirstNameChange = this.onFirstNameChange.bind(this);

		this.state = { isvalid: false };
	}

	private onFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.props.checkout.order.client.firstName = event.target.value
	}

	private getTime(minutes = 1) {
		let timeString = new Date(new Date().setTime(new Date().getTime() + (minutes * 60 * 1000))).toLocaleTimeString();
		return timeString.substr(0, 5);
	}

	private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		this.setState({ isvalid: true });
		this.props.submitOrder();
	}

	private renderForm() {
		return (
			<Form id='clientForm' noValidate validated={this.state.isvalid} onSubmit={event => this.handleSubmit(event)}>
				<Form.Row>
					<Form.Group as={Col} md={6}>
						<Form.Label>First Name</Form.Label>
						<Form.Control type='text' placeholder='John' isValid={false} onChange={(e) => this.props.checkout.order.client.firstName = e.target.value} required />
						<Form.Control.Feedback type='invalid'>Please provide your first name.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md={6}>
						<Form.Label>Last Name</Form.Label>
						<Form.Control placeholder='Smith' onChange={(e) => this.props.checkout.order.client.lastName = e.target.value} required />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md={6}>
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder='123 Mulholland Dr' onChange={(e) => this.props.checkout.order.client.address = e.target.value} required />
					</Form.Group>
					<Form.Group as={Col} md={6}>
						<Form.Label>Address 2</Form.Label>
						<Form.Control placeholder='Apartment, studio, or floor' onChange={(e) => this.props.checkout.order.client.address2 = e.target.value} />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md={6}>
						<Form.Label>City</Form.Label>
						<Form.Control placeholder='Los Angeles' onChange={(e) => this.props.checkout.order.client.city = e.target.value} required />
					</Form.Group>
					<Form.Group as={Col} md={4}>
						<Form.Label>State</Form.Label>
						<Form.Control placeholder='CA' onChange={(e) => this.props.checkout.order.client.state = e.target.value} required />
					</Form.Group>
					<Form.Group as={Col} md={2}>
						<Form.Label>Zip</Form.Label>
						<Form.Control placeholder='90068' onChange={(e) => this.props.checkout.order.client.zip = e.target.value} required />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md={6}>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control placeholder='+1 987 654 321 0' type='tel' onChange={(e) => this.props.checkout.order.client.phone = e.target.value} required />
					</Form.Group>
					<Form.Group as={Col} md={6}>
						<Form.Label>E-mail</Form.Label>
						<Form.Control placeholder='john.smith@example.com' type='email' onChange={(e) => this.props.checkout.order.client.email = e.target.value} required />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} md={3} xl={2}>
						<Form.Label>Delivery Time</Form.Label>
						<Form.Control type='time' defaultValue={this.getTime(30)} onChange={(e) => this.props.checkout.order.deliveryTime = e.target.value} />
					</Form.Group>
				</Form.Row>
			</Form>
		);
	}

	private renderSummary() {
		return (
			<Sticky stickyStyle={{ marginTop: '4.5rem' }}>
				<Jumbotron style={{ padding: '1.5rem 3rem 1.5rem' }}>
					<Row>
						<p>Total price: <b>${this.props.cart.totalPrice}</b></p><br />
					</Row>
					<Row>
						<p>Delivery: <b>FREE</b></p><br />
					</Row>
					<Row>
						{
							this.props.cart.numOfItems > 0 ?
								<Button form='clientForm' type='submit' block>Submit order</Button>
								: <Button disabled block>Submit order</Button>
						}
					</Row>
				</Jumbotron>
			</Sticky>
		);
	}

	public render() {
		return (
			<React.Fragment>
				<Row>
					<Col xs={12} lg={9}>
						<Jumbotron>
							<h1 id='tableLabel'>Checkout</h1>
							{this.renderForm()}
						</Jumbotron>
					</Col>
					<Col xs={12} lg={3}>
						{this.renderSummary()}
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default connect((state: ApplicationState) => state, checkoutActionCreators)(Checkout as any)
