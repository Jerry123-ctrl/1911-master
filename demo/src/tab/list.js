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
        setTimeout(()=>{
            let obj={
                '周杰伦':['导向','听妈妈吗的哈','dfghjkl'],
                '薛之谦':['薛之谦','薛之谦','薛之谦'],
                '蔡徐坤':['蔡徐坤','蔡徐坤','蔡徐坤']
            }
            let List=obj[singer]
            this.setState({List})
        },500)
    }
    componentDidUpdate(){
        this.initData(this.props.singer)
    }
    componentDidMount(){
        let singer=this.props.singer
        this.initData(singer)
    }

    render(){
        return (
            <div className='list'>
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