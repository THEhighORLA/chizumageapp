import React, { Component } from 'react';

import {formatMoney,getOperationStatus,getOperationType,unformatMoney} from '../utils';
import OperationList from './operationList';
import OperationRegister from './opertionRegister';

// Documentacion tabla: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html
// Documentacion Paginacion: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-pagination.html


class AccountOperations extends Component {
    constructor(props){
        super(props);
        this.state = {
            step:"operationList",
            tableData:[
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                },
                {
                    destinatary:"",
                    email:"",
                    date:"14/03/2022",
                    amount:"30.00",
                    owner:"Felipe",
                    comment:"Pago a Felipe",
                    txType:"2",
                    status:"2",
                }
            ],
            tableFields:[
                {
                    dataField:"destinatary",
                    text:"Destinatario",
                    formatter:(val)=>!val||val==""?"N/A":val,
                },
                {
                    dataField:"email",
                    text:"Correo",
                    formatter:(val)=>!val||val==""?"N/A":val,
                },
                {
                    dataField:"date",
                    text:"Fecha",
                },
                {
                    dataField:"amount",
                    text:"Monto",
                    formatter:(val)=>formatMoney(val),
                },
                {
                    dataField:"owner",
                    text:"Propietario",
                },
                {
                    dataField:"comment",
                    text:"Comentario",
                },
                {
                    dataField:"txType",
                    text:"Tipo Operación",
                    formatter:(val)=>getOperationType(val),
                },
                {
                    dataField:"status",
                    text:"Estado",
                    formatter:(val)=>getOperationStatus(val),
                },
                
            ],
            innerAccount:[
                {
                    id:"innerAccountTotal",
                    text:"Cuenta Total",
                    value:formatMoney("2000.00"),
                },
                {
                    id:"innerAccountOrlando",
                    text:"Cuenta Orlando",
                    value:formatMoney("1000.08"),
                },
                {
                    id:"innerAccountFelipe",
                    text:"Cuenta Felipe",
                    value:formatMoney("5555"),
                }
            ],
            bofaAccount:[
                {
                    id:"bofaAccountCC",
                    text:"Cuenta Corriente",
                    value:formatMoney("1000.00"),
                },
                {
                    id:"bofaAccountCA",
                    text:"Cuenta Ahorro",
                    value:formatMoney("1000.00"),
                }
            ],
            accordConfig:{
                key:"operation-accordion",
                headerText:"Información Adicional",
                dataList:[
                    {
                        title:"Monto Inicial Orlando",
                        value:formatMoney("2222.00"),
                    },
                    {
                        title:"Monto Inicial Felipe",
                        value:formatMoney("1333.00"),
                    },
                    {
                        title:"Total Orlando Canada",
                        value:formatMoney("1500.42","CAD"),
                    },
                    
                ],
            }
        }
    }
    
    componentDidMount(){
        this.props.getTitle("Operaciones de Cuenta");
    }

    registerNewOperation = (form) =>{
        console.log(form);
    }
    changeStep = (val) =>{
        this.setState({
            step:val,
        });
    }
    render() {
        let {step,tableData,tableFields,innerAccount,bofaAccount,accordConfig} = this.state;
        let inter = null;
        let tableConfig = {
            tableData:tableData,
            tableFields:tableFields,
        }
        let innerData = [];
        let bofaData = [];
        let innerTotal = unformatMoney(innerAccount.find(data => data.id == "innerAccountTotal").value);
        let bankCC = bofaAccount.find(data => data.id == "bofaAccountCC").value;
        let bankCA = bofaAccount.find(data => data.id == "bofaAccountCA").value;
        
        let bankTotal = unformatMoney(bankCC) + unformatMoney(bankCA)
        
        innerAccount.map((data)=>{
            innerData.push({
                headerColor:"success-color",
                cardClass:"col operation-card",
                headerText:data.text,
                bodyTitle:data.value,
            },)
        });
        
        bofaAccount.map((data)=>{
            bofaData.push({
                headerColor:"success-color",
                cardClass:"col operation-card",
                headerText:data.text,
                bodyTitle:data.value,
            },)
        });
        
        if(step == "operationList"){
            inter = (
                
                <OperationList
                    tableConfig={tableConfig}
                    innerAccount={innerAccount}
                    bofaAccount={bofaAccount}
                    innerData={innerData}
                    bofaData={bofaData}
                    accordConfig={accordConfig}
                    innerTotal={innerTotal}
                    bankTotal={bankTotal}
                    registerNewOperation={this.changeStep}
                ></OperationList>
                
            );
        }else{
            inter = (
                <OperationRegister
                    registerNewOperation={this.registerNewOperation}
                    goBackToList={this.changeStep}
                ></OperationRegister>
            )
        }
        return (
            <div className='main-body'>
                
                {inter}
            </div>
        );
    }
}

export default AccountOperations;