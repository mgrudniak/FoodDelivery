import * as React from 'react';
import { Container, Row, Col } from '../../node_modules/react-bootstrap/cjs/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaPhoneAlt, FaEnvelope } from '../../node_modules/react-icons/fa/index';
class Footer extends React.PureComponent {
    render() {
        return (React.createElement("footer", { className: 'bg-dark text-light text-center' },
            React.createElement("hr", null),
            React.createElement("h5", null, "You can find us at"),
            React.createElement("ul", { className: 'list-unstyled list-inline' },
                React.createElement("li", { className: 'list-inline-item' },
                    React.createElement("a", { href: 'http://facebook.com/' },
                        React.createElement(FaFacebookSquare, { size: 22, className: 'text-light' }))),
                React.createElement("li", { className: 'list-inline-item' },
                    React.createElement("a", { href: 'http://instagram.com/' },
                        React.createElement(FaInstagramSquare, { size: 22, className: 'text-light' }))),
                React.createElement("li", { className: 'list-inline-item' },
                    React.createElement("a", { href: 'http://twitter.com/' },
                        React.createElement(FaTwitterSquare, { size: 22, className: 'text-light' }))),
                React.createElement("li", { className: 'list-inline-item' },
                    React.createElement("a", { href: 'http://linkedin.com/' },
                        React.createElement(FaLinkedin, { size: 22, className: 'text-light' })))),
            React.createElement("hr", null),
            React.createElement(Container, { style: { padding: '0 6rem' } },
                React.createElement(Row, null,
                    React.createElement(Col, { className: 'text-left', sm: 6, md: 3, lg: 4 },
                        React.createElement("h6", null, "Restaurant"),
                        React.createElement("ul", { className: 'list-unstyled text-left' },
                            React.createElement("li", null,
                                React.createElement(Link, { to: '/about-us', className: 'text-light' }, "About us")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: '/about-us/history', className: 'text-light' }, "History")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: '/about-us/gallery', className: 'text-light' }, "Gallery")))),
                    React.createElement(Col, { className: 'text-left', sm: 6, md: 3, lg: 4 },
                        React.createElement("h6", null, "Food delivery"),
                        React.createElement("ul", { className: 'list-unstyled text-left' },
                            React.createElement("li", null,
                                React.createElement(Link, { to: '/menu', className: 'text-light' }, "Menu")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: '/contact', className: 'text-light' }, "Contact")))),
                    React.createElement(Col, { className: 'text-left', sm: 12, md: 6, lg: 4 },
                        React.createElement("h6", null, "Contact"),
                        React.createElement(Row, { className: 'd-flex align-items-center' },
                            React.createElement(FaMapMarkerAlt, { size: 16, style: { marginRight: '0.5rem' } }),
                            " Los Angeles, CA 90028, US"),
                        React.createElement(Row, { className: 'd-flex align-items-center' },
                            React.createElement(FaPhoneAlt, { size: 16, style: { marginRight: '0.5rem' } }),
                            " ",
                            React.createElement("a", { href: 'tel:001234567890' }, "+1 123 456 78 90")),
                        React.createElement(Row, { className: 'd-flex align-items-center' },
                            React.createElement(FaEnvelope, { size: 16, style: { marginRight: '0.5rem' } }),
                            " ",
                            React.createElement("a", { href: 'mailto:contact@fooddelivery.com' }, "contact@FoodDelivery.com"))))),
            React.createElement("hr", null),
            React.createElement("div", { className: 'd-flex align-items-center justify-content-center' },
                React.createElement("p", null, "\u00A9 2021 Copyright"))));
    }
}
export default connect()(Footer);
//# sourceMappingURL=Footer.js.map