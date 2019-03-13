import React,  { Component } from 'react';
import { IconContext } from "react-icons";
import { IoIosAperture } from 'react-icons/io';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';


class Footer extends Component{
    render(){
        return(
        <IconContext.Provider value={{ color:'#172b4c', size:'1.5em'}}>
            <div className='footer'>
                <p className='col1'>
                    <a href='https://www.zhengclab.com/' rel="noopener">
                        <IoIosAperture />
                    </a>
                </p>
                <p className='col1'>
                    <a href='https://github.com/shawnzheng99' rel="noopener">
                        <FiGithub />
                    </a>
                </p>
                <p className='col1'>
                    <a href='https://www.instagram.com/daye.zheng/' rel="noopener">
                        <FaInstagram />
                    </a>
                </p>
            </div>
        </ IconContext.Provider>

        )

    }
}

export default Footer;