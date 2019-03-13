import React, { Component } from 'react';
import TextBox from './Textbox';

class About extends Component{
    render(){
        return(
            <div className='container'>
                <div className='center'>
                <img className='avatar-xl' src='https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/avatar/2014-1.JPG' alt='avatar-xl' />
                </div>
                <TextBox />
            </div>
        )
    }
}

export default About;