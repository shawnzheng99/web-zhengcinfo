import React, { Component } from 'react';
import Cover from './proj/Cover';
import { CardDeck } from 'reactstrap';

import projects from '../db';
const tags = ['JavaScript', 'HTML', 'WeChat', 'React Native', 'Vue'];


class Project extends Component{

    constructor(props) {
        super(props)
        this.state = {
            projects: projects,
            tags,
        }
    }

    componentDidMount() {

    }

    onTagClick = (tagName) => {
        const { projects: allPrj, tags: currTags } = this.state;
        if(currTags.length === 1) return this.setState({
            projects,
            tags
        })
        this.setState({
            projects: allPrj.filter(proj => proj.tag.includes(tagName)),
            tags: ['All']
        })
    }

    renderEachTag = (tagName, idx) => {
        if(idx === this.state.tags.length - 1) {
            return (
                <li key={idx + 'tag'} onClick={() => this.onTagClick(tagName)} >{tagName}</li>
            )
        }else{
            return (
                <li key={idx + 'tag'} onClick={() => this.onTagClick(tagName)} >{tagName} | </li>
            )
        }
    }

    render(){
        const { projects, tags } = this.state;

        return(
            <div className='container'>
                <div className='tag-filter'>
                    {tags.map((t, i) => this.renderEachTag(t, i))}
                </div>
                <CardDeck className='center'>
                    {projects.map((proj, i) => <a key={'Proj' + i} href={proj.link}><Cover key={'Cov' + i} proj={proj} /></a>)}
                </ CardDeck>
                
            </div>
        )
    }
}

export default Project;