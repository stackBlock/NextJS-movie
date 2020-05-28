import React from 'react';

import {
    render
} from "react-dom";

class About extends React.Component {


    render() {
        const message = 'Hello World';
        return (<h1> Hello About Page: Message = {
            message
        } </h1>
        )
    }

}

export default About;