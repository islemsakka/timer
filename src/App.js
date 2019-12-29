import React, { Component } from 'react';
import './App.css';
//import NumberFormat from 'react-number-format';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      second: 0,
      boo: true

      //tab:[this.state.a,this.state.b,this.state.c,this.state.d,this.state.e,this.state.f]

    }


  };
  Increment = (s) => {
    //this.setState({second:this.state.second+1})
    return (<div>
      <span>{(Math.floor(s / 3600) < 10) ? '0' + Math.floor(s / 3600) : Math.floor(s / 3600)}</span>
      <span>:</span>
      <span>{(Math.floor(s % 3600 / 60) < 10) ? '0' + Math.floor(s % 3600 / 60) : Math.floor(s % 3600 / 60)}</span>
      <span>:</span>
      <span>{((s % 3600 % 60) < 10) ? '0' + s % 3600 % 60 : s % 3600 % 60}</span>
    </div>)

  }
  add = () => {
    this.in = setInterval(() => {
      this.setState({ second: this.state.second + 1 })
    }, 1000)
    this.setState({ boo: !this.state.boo })
  }
  clear = () => {
    clearInterval(this.in)
    this.setState({ boo: !this.state.boo })
   


  }

  reset = () => {
    clearInterval(this.in)
    this.setState({ second: 0 })
    this.setState({ boo: true})
  }



  render() {
    return (
      <div className='style'>{this.Increment(this.state.second)} <button onClick={this.state.boo ? this.add : this.clear}>Start</button>
        <button onClick={this.reset}>Reset</button>
      </div>

    );
  }
}

export default App;

