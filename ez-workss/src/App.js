import React from 'react';
import logo from './component/ezlogo.webp';
import './App.css';
import Form from './component/Form';
import ServiceCards from './component/ServiceCards';
function App() {
  return (
    <div className="app-container">
    <header className="app-header">
    <div className='logoo'><img src={logo} className='myimg'></img></div>
      <h2>Suite Of Business Support Services</h2>
      <h4>Lorem ipsum dolor sit amet, consecteur adipiscing <br>
       </br> elit sed do eiusmod tempor incididunt.. Lorem <br>
       </br> ipsum dolor sit amet, consecteur adipiscing elit sed</h4>
      <Form />
    </header>
    <div className="content">
       <ServiceCards />
    
    </div>
  </div>
  );
}

export default App;