import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator'; 
import CardContainer from './cardContainer';
import CustomAlert from './customAlerts';
import OperationAddInfo from './operationAddInfo';
import { formatMoney,unformatMoney} from '../utils';
import { Button } from 'react-bootstrap';


export default class OperationList extends Component {
    innerAccount=[];
    bofaAccount=[];

    constructor(props){
        super(props);
        this.state = {
            alertHeader:"",
            alertMsg:"",
            alertVariant:"",
            alertDissmissable:"",
            alertShow:false,
            innerData:this.props.innerData,
            bofaData:this.props.bofaData,
            innerAccount:this.props.innerAccount,
            bofaAccount:this.props.bofaAccount,
        }
        this.setInnerBofaAccount = this.setInnerBofaAccount.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }
    componentDidMount = ()=>{
        const {innerTotal,bankTotal} = this.props;
        this.checkAccountBalance(innerTotal,bankTotal);
    }
    setInnerBofaAccount = (innerAccount,bofaAccount)=>{
        this.setState({
            innerAccount:"Prueba",
        });
    }

    setInnerBofaData = (innerData,bofaData)=>{
        this.setState({
            innerData:innerData,
            bofaData:bofaData
        });
    }

    showAlert = (alertHeader, alertMsg, alertVariant, alertDissmissable)=>{
        
        this.setState({
            alertHeader:alertHeader,
            alertMsg:alertMsg,
            alertVariant:alertVariant,
            alertDissmissable:alertDissmissable,
            alertShow:true,
        });
    }

    checkAccountBalance = (innerTotal,bankTotal)=>{
        if(innerTotal != bankTotal){
            let alertHeader = "Existe una diferencia entre el Total en Banco y Total Calculado";
            let alertMsg = "En caso de no ser Oruru, por favor ignore este mensaje";
            let alertVariant = "warning";
            this.showAlert(alertHeader,alertMsg,alertVariant);
        }
    }

    render() {
        const {accordConfig} = this.props;
        const {tableData,tableFields} = this.props.tableConfig;
        const {alertHeader,alertMsg,alertVariant,alertDissmissable,alertShow} = this.state;
        const registerNewOperation = ()=>{
            this.props.registerNewOperation(this.state.form);
        }
        const pagination = paginationFactory({
            page:1,
            sizePerPage:10,
            paginationSize:10,
            sizePerPageList:[],
            alwaysShowAllBtns:true,
        });
        const alertConfig = {
            alertHeader:alertHeader,
            alertMsg:alertMsg,
            alertVariant:alertVariant,
            alertDissmissable:alertDissmissable,
            alertShow:alertShow,
        }
        
        return (
        <div className='operation-list' >

            <div className="operation-alert">
                <CustomAlert
                    alertConfig={alertConfig}
                ></CustomAlert>
            </div>  
            
            <div className='operation-containers'>
                <CardContainer
                    customClass="row operation-card-container"
                    containerConfig={this.state.innerData}
                ></CardContainer>
                <CardContainer
                    customClass="row operation-card-container"
                    containerConfig={this.state.bofaData}
                ></CardContainer>
            </div>
            <div className='operation-extrainfo'>
                <OperationAddInfo
                    accordConfig={accordConfig}
                ></OperationAddInfo>
            </div>
            <div className="operations-table">
                <Button 
                    key="btnRegisterOperation"
                    variant='success'
                    onClick={registerNewOperation}
                 >Registrar Operacion</Button>
                <BootstrapTable
                    key={"operationsTable"}
                    keyField='operationsTable'
                    data={tableData}
                    columns={ tableFields }
                    filter={ filterFactory() }
                    pagination={ pagination }
                ></BootstrapTable>
            </div>
        </div>
        )
    }
}
