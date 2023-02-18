import React, { Component } from 'react';

class TestClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        username: 'afzal',
        lastname: 'kamboh',
        userId: 1
     }
    render() { 
        return ( 
            <>
            <h1>hey</h1>
            <h1>{this.state.username}</h1>
            </>
         );
    }
}
export default TestClassComponent;