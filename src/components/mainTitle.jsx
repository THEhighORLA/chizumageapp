import React, { Component } from 'react'

export default class MainTitle extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        return (
            <div className="title">
                <div className="title-text">
                    <h1 className='bold'>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}
