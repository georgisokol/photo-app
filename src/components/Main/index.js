import React from 'react'
import Header from '../header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PhotoList from '../PhotoList'
import PhotoDetails from '../PhotoDetails'
import AddNewPhoto from '../addNewPhoto'


class Main extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <AddNewPhoto/>
                    <div>
                    <Switch>
                        <Route exact path='/' component={PhotoList}/>
                        <Route exact path='/details/:id' component={PhotoDetails}/>
                    </Switch>
                    </div>
                </BrowserRouter>    
            </div>
        )
    }
}
export default Main;