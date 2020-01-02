import React from 'react';
import Semaforo from './components/Semaforo'

/*const ligth = {
  boxShadow: "0 0 20px rgba(255, 255, 255, 0.9)",
}*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      //ligth es el nombre del objeto y el contenido debe ir entre llaves
      ligthOn: {boxShadow: "0 0 20px rgba(255, 255, 255, 0.9)"},
      ligthOff: {boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)"},
      ligth: 3
    }
    this.ligth = this.ligth.bind(this);
  }

  ligth(n){
    this.setState({ligth:n});
  }
  
  render(){
    return(
      <Semaforo red={this.state.ligth===1?this.state.ligthOn:this.state.ligthOff} yellow={this.state.ligth===2?this.state.ligthOn:this.state.ligthOff} green={this.state.ligth===3?this.state.ligthOn:this.state.ligthOff} 
      btnRed={this.ligth} btnYellow={this.ligth} btnGreen={this.ligth}/>
    );
  }
}
 
export default App;

