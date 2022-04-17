import React, { Component } from 'react';

class Error extends Component {
    componentDidMount(){
        this.props.getTitle(
            <React.Fragment>
                <h2>404</h2>
                <h3>Page Not Found!</h3>
            </React.Fragment>
        );
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Error;