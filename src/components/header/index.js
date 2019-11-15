import React from 'react';
import './style.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import {addPhoto} from '../../actions/addNewPhotoAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    constructor(){
        super();
        this.state={}

    }
    render(){
        console.log(this.props)
        return(
            <div className='header'>
                <Link to='/' className='linkNaslov'>
                    <h2 className='naslov'>Photo App</h2>
                </Link>
                
                <span className='add' onClick={this.props.handleShow}>
                    <IoIosAddCircleOutline />
                    Add New Photo
                </span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        handleShow: () => {dispatch(addPhoto())}
    })
}

export default connect(null,mapDispatchToProps)(Header)