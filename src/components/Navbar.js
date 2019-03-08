import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav className="nav-bar">
                <div className="container nav-container">
                <h3 className='name-brand'>ZhengC</h3>
                    <ul>
                        <li>_Home</li>
                        <li>_Projects</li>
                        <li>_About</li>
                    </ul>
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;