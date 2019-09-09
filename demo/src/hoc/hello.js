import React,{Component} from 'react'
import Hoc from './hoc'//引入高阶组件
class Hello extends Component{
    render(){
        return(
            <div>
                <p>Hello{this.props.name}</p>
            </div>
        )
    }
}
export default Hoc(Hello)//调用Hoc并传参组件