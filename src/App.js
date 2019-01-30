import React, {Component} from 'react';
import './App.css';
import Form from './form';

class App extends Component {


    constructor() {
        super();

        this.state = {
            players: new Array(11),
            currentPlayer: null,
        }
    }


    onSelected(dataplayer) {
        //console.log("dataplayer", dataplayer);
        var copyplayer = this.state.players.slice();
        copyplayer[this.state.currentPlayer] = dataplayer;
        this.setState({
            players: copyplayer,
            currentPlayer: null
        })


    }


    render() {
        var listejoueur = [];


        for (let i = 0; i < this.state.players.length; i++) {
            listejoueur.push(
                <button className={"joueur"} key={i} onClick={() => this.setState({currentPlayer: i})}>
                    {this.state.players[i] && <p>{this.state.players[i].player_name}</p>}
                </button>
            );

        }

        return (

            <div className="App">
                <div className="case">
                {listejoueur}
                    <br/>
                    <span>Joueur N°{this.state.currentPlayer}</span>
                    <br/>
                </div>
                <div className="formulaire">
                    {this.state.currentPlayer != null && < Form onSelected={(player) => this.onSelected(player)}/>}
                </div>
            </div>

        );
    }
}

export default App;
