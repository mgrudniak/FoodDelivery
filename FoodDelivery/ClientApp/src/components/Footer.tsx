import * as React from 'react';
import { Container, Row, Col } from '../../node_modules/react-bootstrap/cjs/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaEnvelope } from '../../node_modules/react-icons/fa/index';

class Footer extends React.PureComponent {

	public render() {
		return (
			<footer className='bg-dark text-light text-center'>
				<hr />

				<h5>You can find us at</h5>
				<ul className='list-unstyled list-inline'>
					<li className='list-inline-item'>
						<a href='http://facebook.com/'><FaFacebookSquare size={22} className='text-light' /></a>
					</li>
					<li className='list-inline-item'>
						<a href='http://instagram.com/'><FaInstagramSquare size={22} className='text-light' /></a>
					</li>
					<li className='list-inline-item'>
						<a href='http://twitter.com/'><FaTwitterSquare size={22} className='text-light' /></a>
					</li>
					<li className='list-inline-item'>
						<a href='http://linkedin.com/'><FaLinkedin size={22} className='text-light' /></a>
					</li >
				</ul>

				<hr />

				<Container style={{ padding: '0 6rem' }}>
					<Row>
						<Col className='text-left' sm={6} md={3} lg={4}>
							<h6>Restaurant</h6>
							<ul className='list-unstyled text-left'>
								<li><Link to='/about-us' className='text-light'>About us</Link></li>
								<li><Link to='/about-us/history' className='text-light'>History</Link></li>
								<li><Link to='/about-us/gallery' className='text-light'>Gallery</Link></li>
							</ul>
						</Col>
						<Col className='text-left' sm={6} md={3} lg={4}>
							<h6>Food delivery</h6>
							<ul className='list-unstyled text-left'>
								<li><Link to='/menu' className='text-light'>Menu</Link></li>
								<li><Link to='/contact' className='text-light'>Contact</Link></li>
							</ul>
						</Col>
						<Col className='text-left' sm={12} md={6} lg={4}>
							<h6>Contact</h6>
							<Row className='d-flex align-items-center'>
								<FaMapMarkerAlt size={16} style={{ marginRight: '0.5rem' }} /> Los Angeles, CA 90028, US
							</Row>
							<Row className='d-flex align-items-center'>
								<FaPhoneAlt size={16} style={{ marginRight: '0.5rem' }} /> <a href='tel:001234567890'>+1 123 456 78 90</a>
							</Row>
							<Row className='d-flex align-items-center'>
								<FaEnvelope size={16} style={{ marginRight: '0.5rem' }} /> <a href='mailto:contact@fooddelivery.com'>contact@FoodDelivery.com</a>
							</Row>
						</Col>
					</Row>
				</Container>

				<hr />

				<div className='d-flex align-items-center justify-content-center'>
					<p>© 2021 Copyright</p>
				</div>
			</footer>
		);
	}
}

export default connect()(Footer as any)
