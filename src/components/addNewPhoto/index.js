import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {hideAdd, addPhoto} from '../../actions/addNewPhotoAction'
import './style.css'


class AddNewPhoto extends React.Component {
    constructor(){
        super()
        this.state={
            url: '',
            title: '',
            thumbnail: '',
            changed: false

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value,
            changed: false
        })
    }

    NewPhoto= () =>{
        const postMethod = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                thumbnailUrl: this.state.thumbnail,
                url: this.state.url
            })
    }   
    fetch(`https://jsonplaceholder.typicode.com/photos`, postMethod)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            changed: true
        }) })

       
    }
    render(){
        var changed;
        if(this.state.changed){
            changed= <span>You added a new photo!</span>
        }
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bodyContainer'>
                    <span className='label'>Title:</span>
                    <input className='bodyItem' id='title' placeholder='Enter title' onChange={this.handleChange}/>
                    <span className='label'>Photo Url:</span>
                    <input className='bodyItem' id='url' placeholder='Enter photo url' onChange={this.handleChange}/>
                    <span className='label'>Thumbnail Url:</span>
                    <input className='bodyItem' id='thumbnail' placeholder='Enter thumbnail url' onChange={this.handleChange}/>
                    {changed}
                
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose} variant="secondary" >
                        Close
                     </Button>
                    <Button variant="primary"  onClick={this.NewPhoto} >
                        Add Photo
                    </Button>
              
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    
    return ({
        show: state.addPhoto.showAdd
    })
}
const mapDispatchToProps =(dispatch) => {
    return ({
        handleClose: () => dispatch(hideAdd())
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNewPhoto)