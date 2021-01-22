import * as React from 'react';
import { Container, Dropdown, Nav, Navbar } from '../../node_modules/react-bootstrap/cjs/index';
import { Link, RouteComponentProps } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { CartState } from '../store/cart/types';
import { cartActionCreators } from '../store/cart/actions';
import { MdShoppingCart } from '../../node_modules/react-icons/md/index';
import { createStyles, Theme, withStyles } from '../../node_modules/@material-ui/core/styles/index';
import { Badge } from '../../node_modules/@material-ui/core/index';
import { ApplicationState } from '../store/index';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -2,
            top: 16,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 0',
            fontWeight: 'bold',
            fontSize: '0.7rem',
        },
    }),
)(Badge);

type CartProps = CartState
    & typeof cartActionCreators
    & RouteComponentProps<{}>;

class Header extends React.PureComponent<CartProps> {
    public state = {
        dropdownOpen: false
    };

    private onMouseOver = () => {
        this.setState({
            dropdownOpen: true
        });
    }

    private onMouseLeave = () => {
        this.setState({
            dropdownOpen: false
        });
    }

    public render() {
        return (
            <header>
                <Navbar collapseOnSelect fixed='top' expand='md' bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand as={Link} to='/'>Food Delivery</Navbar.Brand>
                        <Navbar.Toggle className='mr-2' />
                        <Navbar.Collapse>
                            <Nav className='ml-auto' style={{ alignItems: 'center' }}>
                                <Nav.Link as={Link} className='text-dark' to="/">Home</Nav.Link>
                                <Dropdown show={this.state.dropdownOpen} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                                    <Dropdown.Toggle as={Link} to="/about-us" id='nav-dropdown-toggle' className='text-dark'>About us</Dropdown.Toggle>
                                    <Dropdown.Menu className='nav-dropdown-menu'>
                                        <Dropdown.Item>
                                            <Nav.Link as={Link} className='text-dark' to='/about-us/history'>History</Nav.Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Nav.Link as={Link} className='text-dark' to='/about-us/gallery'>Gallery</Nav.Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Nav.Link as={Link} className="text-dark" to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} className="text-dark" to="/menu">Menu</Nav.Link>
                                <Nav.Link as={Link} className="text-dark" to="/cart">
                                    <StyledBadge badgeContent={this.props.numOfItems} color='error'>
                                        <MdShoppingCart size={20} />
                                    </StyledBadge>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default connect((state: ApplicationState) => state.cart, cartActionCreators)(Header as any);
