import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class Cover extends Component {
    render() {
        let project = this.props.proj;
        let tag = project.tag.map((e, i) => <small key={'st' + i} className="text-muted">{e} &nbsp; </small>);
        return (
            <div className='cover'>
                <Card>
                    <div className='cover-inside'>
                    {/* imgsize: 318*180 */}
                    <CardImg className='cover-img' top width="100%" src={project.img} alt="Proj ScreenShot" />
                    <CardBody>
                        <CardTitle>{project.name}</CardTitle>
                        <CardSubtitle>{project.date}</CardSubtitle>
                        <CardText>{project.desc}</CardText>
                        
                        <div>{tag}</div>
                    </CardBody>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Cover;