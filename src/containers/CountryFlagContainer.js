import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/action-countries';

class CountryFlagContainer extends Component {
    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }
    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)} />
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);