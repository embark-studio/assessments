import registerServiceWorker from './registerServiceWorker';
import {React, ReactDOM} from './React';
import {Component} from 'react';

const App = () => (
  <div>
    <div className="potatoes" />
    <img />
    <JackComponentOne firstName = 'Jack' />
    {JackComponentOne({firstName: 'Jack'})}
  </div> 
)

const JackComponentOne = (props)=>(
  <div>
    {props.firstName}
  </div>
)

class JackComponentTwo extends Component{
  render(){
    return (
      <div>
        <JackComponentOne firstName='Jack2' />
      </div>
    )
  }
}

class ExampleControlledComponent extends Component {
  constructor(){
    super()
    
    /************************************
     * Must be bound to this for context
     ************************************/
    //gives access to state/props when used
    //really important do not forget
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    /***********************************
     * ALWAYS PREVENT ANCHOR CLICKS
     * href='#' is never enough
     ***********************************/
    e.preventDefault()
    console.log('CLICKED')
  }
  render(){
    return (
      <a href='#' onClick={this.handleClick}>
        Click Me
      </a>
    )
  }
}

class JackControlledComponent extends Component {
  constructor(){
    super()
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }
  render(){
    <input value={this.state.value} onChange={this.handleChange}/>
  }
}

const ListPeople = (props)=>(
  <div>
    {props.people.map((person)=>(
      <div>{person.firstName}</div>
    ))}
  </div>
)

const ListItem = (props)=>{
  const individual = props.individual.filter((person)=>(
    person.firstName
  ))
  // First Name is not null
  return (
    <div>
      {individual.map((person)=>(
        <div>{person.firstName}</div>
      ))}
    </div>
  )
}

const testTrue = (props)=>(
  <div>
    {props.shouldShow && (
      <div>
        If Shown Content
      </div>
    )}
  </div>
)

const testFalse = (props)=>(
  <div>
    {props.shouldShow || (
      <div>
        If Shown Content
      </div>
    )}
  </div>
)

const testTrueOrFalse = (props)=>(
  <div>
    {props.shouldShow?(
      <div>
        If Shown Content
      </div>
    ):(
      <div>
        Should show other content
      </div>
    )}
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
