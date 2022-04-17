import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AccountOperations from './components/accountOperations';
import Resume from './components/resume';
import Error from './components/error';
import Header from './components/header';
import MainTitle from './components/mainTitle';

 class Router extends Component {
    constructor(props){
        super(props);
        this.state ={
            mainTitle:"",
        }
    }
    setTitle = (title)=>{
        this.setState({
            mainTitle:title,
        });
    }
    render() {
        return (
        <BrowserRouter>
            <Header/>
            <MainTitle title={this.state.mainTitle}/>
                <Routes>
                    <Route
                        exact path='/'
                        element={<Home getTitle={this.setTitle}/>}
                        activeClassName='test'
                    />
                    <Route
                        exact path='/account-operations'
                        element={<AccountOperations getTitle={this.setTitle} />}
                    />
                    <Route
                        exact path='/resume'
                        element={<Resume getTitle={this.setTitle}/>}
                    />
                    <Route
                        path="*"
                        element={<Error getTitle={this.setTitle}/>}
                    />
                </Routes>
        </BrowserRouter>
        )
    }
}

export default Router;