import React,{Component} from 'react'
import Hoc from './hoc'
class Hello extends Component{
    render(){
        return(
            <div>
                <p>Hello{this.props.name}</p>
            </div>
        )
    }
}
export default Hoc(Hello)