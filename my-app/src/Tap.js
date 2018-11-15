import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tap extends Component {
    constructor() {
        super();

    }
    render(){
        return (
                <div>{this.props.apirequre}</div>
        );
    }
}
Tap.propTypes={
    apirequre: PropTypes.object
};
Tap.defaultProps ={
    apirequre: "net"
};
export default Tap;
