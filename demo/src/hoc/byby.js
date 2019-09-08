import React,{Component} from 'react'
import Hoc from './hoc'
class Byby extends Component{
    render(){
        return (
            <div>
                <p>Byby{this.props.name}</p>
            </div>
        )
    }
}
export default Hoc(Byby)
