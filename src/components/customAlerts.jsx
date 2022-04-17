import React, { Component } from 'react';
import { Alert} from 'react-bootstrap';
import {faExclamationTriangle,faCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 class CustomAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            alertShow:this.props.alertShow
        }
    }
    setShow = (val)=>{
        this.setState({
            alertShow:val,
        });
    }
    render() {
        const {alertHeader, alertMsg, alertVariant, alertDissmissable,alertShow} = this.props.alertConfig;
        // const [show, setShow] = showAlert;
        let icon = null;

        switch (alertVariant) {
            case "success":
                icon = faCheck;
                break;
            case "danger":
                icon = faCircleXmark;
                break;
            case "warning":
                icon = faExclamationTriangle;
                break;
            default:
                icon = faExclamationTriangle;
                break;
        }
        return (
            
            <div className='custom-alert'>
                <Alert variant={alertVariant} show={alertShow}  onClose={() => this.setShow(false)}  dismissible={alertDissmissable} >
                    <Alert.Heading>
                        {
                            <React.Fragment>
                                <FontAwesomeIcon icon={icon}/>
                                {alertHeader}
                            </React.Fragment> 
                        }
                    </Alert.Heading>
                    <p>
                        {alertMsg}
                    </p>
                </Alert>
            </div>
            
        )
  }
}

export default CustomAlert;