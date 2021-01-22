import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Col, Jumbotron, Row, Modal } from '../../node_modules/react-bootstrap/cjs/index';
import img1 from '../images/gallery/gallery_1.jpg';
import img2 from '../images/gallery/gallery_2.jpg';
import img3 from '../images/gallery/gallery_3.jpg';
import img4 from '../images/gallery/gallery_4.jpg';
import img5 from '../images/gallery/gallery_5.jpg';
import img6 from '../images/gallery/gallery_6.jpg';
import './Gallery.css';
class Gallery extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            showModal: false,
            image: ''
        };
        this.handleClick = (src) => {
            this.setState({
                showModal: true,
                image: src
            });
        };
        this.handleClose = () => {
            this.setState({
                showModal: false
            });
        };
    }
    render() {
        return (React.createElement(Jumbotron, null,
            React.createElement("h1", null, "Gallery"),
            React.createElement(Row, null,
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img1, onClick: () => this.handleClick(img1) }))),
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img2, onClick: () => this.handleClick(img2) }))),
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img3, onClick: () => this.handleClick(img3) }))),
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img4, onClick: () => this.handleClick(img4) }))),
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img5, onClick: () => this.handleClick(img5) }))),
                React.createElement(Col, { md: 6, lg: 4, xl: 3 },
                    React.createElement(Card, { className: 'galleryItem' },
                        React.createElement(Card.Img, { className: 'galleryImage', src: img6, onClick: () => this.handleClick(img6) })))),
            React.createElement(Modal, { show: this.state.showModal, onHide: this.handleClose, size: 'lg' },
                React.createElement(Modal.Body, null,
                    React.createElement("img", { src: this.state.image, width: '100%' })),
                React.createElement(Modal.Footer, null,
                    React.createElement(Button, { variant: 'secondary', onClick: this.handleClose }, "Close")))));
    }
}
export default connect()(Gallery);
//# sourceMappingURL=Gallery.js.map