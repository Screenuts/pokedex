import React, { Component } from 'react';
import axios from 'axios';

export default class Pokemon extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        imageUrlBack: '',
        height: '',
        weight: ''
    }

    componentDidMount() {
        this.getPokemon();
    };

    // funzione che fa chiamata API get e salva sullo stato la response 
    async getPokemon() {
        // con props.match, prendi la props direttamente dai params dell'url
        const { pokemonIndex } = this.props.match.params;
        // url per informazioni sui pokemon
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        const pokemonRes = await axios.get(pokemonUrl);
        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;
        const imageUrlBack = pokemonRes.data.sprites.back_default;
        const height = pokemonRes.data.height;
        const weight = pokemonRes.data.weight;

        this.setState({ name, imageUrl, imageUrlBack, height, weight });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h1>{this.capitalizeFirstLetter(this.state.name)}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5><strong>Height: </strong>{this.state.height}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5><strong>Weight: </strong>{this.state.weight}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <img src={this.state.imageUrl}></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={this.state.imageUrlBack}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
