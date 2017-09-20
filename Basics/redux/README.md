# Redux
## Implement and Explain in your own code:

## React is a suggested prerequisite and is heavily used in these examples, you will not be able to successfully finish the assessment without it.

### Redux is Simple yet powerful

### Build basic Redux runtime yourself
```javascript
function createStore(reducer){
  let state;
  let handlers = [];
  return {
    getState: function(){
      return state
    },
    dispatch: function(action){
      state = reducer(state, action)
      handlers.forEach(function(handler){
        handler()
      })
    },
    subscribe: function(handler){
      handlers.push(handler)
    }
  }
}
function combineReducers(reducers){
  let _reducers = {}
  return function(state, action){
    Object.keys(reducers).forEach(function(key){
      state[key] = reducers[key](_reducers[key], action)
    })
    _reducers = state;
    return state;
  }
};
```

### This code should run with your custom runtime

#### Dispatching
```javascript
store.dispatch({
  type: "CREATE_USER",
  payload: {
    firstName: "Carson",
    lastName: "Wright"
  }
})
```

#### Reducers
```javascript
function userReducer(state = {}, action){
  switch(action.type){
    case 'CREATE_USER':
      return [...state, {...action.payload}]
    default:
      return state
  }
}
```

#### Consuming Subscriptions
```javascript
store.subscribe(()=>{
  console.log(store.getState())
})
```

### Using with React

```javascript
import {connect, createProvider} from 'react-redux'

const AComponent = (props)=>(
  <div>
    {props.users.map((user)=>(
      <div>{user.firsName}</div>
    ))
  </div>
)
export default connect((state)=>{
  users: state.users
})(AComponent)


const MainComponent => ()=>(
  <div>
    This component should have the user data assuming there is a user reducer \/
    <AComponent />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.querySelector("#main")
)
```