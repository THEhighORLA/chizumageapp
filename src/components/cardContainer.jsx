import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBBtn,
    MDBContainer
  } from "mdbreact";

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
        customClass:this.props.customClass,
        containerConfig:this.props.containerConfig,
    }
  }
  render() {
    const {customClass, containerConfig} = this.state;
    return (
        <MDBContainer className={customClass}>
          {
              containerConfig.map((data,idx)=>{
                    return (
                        <MDBCard className={data.cardClass}>
                            <MDBCardHeader color={data.headerColor} tag="h3">
                                {data.headerText}
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle>{data.bodyTitle}</MDBCardTitle>
                                <MDBCardText>
                                    {data.bodyElement}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    )
              })
          }
      </MDBContainer>
    )
  }
}
