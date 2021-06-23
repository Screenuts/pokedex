import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard'

export default class PokemonList extends Component {

    // init dello stato in questo componente
    state = {
        url: "https://pokeapi.co/api/v2/pokemon",
        pokemon: null,
    };

    // funzione lanciata quando carica il componente
    componentDidMount() {
        this.getPokemonList();
    };

    // funzione che fa chiamata API get e salva sullo stato la response 
    async getPokemonList() {
        const res = await axios.get(this.state.url);
        // va settato lo stato utilizzando setState(), non sovrascritto l'oggetto.
        this.setState({ pokemon: res.data['results'] });

    }

    render() {
        return (
            <React.Fragment>

                {/* check se pokemon è carica */}
                {
                    this.state.pokemon ? (
                        <div className="row">
                            {/* cicliamo l'array pokemon presente nello stato per disegnare una ad una le card */}
                            {this.state.pokemon.map(
                                pokemon => (
                                    <PokemonCard
                                        key={pokemon.name}
                                        name={pokemon.name}
                                        url={pokemon.url}
                                    ></PokemonCard>
                                ))}
                        </div>
                    ) : (<h1>Loading pokemon...</h1>)
                }
            </React.Fragment>

        )
    }
}
