//高阶组件  也类似于封装，将共有的部分提取出来
import React,{Component,Fragment} from 'react'
export default (Wrapper)=>{//Wrapper===Hello
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                name:localStorage.getItem('us')
            }
        }
        render(){
            return (//类似于父子传参
                <Fragment>
                    <Wrapper name={this.state.name}></Wrapper>
                </Fragment>
            )
        }
    }
    return NewComponent
}