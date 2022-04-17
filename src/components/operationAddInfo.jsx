import React, { Component } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

class OperationAddInfo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {accordConfig} = this.props;
        const {dataList,headerText,key} = accordConfig;
        const numberPerCol = 5;

        let detailConfig = []; 
        let columnCounter = 0;
        let columnAux = [];

        for(let data of dataList){
            columnAux.push(data);
            columnCounter++;
            if(columnCounter === numberPerCol){
                detailConfig.push(columnAux);
                columnAux = [];
                columnCounter = 0;
            }
            
        }
        if(columnAux.length > 0){
            detailConfig.push(columnAux);
        }
        console.log()
        return (
            <div>
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey={key}>
                        <Accordion.Header>{headerText}</Accordion.Header>
                        <Accordion.Body>
                            {
                                detailConfig.map((data,idx)=>{
                                    return (
                                        <Col>
                                            {
                                                data.map((subData)=>{
                                                    return(
                                                        <Row>
                                                            <Col className='bold'>{subData.title}</Col>
                                                            <Col>{subData.value}</Col>
                                                        </Row>
                                                    )
                                                })
                                            }
                                            
                                        </Col>
                                    )
                                })
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}

export default OperationAddInfo;