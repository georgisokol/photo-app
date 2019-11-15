import React from 'react'
import {connect} from 'react-redux'
import {hideDelete} from '../../actions/showDeleteAction'
import {Modal, Button} from 'react-bootstrap'
import {deletePhoto} from '../../actions/fetchPhotosAction'


class ModalDelete extends React.Component{
  deleteAndClose = () => {
    this.props.deletePhoto(this.props.idNumber)
    this.props.handleClose()
  }
    render(){
      return(
        <Modal show={this.props.showdel} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <span>Are you sure?</span>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary" >
              No
            </Button>
            <Button variant="primary" onClick={ this.deleteAndClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
    )
}}
const mapStateToProps = (state) => {
     return ({
         showdel: state.showDelete.showd,
         idNumm: state.showDelete.id,
         photos: state.photos.photos
     })
}
const mapDispatchToProps = (dispatch) =>{
    return({
        handleClose: () => dispatch(hideDelete()),
        deletePhoto: (id) => dispatch(deletePhoto(id))
    })  
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalDelete)