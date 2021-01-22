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
    public state = {
        showModal: false,
        image: ''
    };

    private handleClick = (src: string) => {
        this.setState({
            showModal: true,
            image: src
        });
	}

    private handleClose = () => {
        this.setState({
            showModal: false
        });
    }

    public render() {
        return (
            <Jumbotron>
                <h1>Gallery</h1>
                <Row>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img1} onClick={() => this.handleClick(img1)} />
                        </Card>
                    </Col>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img2} onClick={() => this.handleClick(img2)} />
                        </Card>
                    </Col>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img3} onClick={() => this.handleClick(img3)} />
                        </Card>
                    </Col>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img4} onClick={() => this.handleClick(img4)} />
                        </Card>
                    </Col>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img5} onClick={() => this.handleClick(img5)} />
                        </Card>
                    </Col>
                    <Col md={6} lg={4} xl={3}>
                        <Card className='galleryItem'>
                            <Card.Img className='galleryImage' src={img6} onClick={() => this.handleClick(img6)} />
                        </Card>
                    </Col>
                </Row>

                <Modal show={this.state.showModal} onHide={this.handleClose} size='lg'>
                    <Modal.Body>
                        <img src={this.state.image} width='100%' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        );
    }
}

export default connect()(Gallery);
