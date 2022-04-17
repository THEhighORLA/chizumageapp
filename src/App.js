import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Componentes 
import CustomHeader from './components/header';
import Router from './Router';
import { Component } from 'react';

class App extends Component {
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App" >
        <Router/>
      </div>
    )
  }
  
}

export default App;
