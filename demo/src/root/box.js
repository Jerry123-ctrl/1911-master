import React,{Component} from 'react'
import {HashRouter} from 'react-router-dom'
import NavComponent from './nav'
import Pages from './page'
class Box extends Component{
    render(){
        return (
            <HashRouter>
                <NavComponent></NavComponent>
                <Pages></Pages>
            </HashRouter>
        )
    }
}
export default Box