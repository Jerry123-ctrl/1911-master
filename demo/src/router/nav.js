import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
class NavComponent extends Component{
    jump=(id)=>{
        console.log(this)
        // let id=123
        this.props.history.push(`/home/${id}`)
    }
    render(){
        return(
            <Fragment>
                <ul>
                    <li onClick={this.jump.bind(this,123)}>首页</li>
                </ul>
            </Fragment>
        )
    }
}
let newComponent=withRouter(NavComponent)
//withRouter高阶组件,
//经过他处理过的组件,props里面就会有路由对象
export default newComponent