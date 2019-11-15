import React from 'react'
import {hideEdit} from '../../actions/showEditAction'
import {connect} from 'react-redux'
import {Modal,Button} from 'react-bootstrap'
import './style.css'
import {editTitle} from '../../actions/fetchPhotosAction'

class  ModalEditTitle extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputv: '',
      changed: false

    }
  }
  handleChange = (e) => {
    this.setState({
      inputv: e.target.value,
      changed:false
    })
  }
  saveChanges = () => {
    this.props.editTitle(this.props.idNumber, this.state.inputv)
    this.props.handleClose()
  }
  
  render(){
    var changed;
    if(this.state.changed){
      changed = <span>The title has been successfully changed!</span>
    }
    
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Title</Modal.Title>
          </Modal.Header>
        <Modal.Body className='body-container'>
            <span className='label'>Enter the new Title:</span>
            <input placeholder='Enter new title' onChange={this.handleChange}/>
            {changed}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose} variant="secondary" >
            Close
          </Button>
          <Button variant="primary"  onClick={  this.saveChanges} >
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>
    )
}}

 const mapStateToProps = (state) => {
    return({
        show: state.showEdit.show
    })
}
 const mapDispatchToProps = (dispatch) => {
    return({
        handleClose: () => dispatch(hideEdit()),
        editTitle: (id,title) => dispatch(editTitle(id,title))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalEditTitle)