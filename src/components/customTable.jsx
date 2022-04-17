import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class CustomTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.tableData,
            fields:this.props.fields,
            
        }
    }
    render() {
        console.log(this.state)
        let {data,fields} = this.state;
        let {fid, ftext, fkey} = fields;

        return (
        <div className='table'>
            <Table responsive>
                <thead>

                </thead>
                <tbody>
                    {
                        data.map((data,idx)=>{
                            console.log(data)
                        })
                    }
                </tbody>
            </Table>

        </div>
        )
  }
}
