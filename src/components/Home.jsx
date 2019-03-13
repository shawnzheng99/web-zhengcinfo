import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Textbox from './Textbox';

const sampleImg = [{ original: 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp1.jpeg' },
{ original: 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp2.jpeg' },
{ original: 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/landing-gallery/cyp3.jpeg' }
]
const resumeUrl = 'https://s3-us-west-2.amazonaws.com/zhengcinfo-web/assets/resumeChongyangZheng19.pdf';

class Home extends Component {
    render() {
        return (
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
        );
    }
}


export default Home;