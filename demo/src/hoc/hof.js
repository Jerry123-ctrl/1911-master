//高阶函数  接受一个函数,返回一个函数  
//类似于封装一个方法，可以减少代码的冗余
function getName(){
    return '韩梅梅'
}
function welcome(name){
    console.log('welome:'+name)
    
}
function byby(name){
    console.log('byby:'+name)
}
function hof(wrapperFun){//wrapperFun===welcome
    let newFun=()=>{
        let name=getName()
        wrapperFun(name)//调用传过来的函数，
    }
    return newFun
}
hof(welcome)()//传一个函数作为参数
hof(byby)()