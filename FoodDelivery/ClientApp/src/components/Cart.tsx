import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import './Cart.css';
import { CartItem, CartState } from '../store/cart/types';
import { cartActionCreators } from '../store/cart/actions';
import { Button, Col, Container, FormControl, InputGroup, Jumbotron, ListGroup, Row } from '../../node_modules/react-bootstrap/cjs/index';
import { FaTrashAlt } from '../../node_modules/react-icons/fa/index';
import { ApplicationState } from '../store/index';

type CartProps = CartState
	& typeof cartActionCreators
	& RouteComponentProps<{}>;

class Cart extends React.PureComponent<CartProps> {
	private renderCartTable(cartItem: CartItem) {
		return (
			<ListGroup.Item key={cartItem.dish}>
				<Row style={{ alignItems: 'center' }}>
					<Col xs={9} sm={4} md={6} lg={6} xl={5}>
						<b className='dish-name'>{cartItem.dish}</b><br />
					</Col>
					<Col xs={3} sm={2} md={1} lg={1} xl={{ span: 1, offset: 2 }}>
						<b>${cartItem.price}</b>
					</Col>
					<Col xs={9} sm={4} md={4} lg={4} xl={3}>
						<InputGroup>
							<InputGroup.Prepend>
								{
									cartItem.quantity > 1 ?
										<Button className='changeQtyBtn' variant='danger' onClick={() => this.props.removeOneItem(cartItem.dishId)}><b>-</b></Button>
										: <Button className='changeQtyBtn' variant='danger' disabled><b>-</b></Button>
								}
							</InputGroup.Prepend>
							<FormControl className='inputQty w-15' value={cartItem.quantity} disabled />
							<InputGroup.Append>
								<Button className='changeQtyBtn' variant='success' onClick={() => this.props.addOneItem(cartItem.dishId)}>+</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
					<Col xs={3} sm={2} md={1} lg={1} xl={{ span: 1 }}>
						<Button className='removeBtn' onClick={() => this.props.removeItem(cartItem.dishId)}><FaTrashAlt color='black' /></Button>
					</Col>
				</Row>
			</ListGroup.Item>
			
		);
	}

	private renderCart() {
		return (
			this.props.numOfItems as number > 0 ?
				this.props.cartItems.map((cartItem: CartItem) =>
					<ListGroup variant='flush'>
						{this.renderCartTable(cartItem)}
					</ListGroup>
				)
				: <div style={{ textAlign: 'center' }}>
					<p>Your cart is empty</p>
					<Button variant='outline-secondary' as={Link} to='/menu'>Buy something</Button>
				</div>
		);
	}

	private renderSummary() {
		return (
			<Sticky stickyStyle={{marginTop: '4.5rem'}}>
				<Jumbotron style={{ padding: '1.5rem 3rem 1.5rem' }}>
					<Row>
						<p>Items: <b>{this.props.numOfItems as number}</b></p>
					</Row>
					<Row>
						<p>Total: <b>${this.props.totalPrice as number}</b></p><br />
					</Row>
					<Row>
						{
							this.props.numOfItems as number > 0 ?
								<Button as={Link} to='/cart/checkout' className='checkoutBtn' onClick={() => this.props.proceedToCheckout()}>Proceed to checkout</Button>
								: <Button disabled className='checkoutBtn'>Proceed to checkout</Button>
						}
					</Row>
				</Jumbotron>
			</Sticky>
		);
	}

	public render() {
		return (
			<Container>
				<Row>
					<Col xs={12} lg={9}>
						<Jumbotron>
							<h1 className='pageHeader'>Your cart</h1>
							{this.renderCart()}
						</Jumbotron>
					</Col>
					<Col xs={12} lg={3}>
						{this.renderSummary()}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default connect((state: ApplicationState) => state.cart, cartActionCreators)(Cart as any);
