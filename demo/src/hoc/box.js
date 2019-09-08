import React from 'react'
import Welcome from './welcome'
import Byby from './byby'
import Hello from './hello'
function Box(){
    return (
        <div>
            <h3>高阶组件</h3>
            <Welcome></Welcome>
            <Byby></Byby>
            <Hello></Hello>
        </div>
    )
}
export default Box