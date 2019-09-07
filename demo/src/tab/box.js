import React,{Component,Fragment} from 'react'
import NavComponent from './nav'
import './nav.css'
import List from './list'
class Box extends Component{
    constructor(){
        super()
        this.state={
            defaultSel:'周杰伦'
        }
    }
    shouldComponentUpdate(props,state){//数据优化，重复点击，就不在加载
        if(this.state.defaultSel===state.defaultSel){
            return false
        }else{
            return true
        }
    }
    changeNav=(item)=>{//正常函数,this的指向就变了，箭头函数不改变this指向
        // alert(item)
        console.log(this)
        this.setState({defaultSel:item})
    }
    render(){
        console.log('box render')
        let {defaultSel}=this.state
        return(
            <Fragment>
                <NavComponent sel={defaultSel} fun={this.changeNav}></NavComponent>
                <List singer={defaultSel}></List>
            </Fragment>
        )
    }
}
export default Box


