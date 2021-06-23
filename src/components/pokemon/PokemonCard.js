import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    };

    componentDidMount() {
        // const name = this.props.name;
        // const url = this.props.url; 
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
        this.setState({
            name,
            imageUrl,
            pokemonIndex,
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header text-center">{this.capitalizeFirstLetter(this.state.name)}</h5>
                    <Link to={`pokemon/${this.state.pokemonIndex}`}>
                        <div className="card-img-top rounded text-center mt-2">
                            <img src={this.state.imageUrl}></img>
                        </div>
                    </Link>

                </div>
            </div >
        )
    }
}
