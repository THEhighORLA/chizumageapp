import React, { Component } from 'react';
import {Nav, Navbar,NavDropdown, Button, Offcanvas, Form, FormControl, CloseButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
class UserInfoHeader extends Component {
    constructor(props){
        super(props);
        this.state ={
            showCanvas:false,
        }
    }
    showHideCanvas = () =>{
        this.setState({
          showCanvas:!this.state.showCanvas,
        });
      }
    render() {
        const {userId,userName, img} = this.props.userConfig;
        
        return (
            <div className="nav-profile-dropdown ms-auto">
                 <div
                  id="basic-nav-dropdown"
                   
                  onClick={this.showHideCanvas}
                  >
                        <div className="nav-profile">
                          <div className="nav-profile-img">
                            <img className="thumbnail-image" 
                                  src={img.url} 
                                  alt={img.title}
                              />
                          </div>
                            <h3>{userName}</h3>
                        </div>
                    
                  
                </div>
                <Navbar.Offcanvas 
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  show={this.state.showCanvas}
                  onClick={this.showHideCanvas}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">{userName}</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Profile</Nav.Link>
                      <Nav.Link href="#action2">Switch Dark Mode</Nav.Link>
                      
                    </Nav>
                    
                  </Offcanvas.Body>
                  <div className='offcanvas-footer'>
                    <hr></hr>
                    <Nav.Link ><FontAwesomeIcon icon={faSignOutAlt}/>  Log out </Nav.Link>
                  </div>
                  
                </Navbar.Offcanvas>
            </div>
        );
    }
}

export default UserInfoHeader;