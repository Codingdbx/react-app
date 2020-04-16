import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div className="container" style={{marginTop:'20px'}}>
          <h2>Hello React</h2>
          <div className="row">
              <div className="col-md-5">
                  <form className="form-horizontal">
                      <div className="form-group">
                          <label className="col-sm-2 control-label">用户名</label>
                          <div className="col-sm-10">
                              <input type="email" className="form-control" id="name" name="name" placeholder="用户名" />
                          </div>
                          <label className="col-sm-2 control-label">用户名</label>
                          <div className="col-sm-10">
                              <input type="email" className="form-control" id="name" name="name" placeholder="用户名" />
                          </div>
                          <label className="col-sm-2 control-label">用户名</label>
                          <div className="col-sm-10">
                              <input type="email" className="form-control" id="name" name="name" placeholder="用户名" />
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
