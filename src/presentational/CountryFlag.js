import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img style={{ width: "30%", margin: 20, border: '1px solid black' }} src={props.country.imageUrl} alt="country flag" />
    </div>
);

export default CountryFlag;