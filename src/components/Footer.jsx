import React,  { Component } from 'react';
import { IconContext } from "react-icons";
import { IoIosAperture, IoMdDocument } from 'react-icons/io';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const resumeUrl = 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/resumeChongyangZheng19.pdf';

class Footer extends Component{
    render(){
        return(
        <IconContext.Provider value={{ color:'#172b4c', size:'1.5em'}}>
            <div className='footer'>
                <p className='col1of4'>
                    <a href='https://unsplash.com/@murph_zheng' rel="noopener">
                        <IoIosAperture />
                    </a>
                </p>
                <p className='col1of4'>
                    <a href='https://github.com/shawnzheng99' rel="noopener">
                        <FiGithub />
                    </a>
                </p>
                <p className='col1of4'>
                < a href={resumeUrl} ref='opener'>
                        <IoMdDocument />
                </a>
                </p>
                <p className='col1of4'>
                    <a href='https://www.instagram.com/_daye.zheng/' rel="noopener" >
                        <FaInstagram />
                    </a>
                </p>
            </div>
        </ IconContext.Provider>

        )

    }
}

export default Footer;