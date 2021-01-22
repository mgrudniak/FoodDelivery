import * as React from 'react';
import { Container } from '../../node_modules/react-bootstrap/cjs/index';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    {this.props.children}
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}
