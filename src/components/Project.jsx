import React, { Component } from 'react';
import TagFilter from './proj/TagFilter';
import Cover from './proj/Cover';
import { CardDeck } from 'reactstrap';
import projects from '../db';

const tags = ['JavaScript', 'Python', 'HTML', 'WeChat'];


class Project extends Component{
    render(){
        let oneProj = projects.map(proj => <a href={proj.link}><Cover proj={proj} /></a>);
        return(
            <div className='container'>
                <TagFilter tags={tags} />
                <CardDeck className='center'>
                    {oneProj}
                </ CardDeck>
                
            </div>
        )
    }
}

export default Project;