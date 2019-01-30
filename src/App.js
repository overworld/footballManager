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
                <div className="stylee">
                    {this.state.players[i] && <span className="thespan">{this.state.players[i].player_name}</span>}
                    <br/>
                    <button className={"joueur"} key={i} onClick={() => this.setState({currentPlayer: i})}>
                    </button>
                </div>
            );

        }

        return (

            <div className="App">
                <div className="case">
                    {listejoueur}
                    <br/>
                    <div id="player">
                        <span id={"label"}>Joueur N°{this.state.currentPlayer}</span>
                    </div>
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
