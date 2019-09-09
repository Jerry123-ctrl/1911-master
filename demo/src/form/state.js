import React,{Fragment,Component} from 'react'
class Hehe extends Component{
    constructor(){
        super()
        this.state={
            name:'韩梅梅'
        }
    }
    submit=()=>{
        console.log(this.state)
    }
    render(){
        return (
            <p>
                <input type="text" value={this.state.name} onChange={(e)=>{   {/*onChang:表单元素事件*/}
                    //console.log(e)//这样打印都是null,但是不影响使用
                    console.log(e.target)//这样打印就有内容了
                    this.setState({name:e.target.value})
                }}/>
                <button onClick={this.submit}>提交</button>
            </p>
        )
    }
}
export default Hehe