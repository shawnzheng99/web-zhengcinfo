import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="nav-bar">
                <div className="container nav-container">
                <NavLink to={'/'}><h3 className='name-brand'>ZhengC</h3></NavLink>
                    <ul>
                        <li><a href='https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/resumeChongyangZheng19.pdf'>_Resume</a></li>
                        {/* <li><NavLink to={'/'}>_Home</NavLink></li> */}
                        <li><NavLink to={'/proj'}>_Projects</NavLink></li>
                        <li><NavLink to={'/about'}>_About</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;