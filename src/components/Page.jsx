import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageGallery from 'react-image-gallery';
import Textbox from './Textbox';
import Footer from './Footer';

const sampleImg = [{original:'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp1.jpeg'},
                   {original: 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp2.jpeg'},
                   {original: 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp3.jpeg'}
                ]

class Page extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <div className='container'>
                    <ImageGallery className='gallery' items={sampleImg} 
                                  showThumbnails={false} 
                                  showFullscreenButton={false}
                                  showPlayButton={false}
                                  autoPlay={true}
                                  showNav={false}
                                  />
                    <Textbox className='text-desc' />
                </div>
                <Footer />
            </div>
        );
    }
}


export default Page;