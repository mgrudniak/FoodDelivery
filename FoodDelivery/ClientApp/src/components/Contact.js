import * as React from 'react';
import * as L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import './Contact.css';
import 'leaflet/dist/leaflet.css';
import { Jumbotron } from '../../node_modules/react-bootstrap/cjs/index';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
class Contact extends React.PureComponent {
    render() {
        return (React.createElement(Jumbotron, null,
            React.createElement("h1", null, "Contact"),
            React.createElement("p", null,
                React.createElement("b", null, "Opening hours:"),
                React.createElement("br", null),
                "Monday - Friday: 10:00 AM - 9:00 PM",
                React.createElement("br", null),
                "Saturday - Sunday: 8:00 AM - 11:00 PM"),
            React.createElement("p", null,
                React.createElement("b", null, "Feel free to contact us:"),
                React.createElement("br", null),
                "Phone: ",
                React.createElement("a", { href: 'tel:001234567890' }, "+1 123 456 78 90"),
                React.createElement("br", null),
                "E-mail: ",
                React.createElement("a", { href: 'mailto:contact@fooddelivery.com' }, "contact@FoodDelivery.com")),
            React.createElement("p", null,
                React.createElement("b", null, "Our location:"),
                React.createElement("br", null),
                "6925 Hollywood Blvd",
                React.createElement("br", null),
                "Los Angeles, CA",
                React.createElement("br", null),
                "90028 USA"),
            React.createElement("div", { id: 'map' },
                React.createElement(Map, { center: [34.102027, -118.340973], zoom: 12, scrollWheelZoom: false },
                    React.createElement(TileLayer, { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: '\u00A9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }),
                    React.createElement(Marker, { position: [34.102027, -118.340973] },
                        React.createElement(Popup, null,
                            "FoodDelivery",
                            React.createElement("br", null),
                            "6925 Hollywood Blvd",
                            React.createElement("br", null),
                            "Los Angeles, CA",
                            React.createElement("br", null),
                            "90028 USA"))))));
    }
}
export default connect()(Contact);
//# sourceMappingURL=Contact.js.map