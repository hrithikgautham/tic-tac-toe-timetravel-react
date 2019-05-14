import React from 'react';
import './App.css';
import Table from "./components/Table"

class App extends React.Component{
  state = {
    player : Array(9).fill(null),
    history : [],
    xIsNext : true,
    winner : null
  }
  calc(arr, i){
    if(arr.filter(a => a === null).length === 0){
      this.setState({
        winner : "draw"
      });
    }
    if(arr[3] === i && arr[4] === i && arr[5] === i){
      alert(`${arr[3]} is the winner`);
      return true;
    }else if(arr[0] === i && arr[1] === i && arr[2] === i){
      alert(`${arr[0]} is the winner`);
      return true;
    }
    else if(arr[6] === i && arr[7] === i && arr[8] === i){
      alert(`${arr[6]} is the winner`);
      return true;
    }
    else if(arr[0] === i && arr[4] === i && arr[8] === i){
      alert(`${arr[0]} is the winner`);
      return true;
    }
    else if(arr[2] === i && arr[4] === i && arr[6] === i){
      alert(`${arr[2]} is the winner`);
      return true;
    }
    else if(arr[0] === i && arr[3] === i && arr[6] === i){
      alert(`${arr[0]} is the winner`);
      return true;
    }
    else if(arr[1] === i && arr[4] === i && arr[7] === i){
      alert(`${arr[1]} is the winner`);
      return true;
    }
    else if(arr[2] === i && arr[5] === i && arr[8] === i){
      alert(`${arr[2]} is the winner`);
      return true;
    }
    else  
      return false;
  }
  handleClick = (i) => {
    // let sq = this.state.player.pop();
    // let player = [...this.state.player];
    var squares = this.state.player;
    if(squares[i] !== null)
      return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    if(this.calc(squares, squares[i])){
      this.setState({
        winner : squares[i]
      });  
    }
    // let history = [...this.state.history];
    // player = [...player, squares];
    this.setState(state => ({//neeed to update the history indepndent of the others
      player : squares,
      xIsNext : !state.xIsNext,
      history : [...state.history, squares]
    }));
    console.log(this.state.history);
  }
  resetGame = () => {
    this.setState({
      player : Array(9).fill(null),
      xIsNext : true,
      winner : null
    });
  }
  timeTravel(){

  }
  render(){
    return (
      <div>
        <Table 
          player = {this.state.player} 
          onClick = {this.handleClick}
        />
        {
          this.state.winner &&
          (this.state.winner !== "draw" ? 
          <div>
            <h1>winner is {this.state.winner}</h1>
            <button onClick = {this.resetGame}>Reset?</button>
          </div> : 
          <div>
          <h1>the game eneded in a draw</h1>
          <button onClick = {this.timeTravel}>TimeTravel?</button>
          </div>)
        }
        </div>
    )
  }
}


export default App;