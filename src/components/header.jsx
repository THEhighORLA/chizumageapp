import React, {Component} from "react";
import { NavDropdown, Nav, Navbar} from "react-bootstrap";
import UserInfoHeader from "./userInfoHeader";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props){
      super(props);
      this.state = {
        optionSelected:"1",
        options:[
          {
            text:"Home",
            url:"/",
            hasDropdown:false,
          },
          {
            text:"Resume",
            url:"/resume",
            hasDropdown:false,
          },
          {
            text:"Services",
            hasDropdown:true,
            subOptions:[
              {
                text:"Account Operations",
                url:"/account-operations",
              },
              {
                text:"Manga Collection Management",
                url:"/manga-collection",
              },
            ],
          },
        ],
        userConfig:{
          userId:1,
          userName:"Orlando Cuabro",
          img:{
            url:"./logo192.png",
            title:"User Image",
          }
        }
      };
  }
  
  onClickGeneral = (eventKey)=>{
    this.setState({
        optionSelected: eventKey,
    });
  }
  checkActive = (index)=>{
    let activeOption = this.state.optionSelected;
    let className = "";
    let activeNav = activeOption.split(".")[0];
    
    if(index === activeNav || index === activeOption){
      className = "nav-active";
    }
    return className;
  }

  
  render(){
        var {optionSelected,options} = this.state;
        var darkMode = false;
        let goHome = ()=>{
          this.onClickGeneral("1");
        }
        return (
          <div>
       

            <Navbar  key={optionSelected} onSelect={this.onClickGeneral}>
              
              <NavLink to="/" className="nav-brand navbar-brand" onClick={goHome} >Chizumage</NavLink>
              {
                options.map((option,index)=>{
                    let {text, hasDropdown, subOptions, url} = option;
                    let indexKey = (index +1).toString();
                    let setActive = ()=>{
                      this.onClickGeneral(indexKey);
                    }
                    
                   if(!hasDropdown){
                     return(
                       <Nav.Item key={"nav-item-"+index} className={this.checkActive(indexKey)}>
                           <NavLink to={url} className="nav-link" onClick={setActive}>
                             {text}
                           </NavLink>
                       </Nav.Item>
                     );
                   }else{
                     return (
                       <NavDropdown id={"nav-dropdown-"+indexKey} key={indexKey} title={text} className={this.checkActive(indexKey)}>
                          {
                            subOptions.map((subOption,idx)=>{
                              var subIndexKey = idx+1;
                              var subText = subOption.text;
                              var subUrl = subOption.url;
                              var eventKey = indexKey + "." + subIndexKey;
                              let setSubActive = ()=>{
                                this.onClickGeneral(eventKey);
                              }
                              let checkSubActive = () =>{
                                
                              }
                              return (
                                <div key={idx}>
                                  {/* <NavDropdown.Item key={"nav-dropdown-item-"+idx}  eventKey={eventKey} }> */}
                                    <NavLink to={subUrl}  className={(navData)=> navData.isActive?"dropdown-item "+this.checkActive(eventKey):"dropdown-item"} onClick={setSubActive} setActive="false">
                                      {subText}
                                    </NavLink>
                                  {/* </NavDropdown.Item> */}
                                </div>
                              );
                            })
                          }
                       </NavDropdown>
                     );
                   }
                    
                })
              }
              <UserInfoHeader
                userConfig={this.state.userConfig}
              />
              {/* <NavDropdown 
                id="basic-nav-dropdown"
                title={
                      <div className="nav-profile">
                        <div className="nav-profile-img">
                          <img className="thumbnail-image" 
                                src="./logo192.png" 
                                alt="user pic"
                            />
                        </div>
                          <h3>Orlando Cuabro</h3>
                      </div>
                  }
                className="nav-profile-dropdown ms-auto" 
                >
                  <NavDropdown.Item >Profile</NavDropdown.Item>
                  <NavDropdown.Item >
                  <Button>
                    <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                    <span className="d-lg-none d-md-block">Switch mode</span>
                  </Button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >Log Out</NavDropdown.Item>
              </NavDropdown> */}
            </Navbar>
            {/* <Nav pullRight>
            <NavDropdown eventKey={1} 
                title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src="./logo192.png" 
                            alt="user pic"
                        />

                        Orlando Cuabro
                    </div>
                } 
                id="basic-nav-dropdown">

                <NavDropdown.Item eventKey={1.1} href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item eventKey={1.3}>
                    <i className="fa fa-sign-out"></i> Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav> */}
            </div>

          );
    }
}


export default Header;