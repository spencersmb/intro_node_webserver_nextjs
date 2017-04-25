import Nav from '../components/nav'
import React, { Component } from 'react';

class Projects extends Component {
    // static getInitialProps () {
    //     return{}
    // }

    constructor(props, context) {
        super(props, context);
    
    }

    render(){
        return(
            <div>
                <Nav />
                Projects Page
            </div>
        );
    }

}

export default Projects;