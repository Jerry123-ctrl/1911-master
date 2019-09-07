import React from 'react'

//Fragment 相当于根与元素
class Hehe extends React.Component{
   constructor(){//创建一个构造函数 构造函数相当于若react里的前两个周期
    //创建state和props
        super()//执行父类的构造函数
        this.state={
            name:'韩梅梅'
        }
    }
    render(){
        return (
            <p>
                这里是Box组件
            </p>
        )
    }
}
export default Hehe