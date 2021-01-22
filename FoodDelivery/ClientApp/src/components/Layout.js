import * as React from 'react';
import { Container } from '../../node_modules/react-bootstrap/cjs/index';
import Header from './Header';
import Footer from './Footer';
export default class Layout extends React.PureComponent {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Container, null, this.props.children),
            React.createElement(Footer, null)));
    }
}
//# sourceMappingURL=Layout.js.map