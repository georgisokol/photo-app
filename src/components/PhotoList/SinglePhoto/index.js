import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class PhotoListItem extends React.Component{

    render(){
        var photo=this.props.photos;
        return(
            <Link to={'/details/' + this.props.idNum } className='link-style'>
            <div className='photo-container'>
                <img className='photo' src={this.props.link} alt='slika' />
                <span>{this.props.title}</span>
            </div>
            </Link>
        )
    }
}
export default PhotoListItem