import * as React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Card, Row, Col } from '../../node_modules/react-bootstrap/cjs/index';
import img1 from '../images/history/history_1.jpg';
import img2 from '../images/history/history_2.jpg';
import img3 from '../images/history/history_3.jpg';

const History = () => (
    <Jumbotron>
        <h1>History</h1>
        <Row>
            <Col md={12}>
                <Col md={4}>
                    <Card className='float-left' style={{ width: '250px', margin: '0.5rem 1rem 0 0' }}>
                        <Card.Img src={img1} className='historyImage' />
                    </Card>
                </Col>
                <p className='text-justify paragraphIndent'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et facilisis ante, id gravida ante. Phasellus arcu urna,
                    tempus vitae mi vitae, pharetra fringilla nulla.
                    Integer dignissim metus eget urna fermentum, ac laoreet elit semper.
                    Nullam rutrum eu nibh non congue. Maecenas fermentum vehicula mi eget accumsan.
                    Fusce posuere convallis tincidunt. Nam quis tincidunt lorem.
                    Donec vulputate mi id ante dictum cursus. Maecenas hendrerit facilisis tempus.
                    In fermentum tortor est, in facilisis erat venenatis eget.
                    Sed luctus enim ac urna venenatis gravida. Pellentesque ut tristique quam,
                    ut vulputate risus. Fusce et pretium ante. Nullam fringilla ligula massa,
                    consectetur semper risus ultrices et. Morbi justo odio,
                    semper vel faucibus non, iaculis in velit. Morbi interdum sem turpis, 
                    suscipit ultricies felis luctus non. In hac habitasse platea dictumst.
                    Sed porttitor ipsum id convallis finibus. Phasellus vel molestie felis. 
                    Morbi quis auctor odio, nec euismod ex. Nulla ut magna risus. 
                    Phasellus tempus ex sed rutrum imperdiet. Nam faucibus ligula eros. 
                    Curabitur consequat urna in felis viverra venenatis. Donec et aliquet ante.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Card className='float-right' style={{ width: '250px', margin: '0.5rem 0 0 1rem' }}>
                        <Card.Img src={img2} className='historyImage' />
                    </Card>
                <p className='text-justify paragraphIndent'>
                    Etiam interdum euismod ullamcorper. Maecenas eu orci euismod est sagittis placerat. 
                    Aliquam nec lacus efficitur, porta neque vitae, varius lectus. 
                    Etiam ullamcorper magna at velit tempor, ut mollis velit tempor. Fusce a posuere ipsum. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent diam sem, 
                    tempor vel tortor at, laoreet consectetur nibh. Sed ut felis lacinia, aliquam orci id, 
                    accumsan orci. Proin commodo leo ac gravida dapibus. Proin blandit, 
                    urna vel facilisis molestie, mi magna iaculis eros, sed condimentum ligula augue vel arcu. 
                    Vestibulum facilisis viverra tellus at ornare. Sed dictum tempor imperdiet.
                    Nullam commodo nisl tincidunt neque condimentum tempor. Etiam euismod tellus quis laoreet dictum. 
                    Proin felis mauris, mollis in massa vitae, accumsan condimentum dui. Proin aliquet odio id tortor 
                    condimentum pretium. Praesent vestibulum, dui vitae facilisis commodo, ipsum purus consectetur nunc, 
                    a iaculis erat arcu a tellus. Nam ac convallis mauris. Maecenas auctor, lectus pretium 
                    faucibus finibus, turpis turpis cursus ante, ac viverra neque eros pellentesque neque. 
                    Aliquam suscipit turpis vel metus ullamcorper vestibulum.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Col md={4}>
                    <Card className='float-left' style={{ width: '250px', margin: '0.5rem 1rem 0 0' }}>
                        <Card.Img src={img3} className='historyImage' />
                    </Card>
                </Col>
                <p className='text-justify paragraphIndent'>
                    Nullam eget leo a enim laoreet ornare. Nullam vel tortor in arcu imperdiet venenatis 
                    ultricies non dui. Integer venenatis, lacus ut commodo egestas, libero ante mattis nibh, 
                    tristique accumsan turpis ex vel tortor. Proin posuere sit amet leo et cursus. 
                    Donec commodo erat dolor, ut tincidunt nisl ullamcorper vel. Sed laoreet accumsan nulla, 
                    sed feugiat ipsum sagittis vel. Vivamus et ante non mi porta pretium. Maecenas mauris tellus, 
                    tempus vitae rhoncus id, efficitur sit amet quam. Ut hendrerit vel enim eu rutrum. 
                    Mauris non tellus arcu. Mauris elementum lacinia ex id laoreet. Sed ornare vestibulum sem non varius.
                    Aliquam sed tempus velit, in molestie neque. Suspendisse id augue ut massa viverra facilisis id at eros. 
                    Ut ac velit enim. Nunc eros quam, porttitor ut dui ac, rutrum laoreet risus. Curabitur orci ante, 
                    consectetur ultricies justo sed, vestibulum accumsan tortor. Proin tortor eros, 
                    vehicula sit amet tortor eu, ullamcorper porta metus. Vivamus vehicula neque sapien, 
                    a porta ipsum scelerisque ut. Proin nec lectus dui. Ut maximus feugiat diam, 
                    nec volutpat enim hendrerit eu. Proin eget tempus metus. Aliquam ullamcorper varius orci nec posuere. 
                    In efficitur diam vel venenatis fringilla. Morbi mattis risus id ex tempor venenatis. 
                    Proin aliquet accumsan tortor, eget semper dui porttitor nec.
                </p>
            </Col>
        </Row>
    </Jumbotron>
);

export default connect()(History);
