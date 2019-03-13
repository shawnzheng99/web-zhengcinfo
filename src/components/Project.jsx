import React, { Component } from 'react';
import TagFilter from './proj/TagFilter';
import Cover from './proj/Cover';
import { CardDeck } from 'reactstrap';

const tags = ['JavaScript', 'Python', 'HTML', 'WeChat'];


class Project extends Component{
    render(){
        return(
            <div className='container'>
                <TagFilter tags={tags} />
                <CardDeck className='center'>
                    <Cover />
                    <Cover />
                    <Cover />
                    <Cover />
                </ CardDeck>
                
            </div>
        )
    }
}

export default Project;