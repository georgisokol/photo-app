import React from 'react'
import {connect} from 'react-redux'
import {fetchPhotos} from '../../actions/fetchPhotosAction'
import PhotoListItem from './SinglePhoto'
import './style.css'

class PhotoList extends React.Component{
    componentDidMount(){
        this.props.fetchPhotos();
    }
    render(){
        console.log(this.props.photos)
        return(
            <div className='photoList'>
                {this.props.photos.map((item,i) =>
                <PhotoListItem link={item.thumbnailUrl} title={item.title} key={i} idNum={item.id} />
                )}
            </div>  
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotos: () => {
            dispatch(fetchPhotos())
        }
    }
}
const mapStateToProps = (state) => {
    return{
        photos: state.photos.photos
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoList)
