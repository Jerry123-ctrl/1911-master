import React,{Component,Fragment} from 'react'
class NavComponent extends Component{//创建一个组件
    constructor(){
        super()
        this.state={
            navs:['周杰伦','薛之谦','蔡徐坤'],
           
        }
    }
    renderNav(data){
        let {sel}=this.props
        if(!DataView.length) return '暂无数据'
        return (
            <ul className='nav-list'>
                {data.map((item,index)=>{
                    return <li className={sel===item?'nav-list-li primary':'nav-list-li'} 
                    key={index} onClick={this.props.fun.bind(this,item)} >{item}</li>  
                   //bind:改变this指向 //此时的this指向的是nav组件
                })}
            </ul>
        )
    } 
    render(){
        let {navs}=this.state
        return (
            <Fragment>
                {this.renderNav(navs)}
            </Fragment>
        )
    }
}
export default NavComponent