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
    public render() {
        return (
            <Jumbotron>
                <h1>Contact</h1>
                <p>
                    <b>Opening hours:</b><br />
                    Monday - Friday: 10:00 AM - 9:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 11:00 PM
                </p>
                <p>
                    <b>Feel free to contact us:</b><br />
                    Phone: <a href='tel:001234567890'>+1 123 456 78 90</a><br />
                    E-mail: <a href='mailto:contact@fooddelivery.com'>contact@FoodDelivery.com</a>
                </p>
                <p>
                    <b>Our location:</b><br />
                    6925 Hollywood Blvd<br />
                    Los Angeles, CA<br />
                    90028 USA
                </p>
                <div id='map'>
                    <Map center={[34.102027, -118.340973]} zoom={12} scrollWheelZoom={false}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                        <Marker position={[34.102027, -118.340973]}>
                            <Popup>
                                FoodDelivery<br />
                                6925 Hollywood Blvd<br />
                                Los Angeles, CA<br />
                                90028 USA
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            </Jumbotron>
        );
    }
}

export default connect()(Contact);
