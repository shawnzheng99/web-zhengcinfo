import React, { Component } from 'react';
import TagFilter from './proj/TagFilter';

class Project extends Component{
    render(){
        return(
            <div className='container'>
                <h1>This is Project page.</h1>
                <TagFilter />
            </div>
        )
    }
}

export default Project;