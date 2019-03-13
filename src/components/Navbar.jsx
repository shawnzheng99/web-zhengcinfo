import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="nav-bar">
                <div className="container nav-container">
                <h3 className='name-brand'>ZhengC</h3>
                    <ul>
                        <li><NavLink to={'/'}>_Home</NavLink></li>
                        <li><NavLink to={'/proj'}>_Projects</NavLink></li>
                        <li><NavLink to={'/about'}>_About</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;