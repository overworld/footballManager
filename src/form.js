import React, {Component} from 'react';
import './App.css';

class form extends Component {

    constructor() {
        super();
        this.state = {
            searchList : null
        }
    }



    onChange(e) {
        e.preventDefault();

        const player = e.currentTarget.value;
        const key = "eb7490e0ca3a3d75eab567df34d6b3bce6f747b8b30c8bdeee27f52a1ed3b150";
        const url = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + player + "&APIkey=" + key;
        fetch(url).then(rawData => {
            rawData.json().then(value => {
                console.log("Json value", value);

                let searchList = [];
                let a = value.result;
                if (a)
                {
                    for(let i =0; i < Math.min(4,a.length) ; i++  )
                    {
                        searchList.push(<button>{a[i].player_name}</button>)
                    }

                }
                this.setState({searchList : searchList});

                this.props.onSelected(a);

            });

        });

    }

    render() {

        return (
            <div className="form">
                <label>Chercher un joueur grace au nom</label>
                <input onChange={(e) => this.onChange(e)} type={"text"} name={"name"}/>
                <br/>

                {this.state.searchList}
            </div>
        );
    }
}

export default form;
