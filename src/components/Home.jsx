import axios from 'axios';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Textbox from './Textbox';

const sampleImg = [{ original: require('../assets/landing-gallery/cyp1.jpeg') },
{ original: require('../assets/landing-gallery/cyp2.jpeg') },
{ original: require('../assets/landing-gallery/cyp3.jpeg') },
{original: require('../assets/landing-gallery/bridge1.jpeg')}
]

const UNSPLASH_ACCESS_KEY = '2qJDIZBBeXJ4AVis1jnP9Dp4sUuXrVh3wHEuVPrIn_c'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            unsplashPhotoUrls: sampleImg,
        }
    }

    async componentDidMount(){
        try{
            const { data } = await axios.get(
                'https://api.unsplash.com/users/murph_zheng/photos/?client_id='+
                UNSPLASH_ACCESS_KEY + '&orientation=landscape'
            )
            console.log(data, '???')
            const unsplashPhotoUrls = data.map(ph => {
                return {original: ph.urls.full}
            })
            this.setState({
                unsplashPhotoUrls
            })
        }catch(e) {
            this.setState({
                unsplashPhotoUrls: sampleImg
            })
            console.log('calling unsplash api has failed@Home.jsx: ', e)
        }
    }

    render() {
        const { unsplashPhotoUrls } = this.state;
        return (
            <div className='container'>
                <ImageGallery 
                    className='gallery' 
                    items={unsplashPhotoUrls}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={true}
                    showNav={false}
                    slideInterval={5000}
                />
                <div style={{marginBottom: 20}} />
                <Textbox className='text-desc' style={{marginTop: '10'}} />
            </div>
        );
    }
}


export default Home;