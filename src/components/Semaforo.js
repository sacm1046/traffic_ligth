import React from 'react';
import './semaforo.css';

function Semaforo(props) {
    return (
      <div className="container pt-5">
          <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2 bg-dark p-4">
                  <div className="container">
                      <div className="row pt-3">
                          <div className="col-md-12 bg-danger" style={props.red} onClick={() => props.btnRed(1)}></div>
                      </div>
                      <div className="row pt-3">
                          <div className="col-md-12 bg-warning" style={props.yellow} onClick={() => props.btnYellow(2)}></div>
                      </div>
                      <div className="row pt-3">
                          <div className="col-md-12 bg-success" style={props.green} onClick={() => props.btnGreen(3)}></div>
                      </div>
                  </div>
              </div>
              <div className="col-md-5"></div>
          </div>
      </div>
    );
  }

export default Semaforo;