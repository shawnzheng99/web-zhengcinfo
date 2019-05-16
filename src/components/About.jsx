import React, { Component } from 'react';
import TextBox from './Textbox';

//
class About extends Component{
    render(){
        return(
            <div className='container'>
                <div className='center'>
                <img className='avatar-xl' src='https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/avatar/avatar.jpg' alt='avatar-xl' />
                </div>
                <TextBox />
                {/* Skills: JS, HTML, Py, CSS, AWS, contact me */}
            </div>
        )
    }
}

export default About;