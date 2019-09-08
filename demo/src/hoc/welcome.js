import React,{Component} from 'react'
import Hoc from './hoc'
class Welcome extends Component{
    render(){
        return (
            <div>
                <p>welcome{this.props.name}</p>
            </div>
        )
    }
}
let newComponent =Hoc(Welcome)
export default newComponent