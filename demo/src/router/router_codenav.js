import React ,{Component,Fragment} from 'react'
import {HashRouter,Route,NavLink,Switch,Redirect} from 'react-router-dom'
  function Home(){
      return (
          <div>这里是home</div>
      )
  }
  function NotFind(){
      return (
          <div>你的页面打了杨</div>
      )
  }
  function Info(){
      return (
          <div>个人信息</div>
      )
  }
  function Login(props){
      console.log('login组件',props)
      return (
          <div>登录</div>
      )
  }
  class My extends Component{
      jump=(path)=>{
          //跳转的几种方式  跳转到那个组件,那个组件打印props,找传参地址
          //this.props.history.push('/my'+path)  //字符串拼接  push:一步一步回退
         //this.props.history.replace('/my'+path) // replace:不能一步一步回退,回退直接到根

        // this.props.history.push({pathname:`/my${path}`,state:{us:123,ps:123}})//state传参,页面刷新,页面数据不保留
         //可以传参  单地址栏中不显示 在state里面取值  取值：this.props.localtion.state+值名
        //this.props.history.push({pathname:`/my${path}`,query:{us:123,ps:222}})//query传参跟state差不多 不建议使用

        this.props.history.push(`/my${path}?us:网易&ps:123`)  //地址栏中也显示 get传参在search里面,不好取,得把数据进行处理
      }
      render(){
          console.log('my',this)
          return (
              <div>
                  我的页面
                  <ul>
                      <li onClick={this.jump.bind(this,'/login')}>登录</li>
                      <li onClick={this.jump.bind(this,'/info')}>信息</li>
                  </ul>
                  <Route path='/my/login' component={Login}></Route>
                  <Route path='/my/info' component={Info}></Route>
              </div>
          )
      }
  }
  class Box extends Component{
      render(){
          console.log('router',this)
          return (
              <HashRouter>
                  <NavLink to='/home' activeClass='red'>首页</NavLink>
                  <NavLink to='/my' activeClass='red'>我的</NavLink>
                  <Switch>
                      <Redirect exact from='/' to='/home'></Redirect>
                      <Route exact from='/home' component={Home}></Route>
                      <Route path='/my' component={My}></Route>{/*跳到组件,组件在跳转组件*/}
                      
                  </Switch>
              </HashRouter>
          )
      }
  }
  export default Box