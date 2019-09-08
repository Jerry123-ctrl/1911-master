import React,{Component} from 'react'
import './list.css'
class List extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    initData(singer){
        console.log('获取到singer ',singer)
        setTimeout(()=>{
            let obj={
                '周杰伦':['导向','听妈妈吗的哈','dfghjkl'],
                '薛之谦':['薛之谦','薛之谦','薛之谦'],
                '蔡徐坤':['蔡徐坤','蔡徐坤','蔡徐坤']
            }
            let list=obj[singer]
            console.log('获取List数据',list)
            this.setState({list})
        },10)
    }
    shouldComponentUpdate(props,state){//优化,如果重复点击,数据一样就不渲染,不一样就渲染
        // console.log(JSON.stringify(state.list))//新的数据
        // console.log(JSON.stringify(this.state.list))//数据是之前的的
        // if(JSON.stringify(state.list)===JSON.stringify(this.state.list)){
        //     return false
        // }else{
        //     return true
        // }
        if(state.list===this.state.list){
            return false
        }else{
            return true
        }
    }
    componentWillReceiveProps(props){//当props的值发生改变就触发,就props改变后的值传给initData方法
        console.log('打印props值',props.singer)
        this.initData(props.singer)
    }
    componentDidMount(){//挂载后  页面初始化渲染dom,下面列表第一个显示的人
        let singer=this.props.singer
        console.log('打印singer',singer)
        this.initData(singer)
    }
    render(){
        return(
          <div className='List'>
            <ul>
            {this.state.list.map((item,index)=>{
              return  <li key={index}>{item}</li>
            })}
            </ul>
          </div>
        )
    }
}
export default List