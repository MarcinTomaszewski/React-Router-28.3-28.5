import React from 'react';

const CountryDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img style={{ width: "30%", margin: 20, border: '1px solid black' }} className="country-photo" src={props.country.imageUrl} alt="country" />
        </header>
        <div className="country-info">
            <h1>{props.country.name}</h1>
            <h2>Kontynent: {props.country.continent}</h2>

            <div className="info">
                <div>
                    <span>Ludność: </span>
                    <span>{props.country.populace} mln</span>
                </div>

                <div>
                    <span>Stolica: </span>
                    <span>{props.country.capital}</span>
                </div>

                <div>
                    <span>Waluta: </span>
                    <span>{props.country.currency}</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;