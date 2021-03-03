import React, { Component } from 'react';
import Footer from './Footer';
import TextBox from './Textbox';

//
class About extends Component{
    render(){
        return(
            <div className='container'>
                <div className='center'>
                    <img 
                        className='avatar-xl' 
                        src={require('../assets/avatar/avatar.jpg')}
                        alt='avatar-xl' 
                        style={{marginBottom: 20}}
                    />
                    <Footer />
                </div>
                <div style={{marginBottom: 20}} />
                <TextBox />
                {/* Skills: JS, HTML, Py, CSS, AWS, contact me */}
            </div>
        )
    }
}

export default About;