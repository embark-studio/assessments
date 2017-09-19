let React = {};
React.createElement = function() {
    const args = [].slice.apply(arguments);
    const elementType = args[0];
    const elem = document.createElement(elementType);
    const params = args[1] || {};
    Object.keys(params).forEach((param)=>{
        if(param == "style"){
            Object.keys(params.style).forEach((s)=>{  
                elem.style[s] = params.style[s];
            });
        } else if(elem[param]){
            elem[param] = params[param];   
        }
    });
    
    args.slice(2,args.length).forEach((inner) =>{
        if(typeof inner == "string"){
            elem.innerHTML += inner;
        } else {
            elem.appendChild(inner);
        }    
    })
    
    return elem;
}


const TestComponentOne = (props) => {
    <div>
        {props.resourceName}
    </div>
}
export default TestComponent;



import {Component} from 'react';
import TestComponentOne from './TestComponentOne'

class TestComponentTwo extends Component{
    render(){
        return(
            <div>
                <TestComponentOne resourceName="textbooks" />
            </div>
        )
    }
}
export default TestComponent;

<div>
    {TestComponentOne({resourceName: "teachers"})}
</div>

import {Component} from 'react'
class TestControlledComponent extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        e.preventDefault()
        console.log("BUTTON CLICKED")
    }
    render(){
        return (
            <a href="#" onClick={this.handleClick}>
                Click This
            </a>
        )
    }
}

import {Component} from 'react'
class TestControlledComponentTwo extends Component {
    constructor() {
        super()
        this.state = {currentUser: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        e.preventDefault()
        this.setState({currentUser: e.target.value})
    }
    render(){
        <input value={this.state.currentUser} onChange={this.handleChange} />
    }
}

const MapProps = (props) => {
    <div>
        {props.users.map((u)=>{
            <div>
                {u.name}
            </div>
        })}
    </div>
}

const FilterProps = (props) => {
    const users = props.users.filter((u) => {
        u.name
    })

    return (
        <div>
            {props.users.map((u)=>{
                <div>
                    {u.name}
                </div>
            })}
        </div>
    )
}

const ifTrue = (props) => {
    <div>
        {props.visible && (
            <div>
                Shows if visible true
            </div>
        )}
    </div>
}

const ifFalse = (props) => {
    <div>
        {props.visible || (
            <div>
                Shows if visible false
            </div>
        )}
    </div>
}

const eitherOr = (props) => {
    <div>
        {props.visible?(
            <div>
                Show if visible true
            </div>
         ):(
            <div>
                Show if visible false
            </div>
        )}
    </div>
}                







    


