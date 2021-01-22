import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { MenuItem } from '../store/menu/types';
import { ApplicationState } from '../store';
import './Menu.css';
import { cartActionCreators } from '../store/cart/actions';
import { CartItem } from '../store/cart/types';
import { Button, Col, Container, FormControl, InputGroup, Jumbotron, Row } from '../../node_modules/react-bootstrap/cjs/index';

type MenuProps = ApplicationState
	& typeof cartActionCreators 
	& RouteComponentProps<{}>;

class Menu extends React.PureComponent<MenuProps> {
	public componentDidMount() {
		this.props.requestMenu();
	}

	private toCartItem(menuItem: MenuItem) {
		return {
			dishId: menuItem.dishId,
			dish: menuItem.dish,
			price: menuItem.price,
			dishType: menuItem.dishType,
			order: 0,
			quantity: 1,
			notes: ''
		}
	}

	private isInCart(menuItem: MenuItem) {
		let cartItems = this.props.cart.cartItems as CartItem[];
		return cartItems.find(item => item.dishId === menuItem.dishId) ? true : false;
	}

	private getQuantity(menuItem: MenuItem) {
		let cartItems = this.props.cart.cartItems as CartItem[];
		return cartItems.find(item => item.dishId === menuItem.dishId)?.quantity;
	}

	private renderMenuTable() {
		let dishTypes = this.props.menu.menuItems.filter((value, index, array) => array.map(menuItem => menuItem.dishType).indexOf(value.dishType) === index);

		return (
			<Container className='menuContainer'>
				{dishTypes.map((dishType) =>
					<div key={dishType.dishType}>
						<Row className='dishTypeRow'><h3>{dishType.dishType}s</h3></Row>
						<hr id='separator' />
						{this.props.menu.menuItems.map((menuItem: MenuItem) => {
							return menuItem.dishType === dishType.dishType &&
								<Row className='menuRow' key={menuItem.dish}>
									<Col sm={6} md={7}>
										<b className='dishName'>{menuItem.dish}</b> <i>{menuItem.amount}</i> {menuItem.vegan}<br />
										{menuItem.description}
									</Col>
									<Col sm={2} md={{ span: 1, offset: 1 }} className='colAlignItems'>
										<b style={{ fontSize: '1.2em' }}>${menuItem.price}</b>
									</Col>
									<Col sm={4} md={{ span: 2, offset: 1 }}>
									{
										!this.isInCart(menuItem) ?
											<Button className='addToCartBtn' variant='success' onClick={() => this.props.addToCart(this.toCartItem(menuItem))}>Add to cart</Button>
											: <InputGroup className='menuInputGroup'>
												<InputGroup.Prepend>
													<Button className='changeQtyBtn' variant='danger' onClick={() => this.props.removeOneItem(menuItem.dishId)}><b>-</b></Button>
												</InputGroup.Prepend>
												<FormControl className='inputQty' value={this.getQuantity(menuItem)} disabled />
												<InputGroup.Append>
													<Button className='changeQtyBtn' variant='success' onClick={() => this.props.addOneItem(menuItem.dishId)}>+</Button>
												</InputGroup.Append>
											</InputGroup>
									}
									</Col>
								</Row>
						})}
					</div>
				)}
			</Container>
		);
	}

	public render() {
		return (
			<React.Fragment>
				<Jumbotron>
					<h1 id='tableLabel'>Menu</h1>
					{this.renderMenuTable()}
					{this.props.menu.isLoading && <span>Loading...</span>}
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default connect((state: ApplicationState) => state, cartActionCreators)(Menu as any);
