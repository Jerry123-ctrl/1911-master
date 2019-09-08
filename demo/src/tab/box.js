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
    // changeNav(item){
    //     //不加箭头函数  this的指向是nav组件的方法
    //     console.log('查看this的指向',this)  
    //     this.setState({defaultSel:item})
    // }
    changeNav=(item)=>{
        //正常函数,this的指向就变了,this的指向是nav组件的方法
        //箭头函数不改变this指向,指向父组件box,只有指向box,才可以修改state的值
        // alert(item)
        console.log('查看this的指向',this)
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


