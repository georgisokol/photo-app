import React from 'react'
import { Button} from 'react-bootstrap'
import './style.css'
import { showEdit } from '../../actions/showEditAction'
import {connect} from 'react-redux'
import ModalEditTitle from '../ModalEditTitle'
import ModalDelete from '../ModalDelete'
import { showDelete } from '../../actions/showDeleteAction'

class photoDetails extends React.Component{
    constructor(){
        super()
        this.state={
            photo: {},
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`,
        {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            this.setState({
                photo: data
            })
        })
    }
    render(){
        var title = this.state.photo.title
        var titleCaps
        if(title){
            titleCaps = title.charAt(0).toUpperCase() + title.slice(1)
        }
        return(
            <div className='container'>
                <div>
                    <img src={this.state.photo.url  } className='slika'/>
                </div>
            
            <div className='detailContainer'>
                <div className='spanContainer'>
                    <span className='label'>Title:</span>
                    <span className='item'>{titleCaps}</span>
                    <span className='label'>Url:</span>
                    <span className='item'>{this.state.photo.url}</span>
                    <span className='label'>Thumbnail Url:</span>
                    <span className='item'>{this.state.photo.thumbnailUrl}</span>
                </div>
                <div className='buttons'>
                    <Button  variant="outline-info" onClick={() => this.props.handleShow(this.state.photo.id)}>Edit Title</Button>
                    <Button  variant="outline-danger" onClick={() => this.props.handleShow1(this.state.photo.id) }>Delete Photo</Button>
                </div>

                    <ModalEditTitle idNumber={this.state.photo.id}/>
                    <ModalDelete idNumber={this.state.photo.id}/>
                </div>  
            </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        photos: state.photos.photos
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        handleShow: (id) => dispatch(showEdit(id)),
        handleShow1: (id) => dispatch(showDelete(id))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(photoDetails)