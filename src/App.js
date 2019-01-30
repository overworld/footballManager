import React, { Component } from 'react';
import './App.css';
import Form from './form';

class App extends Component {


    constructor()
    {
        super();

        this.state = {
            players: new Array(11),
            currentPlayer : null
        }
    }


    onSelected()
    {


    }

    onClick(data)
    {
        console.log("joueur")

    }

  render() {
        var listejoueur = [];


      for (let i = 0; i < this.state.players.length; i++) {
          listejoueur.push(
              <button className={"joueur"} key={i} onClick={() => this.setState({currentPlayer : i})}>
                  {this.state.players[i] && <p>{this.state.players[i]}</p>}
              </button>
          );

      }

      return (
      <div className="App">
          {listejoueur}
          {this.state.currentPlayer}
          <Form name ={""}/>
      </div>
    );
  }
}

export default App;
