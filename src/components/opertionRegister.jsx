import React, { Component } from 'react'
import { Button, ButtonGroup, FormGroup, FloatingLabel,Form } from 'react-bootstrap'
import Fade from 'react-bootstrap/Fade'
import Select from 'react-select';
import CurrencyInput from 'react-currency-input-field';

class OperationRegister extends Component {
    isTx = React.createRef();
    isPay = React.createRef();
    operationType = React.createRef();
    destinatary = React.createRef();
    email = React.createRef();
    date = React.createRef();
    amount = React.createRef();
    ownerSelected = React.createRef();
    comentary = React.createRef();

    fadeIn = false;
    constructor(props){
        super(props);
        this.state = {
            operationType:"0",
            ownerOptions:[
                {
                    value:"1",
                    label:"Orlando"
                },
                {
                    value:"2",
                    label:"Felipe"
                },
            ],
            form:{
                destinatary:'',
                email:'',
                date:'',
                amount:'',
                ownerSelected:null,
                comentary:'',
            },
            disableRegisterButton:true,
        }
    }

    registerOperation = () =>{
        this.props.registerNewOperation(this.state.form);
    }
    

    handleFormChange = (field)=>{
        let form = this.state.form;
        
        let fieldName = field.target?.name;
        if(!fieldName){
            fieldName = "ownerSelected";
            form[fieldName] = field.value;
        }else{
            form[fieldName] = field.target.value;
        }
        
        
        
        
        this.setState({form});
        this.checkFormDirty();
    }

    handleAmountChange = (value)=>{
        let form = this.state.form;
        debugger;
        form["amount"] = value;

        
        this.setState({form});
        this.checkFormDirty();
    }

    showForm = ()=>{
        const operationType = this.state.operationType;
        
        if(operationType == "2"){
            this.fadeIn = true;
            return this.getPaymentForm();
        }else if(operationType == "1"){
            return this.getTxForm();
        }else{
            return <div></div>
        }
    }

    checkFormDirty = (operationType) => {
        let form = this.state.form;
        let allDirty = true;
        operationType = operationType?operationType:this.state.operationType;

        if(operationType == "1"){
            for( let f in form){
                let dataField = form[f];
                
                if(dataField == "" || dataField == null ){
                    allDirty = false;
                    break;
                }
            }
        }else{
            for( let f in form){
                let dataField = form[f];
                
                if(f !== "destinatary" && f !== "email" &&  (dataField == "" || dataField == null) ){
                    allDirty = false;
                    break;
                }
            }
        }

        this.setState({
            disableRegisterButton:!allDirty,
        });
    }

    checkHandler = () => {
        const isTx = this.isTx.current.checked;
        const isPay = this.isPay.current.checked;
        let operationType = isPay?"2":isTx?"1":"";
        
        this.setState({
            operationType:operationType,
        })
       
        this.checkFormDirty(operationType);
        
    }
    getPaymentForm = ()=>{
        return (
            <React.Fragment>
                <Fade appear>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Fade>
            </React.Fragment>
        )
    }

    getTxForm = ()=>{
        return (
            <React.Fragment>
                <h1> Im just Trolling!!</h1>
            </React.Fragment>
        )
    }

  render() {
      const goBackToList = ()=>{
          this.props.goBackToList("operationList");
      }

      const {ownerOptions} = this.state;
      console.log(ownerOptions)
    return (
        <div className='operation-register' >
            
            <FormGroup className='operation-form'>
                <div key="operation-radiolist">
                    <Form.Check 
                        ref={this.isTx}
                        inline
                        type="radio"
                        id="isTx"
                        name="typeOperation"
                        label="Transacción"
                        onClick={this.checkHandler}
                    />
                    <Form.Check
                        ref={this.isPay}
                        inline 
                        type="radio"
                        id="isPay"
                        name="typeOperation"
                        label="Pago"
                        onClick={this.checkHandler}
                    />
                </div>
                <Fade in={this.state.operationType == "1"}>
                    <FloatingLabel
                        className={this.state.operationType != "1"?"hide-item mb-3":"mb-3"}
                        controlId="floatingInput"
                        label="Destinatario"
                    >
                        <Form.Control type="text" placeholder="Destinatario" ref={this.destinatary} name="destinatary"  onChange={this.handleFormChange} />
                    </FloatingLabel>
                </Fade>
                <Fade in={this.state.operationType == "1"}>
                    <FloatingLabel
                        className={this.state.operationType != "1"?"hide-item mb-3":"mb-3"}
                        controlId="floatingInput"
                        label="Correo"
                    >
                        <Form.Control type="email" placeholder="Correo" ref={this.email} name="email" onChange={this.handleFormChange}/>
                    </FloatingLabel>
                </Fade>
                
                <Fade in={this.state.operationType != "0" }>
                    <FloatingLabel
                        className={this.state.operationType == "0"?"hide-item mb-3":"mb-3"}
                        controlId="floatingInput"
                        label="Fecha"
                    >
                        <Form.Control type="date" placeholder="Fecha" ref={this.date} name="date"  onChange={this.handleFormChange}/>
                    </FloatingLabel>
                </Fade>
                <Fade in={this.state.operationType != "0" }>
                    <FloatingLabel
                        className={this.state.operationType == "0"?"hide-item mb-3":"mb-3"}
                        controlId="floatingInput"
                        label="Monto"
                    >
                        <CurrencyInput
                            id="amount"
                            name="amount"
                            placeholder="Monto"
                            decimalsLimit={2}
                            className="form-control"
                            intlConfig={{ locale: 'en-US', currency: 'USD' }}
                            onValueChange={this.handleAmountChange}
                            />
                    </FloatingLabel>
                </Fade>
                <Fade in={this.state.operationType != "0" }>
                    <Select
                        className={this.state.operationType == "0"?"hide-item mb-3":"mb-3"}
                        placeholder="Seleccione Responsable"
                        options={ownerOptions}
                        ref={this.ownerSelected}
                        name="ownerSelected" 
                        onChange={this.handleFormChange}
                    >
                    </Select>
                </Fade>
                <Fade in={this.state.operationType != "0" }>
                    <FloatingLabel
                        className={this.state.operationType == "0"?"hide-item mb-3":"mb-3"}
                        label="Comentario"
                    >
                        <Form.Control type="text" placeholder="Comentario" ref={this.comentary} name="comentary"  onChange={this.handleFormChange}/>
                    </FloatingLabel>
                </Fade>
            </FormGroup>
            <ButtonGroup>
                <Button 
                    key="btnRegister"
                    variant='success'
                    onClick={this.registerOperation}
                    disabled={this.state.disableRegisterButton}
                 >Registrar</Button>
                 <Button 
                    key="btnCancel"
                    variant='info'
                    onClick={goBackToList}
                 >Cancelar</Button>
            </ButtonGroup>

        </div>
    )
  }
}

export default OperationRegister;
