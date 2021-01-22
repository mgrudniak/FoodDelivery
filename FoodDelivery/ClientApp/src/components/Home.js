import * as React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Carousel, Button } from '../../node_modules/react-bootstrap/cjs/index';
import { Link } from 'react-router-dom';
import './Home.css';
import restaurantExteriorImg from '../images/home/restaurant-exterior.jpg';
import restaurantInteriorImg from '../images/home/restaurant-interior.jpg';
import wine from '../images/home/wine.jpg';
const Home = () => (React.createElement("div", null,
    React.createElement(Carousel, null,
        React.createElement(Carousel.Item, null,
            React.createElement("img", { className: 'd-block w-100', src: restaurantExteriorImg, alt: 'Restaurant exterior' }),
            React.createElement(Carousel.Caption, null,
                React.createElement("h3", { id: 'headerOutline' }, "Welcome"),
                React.createElement("p", { id: 'paragraphOutline' }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),
        React.createElement(Carousel.Item, null,
            React.createElement("img", { className: 'd-block w-100', src: restaurantInteriorImg, alt: 'Restaurant interior' }),
            React.createElement(Carousel.Caption, null,
                React.createElement("h3", { id: 'headerOutline' }, "Some text"),
                React.createElement("p", { id: 'paragraphOutline' }, "Donec ac porttitor erat. Ut in varius quam."))),
        React.createElement(Carousel.Item, null,
            React.createElement("img", { className: 'd-block w-100', src: wine, alt: 'Wine' }),
            React.createElement(Carousel.Caption, null,
                React.createElement("h3", { id: 'headerOutline' }, "Some other text"),
                React.createElement("p", { id: 'paragraphOutline' }, "Nam porta mauris vitae velit sagittis, ultricies eleifend neque porta.")))),
    React.createElement(Jumbotron, null,
        React.createElement("h1", null, "Hello!"),
        React.createElement("p", { className: 'paragraphIndent' }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac porttitor erat. Ut in varius quam. Maecenas gravida, odio sit amet porttitor lobortis, urna libero convallis dui, sit amet maximus ligula nisl quis enim. Fusce nisl risus, consectetur a velit quis, tempor vehicula lacus. Nullam id porta magna. Nam porta mauris vitae velit sagittis, ultricies eleifend neque porta. Maecenas et ipsum malesuada, venenatis velit at, iaculis dui. Curabitur ut magna aliquam, viverra nisl at, tristique est."),
        React.createElement("p", { className: 'paragraphIndent' }, "Ut at justo at nisi venenatis cursus. Nullam sodales nunc quam, eu fermentum nisi aliquet in. Vivamus euismod ligula turpis, ut ullamcorper lorem molestie sed. Cras sit amet velit a ipsum viverra rhoncus:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("b", null, "Phasellus"),
                " quis pulvinar eros."),
            React.createElement("li", null,
                React.createElement("b", null, "Quisque"),
                " quis eros nisi."),
            React.createElement("li", null,
                React.createElement("b", null, "Cras"),
                " quis aliquam nulla.")),
        React.createElement("p", { className: 'paragraphIndent' }, "Maecenas non mauris sed augue posuere tempus eget mollis velit. Donec ut vehicula lacus. Integer a sodales ligula, a placerat magna. Fusce ut laoreet dui. Sed eget nulla nulla. In neque purus, dapibus eget massa ac, pellentesque porttitor justo. Aliquam eu enim a enim eleifend fermentum at in risus. Pellentesque mattis accumsan magna, sed imperdiet ligula dictum id. Etiam gravida rhoncus tellus, at feugiat magna luctus et. Vivamus porttitor fringilla nulla. Sed egestas molestie purus id sodales. Phasellus nibh erat, eleifend at placerat eu, sollicitudin quis metus. Ut convallis dapibus nibh, quis consectetur ex pharetra a. Phasellus porttitor arcu neque, ut suscipit velit pretium ut. Quisque dolor erat, viverra vitae pulvinar non, condimentum id arcu."),
        React.createElement("div", { style: { textAlign: 'center', marginTop: '2rem' } },
            React.createElement(Button, { as: Link, to: '/menu', variant: 'success', size: 'lg' }, "Check out our menu!")))));
export default connect()(Home);
//# sourceMappingURL=Home.js.map