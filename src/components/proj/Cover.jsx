import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class Cover extends Component {
    render() {
        return (
            <div className='cover'>
                <Card>
                    <div className='cover-inside'>
                    {/* imgsize: 318*180 */}
                    <CardImg className='cover-img' top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Proj ScreenShot" />
                    <CardBody>
                        <CardTitle>BeneHome</CardTitle>
                        <CardSubtitle>May, 2018</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                            <small className="text-muted">Java</small>
                            <small className="text-muted">Java</small>

                    </CardBody>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Cover;