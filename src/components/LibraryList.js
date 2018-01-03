import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {

    render() {
        console.log('props', this.props);
        return;
    }
}

// this state is the application state
// we need to map it to the component props
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
