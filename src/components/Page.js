import React, { Component } from 'react';
import Navbar from './Navbar';

class Page extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <div className='container'>
                    <p>this is container</p>
                </div>
            </div>
        );
    }
}


export default Page;