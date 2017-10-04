function createStore(reducer){
  let _state;
  let _handlers = [];
  return {
    getState: function(){
      return _state
    },
    dispatch: function(_action){
      _state = reducer(_state, _action)
      _handlers.forEach(function(_handler){
        _handler()
      })
    },
    subscribe: function(_handler){
      _handlers.push(_handler)
    }
  }
}

function combineReducers(reducers){
  let _reducers = {}
  return function(_state = _reducers, _action){
    Object.keys(reducers).forEach(function(_key){
      _state[_key] = reducers[_key](_reducers[_key], _action)
    })
    _reducers = _state;
    return _state;
  }
};

function userReducer(_state = [], _action){
  switch(_action.type){
    case 'CREATE_USER':
      return [..._state, {..._action.payload}]
    default:
      return _state
    }
  }

function gameReducer(_state = [], _action){
  switch(_action.type){
    case 'CREATE_GAME':
      return [..._state, {
         name: _action.payload.name,
         description: _action.payload.description,
         date: _action.payload.date
      }]
    default:
      return _state
  }
}

rootReducer = combineReducers({
  games: gameReducer,
  users: userReducer
})

store = createStore(rootReducer)
