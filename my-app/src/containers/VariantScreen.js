import React, { Component } from 'react';
import { connect } from 'react-redux';
import './variantScreen.css';

class VariantScreen extends Component {
    render() {
        return (
            <h2>Where are my topics?</h2>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(TopicsScreen);