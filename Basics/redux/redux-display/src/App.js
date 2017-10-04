import {connect, Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

const { Component } = React;

function userReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_USER':
      return [...state, {...action.payload}]
    default:
      return state
  }
}

function gameReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_GAME':
      return [...state, {
        name: action.payload.name,
        description: action.payload.description,
        date: action.payload.data
      }]
      default:
        return state
  }
}

const rootReducer = combineReducers({
  games: gameReducer,
  users: userReducer
})

const Store = createStore(rootReducer)
window.Store = Store

let ExampleComponent = (props) => (
  <div>
    {props.users.map((user, i) => (
      <div key={i}>
        {user.firstName}
      </div>
    ))}
  </div>
)

ExampleComponent = connect((state) => ({
  users: state.users
}))(ExampleComponent)

class MainExampleComponent extends Component {
  constructor() {
    super()

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {}
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    Store.dispatch({type: 'CREATE_USER', payload: {...this.state}})
  }

  render() {
    return (
      <div>
        <ExampleComponent />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleFirstNameChange} />
          <input type="text" onChange={this.handleLastNameChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MainExampleComponent
