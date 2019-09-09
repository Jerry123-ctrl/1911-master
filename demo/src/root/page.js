import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
function Goods(){
    return (
        <div>
            这里是商品页
        </div>
    )
}
function Vip(){
    return (
        <div>
            这里是vip
        </div>
    )
}
function Banner(){
    return (
        <div>
            这里是广告
        </div>
    )
}
class Pages extends Component{
    constructor(){
        super()
        this.state={
            rootlist:[
                {path:'/goods',name:'商品管理',component:Goods},
                {path:'/banner',name:'广告管理',component:Banner}
            ]
        }
    }
    render(){
        return (
            <div>
                <Switch>
                    <Redirect to='/home' from ='/' exact></Redirect>{/*默认地址*/}
                    {this.state.rootlist.map((item,index)=>{
                        return <Route path={item.path} component={item.component}{/*路由地址栏变化*/}
                        key={index}></Route>
                    })}
                </Switch>
            </div>
        )
    }
}
export default Pages