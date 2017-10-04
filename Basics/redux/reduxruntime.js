function createStore(reducer){
  let oneState;
  let handlers = [];
  return {
    getState: function(){
      return oneState
    },
    dispatch: function(action){
      oneState = reducer(oneState, action)
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
  return function(state = _reducers, action){
    Object.keys(reducers).forEach(function(key){
      state[key] = reducers[key](_reducers[key], action)
    })
    _reducers = state;
    return state;
  }
};
//above this is runtime^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

rootReducer = combineReducers({
  games: gameReducer,
  users: userReducer
})

store = createStore(rootReducer)
