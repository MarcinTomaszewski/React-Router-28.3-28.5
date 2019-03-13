import React from 'react';
import { Link } from 'react-router';
import DevTools from '../DevTools';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = props => (
    <div>
        <DevTools />
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li><Link to="/">Państwa</Link></li>
                <li><Link to="/countries">Countries</Link></li>
                <li><Link to="/continents">Continents</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;