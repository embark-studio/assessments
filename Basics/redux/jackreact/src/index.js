import {connect, Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'

const {Component} = React;

function userReducer(state = [], action){
  switch(action.type){
    case 'CREATE_USER':
      return [...state, {...action.payload}]
    default:
      return state
  }
}

function gameReducer(state = [], action){
  switch(action.type){
    case 'CREATE_GAME':
      return [...state, {
         name: action.payload.name,
         description: action.payload.description,
         date: action.payload.date
      }]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  games: gameReducer,
  users: userReducer
})

const store = createStore(rootReducer)
window.store = store;

let AComponent = (props)=>(
  <div>
    {props.users.map((user, i)=>(
      <div key={i}>{user.firstName}</div>
    ))}
  </div>
)
AComponent = connect((state)=>({
  users: state.users
}))(AComponent)


class MainComponent extends Component {
  constructor() {
    super();
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {}
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    })
    console.log(this.state)
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    })
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log("this happened");
    store.dispatch({type: "CREATE_USER", payload: {...this.state}});
  }

  render(){
    return(
      <div>
        This component should have the user data assuming there is a user reducer \/
        <AComponent />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleFirstNameChange} />
          <input type="text" onChange={this.handleLastNameChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.querySelector("#root")
)
