import React, { Component } from 'react';


class TagFilter extends Component{
    render(){
        let tags = this.props.tags;
        let tagLst = tags.map((tag,idx) =>
            <div className='li-div'>
                <li>{tag}</li>  
                <li>{idx}</li> 
            </div>
            
        );
        return(
            <div className='tag-filter'>
                <ul>
                    {tagLst}
                </ul>    
            </div>
        )
    }
}

export default TagFilter;