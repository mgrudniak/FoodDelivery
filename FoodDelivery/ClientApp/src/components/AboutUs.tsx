import * as React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from '../../node_modules/react-bootstrap/cjs/index';

const AboutUs = () => (
    <Jumbotron>
        <h1>About us</h1>
        <p>
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
            semper vel faucibus non, iaculis in velit.
        </p>
        <p>
            Donec elementum metus vitae efficitur mollis. Nulla quam metus, lobortis a magna ullamcorper, 
            euismod ornare justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos. Vestibulum eget ex neque. Donec sit amet odio lacinia eros suscipit egestas. 
            Sed rutrum diam eros, eu consequat turpis vulputate a. Pellentesque rutrum ornare scelerisque. 
            Cras tincidunt ex eget est aliquam, a congue magna pretium. Fusce ac mi hendrerit, 
            mollis orci in, luctus ante. Vestibulum ullamcorper lacus non porta semper.
        </p>
        <p>
            Morbi interdum sem turpis, suscipit ultricies felis luctus non. In hac habitasse platea dictumst. 
            Sed porttitor ipsum id convallis finibus. Phasellus vel molestie felis. Morbi quis auctor odio, 
            nec euismod ex. Nulla ut magna risus. Phasellus tempus ex sed rutrum imperdiet. 
            Nam faucibus ligula eros. Curabitur consequat urna in felis viverra venenatis. Donec et aliquet ante.
        </p>
        <p>
            Cras sed lacus non nibh dictum ullamcorper a ut nunc. Donec aliquet ex ligula, 
            sed feugiat magna vestibulum viverra. Nulla eu pulvinar urna. Aliquam vitae lorem at est blandit tempor. 
            Aenean et leo dapibus, dictum odio ac, sollicitudin quam. Ut efficitur, nulla eget aliquet condimentum, 
            nulla elit sodales nunc, et placerat erat turpis ut diam. Duis non eros orci. Phasellus nulla magna, 
            malesuada sed sollicitudin eget, pretium a diam. Fusce ac dapibus diam. Duis sed auctor neque.
        </p>
    </Jumbotron>
);

export default connect()(AboutUs);
