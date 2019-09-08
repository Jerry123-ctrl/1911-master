import React,{Component,Fragment} from 'react'
export default (Wrapper)=>{
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                name:localStorage.getItem('us')
            }
        }
        render(){
            return (
                <Fragment>
                    <Wrapper name={this.state.name}></Wrapper>
                </Fragment>
            )
        }
    }
    return NewComponent
}