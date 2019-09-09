import React ,{Component,Fragment} from 'react'
import {HashRouter,Link,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import './index.css'
function Home(){
    return (
        <div>
            这里是home
        </div>
    )
}
function Singer(props){
    console.log('singer',props)  //跳转的组件这里面没有this  也可以找到路由信息  
    return(
        <div>
            这里是歌手
        </div>
    )
}
function NotFind(){
    return (
        <div>
            你的页面打了杨
        </div>
    )
}
function Info(){
    return (
        <div>
            个人信息
        </div>
    )
}
function Login(){
    return (
        <div>
            登录
        </div>
    )
}
class Box extends Component{
    render(){
        console.log('router',this)
        return (
            <HashRouter>
                <Link to='/home'>首页</Link>
                <Link to='/singer'>歌手</Link>
                <NavLink to='/rank' activeClassName='red'>排行</NavLink>
                <NavLink to='/my' activeClassName='red'>我的</NavLink>
                <Redirect exact from='/' to='/home'></Redirect>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/singer' component={Singer}></Route>
                <Route path='/my' render={(props)=>{//嵌套路由父元素不要加精准匹配
                console.log('aaaaaaaaa',this,props)  //只有一个参数props  里面包含路由信息
                    return (
                        <div>
                            <h3> 我的</h3>
                            <Link to='/my/info'>个人信息</Link>
                            <Link to='/my/longin'>登录</Link>
                            <Switch>
                                <Redirect exact from='/my' to='/my/login'></Redirect>{/*重定向*/}
                                <Route path='/my/login' ccomonent={Login}></Route>  
                                {/*想在那嵌套就在那些route*/}
                                <Route path='/my/info' component={Info}></Route>
                            </Switch>   
                        </div>     
                    )
                }}>
                </Route>
                {/* <Route exact path='/rank' render={(props)=>{
                    console.log('aaaa',this)
                    return (
                        <div>
                            排行
                        </div>
                    )
                }}></Route> */}

               <Route exact path='/rank' children={(props)=>{
                    console.log("这里是children",this)
                    return (
                        <div>
                         排行
                     </div>
                     )
                 }}></Route>

                <Route component={NotFind} />
            </HashRouter>  
        )
    }
}
export default Box