import './index.css'
import Navcomponent from './nav.js'
import React ,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
function Home (props){
    console.log('homeprops',props)
    return (
        <div>
            这里是Home
        </div>
    )
}
class Box extends Component{
    render(){
        //console.log('router',this)
        return (
            <HashRouter>
                <Navcomponent></Navcomponent>
                <Switch>
                    <Route exact path='/home/:id' 
                    component={Home}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default Box