import * as React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Carousel, Button } from '../../node_modules/react-bootstrap/cjs/index';
import { Link } from 'react-router-dom';
import './Home.css'
import restaurantExteriorImg from '../images/home/restaurant-exterior.jpg';
import restaurantInteriorImg from '../images/home/restaurant-interior.jpg';
import wine from '../images/home/wine.jpg';

const Home = () => (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src={restaurantExteriorImg} alt='Restaurant exterior' />
                <Carousel.Caption>
                    <h3 id='headerOutline'>Welcome</h3>
                    <p id='paragraphOutline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={restaurantInteriorImg} alt='Restaurant interior' />
                <Carousel.Caption>
                    <h3 id='headerOutline'>Some text</h3>
                    <p id='paragraphOutline'>Donec ac porttitor erat. Ut in varius quam.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={wine} alt='Wine' />
                <Carousel.Caption>
                    <h3 id='headerOutline'>Some other text</h3>
                    <p id='paragraphOutline'>Nam porta mauris vitae velit sagittis, ultricies eleifend neque porta.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Jumbotron>
            <h1>Hello!</h1>
            <p className='paragraphIndent'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec ac porttitor erat. Ut in varius quam. Maecenas gravida,
                odio sit amet porttitor lobortis, urna libero convallis dui,
                sit amet maximus ligula nisl quis enim. Fusce nisl risus,
                consectetur a velit quis, tempor vehicula lacus.
                Nullam id porta magna. Nam porta mauris vitae velit sagittis,
                ultricies eleifend neque porta. Maecenas et ipsum malesuada,
                venenatis velit at, iaculis dui. Curabitur ut magna aliquam,
                viverra nisl at, tristique est. 
            </p>
            <p className='paragraphIndent'>
                Ut at justo at nisi venenatis cursus.
                Nullam sodales nunc quam, eu fermentum nisi aliquet in.
                Vivamus euismod ligula turpis, ut ullamcorper lorem molestie sed.
                Cras sit amet velit a ipsum viverra rhoncus:
            </p>
            <ul>
                <li><b>Phasellus</b> quis pulvinar eros.</li>
                <li><b>Quisque</b> quis eros nisi.</li>
                <li><b>Cras</b> quis aliquam nulla.</li>
            </ul>
            <p className='paragraphIndent'>
                Maecenas non mauris sed augue posuere tempus eget mollis velit. 
                Donec ut vehicula lacus. Integer a sodales ligula, a placerat magna. 
                Fusce ut laoreet dui. Sed eget nulla nulla. In neque purus, 
                dapibus eget massa ac, pellentesque porttitor justo. 
                Aliquam eu enim a enim eleifend fermentum at in risus. 
                Pellentesque mattis accumsan magna, sed imperdiet ligula dictum id.
                Etiam gravida rhoncus tellus, at feugiat magna luctus et. 
                Vivamus porttitor fringilla nulla. Sed egestas molestie purus id sodales. 
                Phasellus nibh erat, eleifend at placerat eu, sollicitudin quis metus. 
                Ut convallis dapibus nibh, quis consectetur ex pharetra a. 
                Phasellus porttitor arcu neque, ut suscipit velit pretium ut. 
                Quisque dolor erat, viverra vitae pulvinar non, condimentum id arcu.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button as={Link} to='/menu' variant='success' size='lg'>Check out our menu!</Button>
            </div>
        </Jumbotron>
    </div>
);

export default connect()(Home);
