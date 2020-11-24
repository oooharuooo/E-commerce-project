import React, { Component } from 'react';
import dataSections from './Directory.data';
import MenuItems from '../MenuItems/MenuItems';
import "./Directory.scss";

export class Directory extends Component {
    state = {
        sections: dataSections,
    }
    render() {
        return (
            <div className="directory-menu">
            {this.state.sections.map(({title,imageUrl,id,linkUrl,size}) => (
                    <MenuItems key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            </div>
        )
    }
}


export default Directory
