const React = {};
React.createElement = function() {
  const _args = [].slice.apply(arguments);
  const _kind = _args[0];
  const _element = document.createElement(_kind);
  const _props = _args[1] || {} //confident coding to always get an object into '_props'
  Object.keys(_props).forEach(function(key) { //Objects.keys gives back an array
    if (key == "style") {
      Object.keys(_props.style).forEach((_styleKey)=>{
        _element.style[_styleKey] = _props.style[_styleKey]
      })
    } else if (_element[key]) {
      _element[key] = _props[key]
    }
  })

  _args.slice(2, _args.length).forEach(function(innerItem) {
    if(typeof innerItem == 'string') {
      _element.innerHTML = (_element.innerHTML || "") + innerItem
    } else {
      _element.appendChild(innerItem)
    }
  })

  return _element;
}

React.createElement(
  "div",
  {className: "blue", style: {color: "blue"}},
  React.createElement('div',{}, "Inner Content"),
  "Other Inner Content"
)
