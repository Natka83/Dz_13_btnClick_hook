import './App.css';
//import Button from './counter';
import React from "react";
//import { CounterBtn, Display } from './display';
//import Quote from './Quote.js';
import ThreeState from './ThreeState';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    };
  } 
  render() {   
      return (
        <React.Fragment>
         <ThreeState></ThreeState>
        </React.Fragment>
      );
  }
}
 
export default App;

//_______________________    Example 2     ________________________________________________
//class App extends React.Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           divColor: "white",
//           buttonColor: "white"
//       };
//   }

// handleButtonClick = () => {
//   this.setState({
//       divColor: "red",
//       buttonColor: "blue"
//   })
// }

// render() {
//   return (
//     <React.Fragment>
//       <div style={{background: this.state.divColor}}>This is a button</div>
//       <button 
//           style={{background: this.state.buttonColor}}
//           onClick={this.handleButtonClick}
//       >
//           Change Color!
//       </button>
//     </React.Fragment>
//   );
// }
// }


//___________________________  example 1        ___________________________________________________________
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentValue: 0
//     };
//   }

//   render() {
//   const clickHandler = incValue => {
//     this.setState({ currentValue: this.state.currentValue + incValue })
//   }

//   return (
//     <div className="App">
//       <Button startvalue={1} incvalue={100}> </Button>
//       <hr></hr>
//       <CounterBtn btnIncValue={1} onClickAct={clickHandler}></CounterBtn>
//       <Display dispValue={this.state.currentValue}></Display>
//     </div>
//   )
// } 
//_______________________________________________________________________________________________

// }
//  export default App;
