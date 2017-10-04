const React = {};

React.createElement = function(){
  const args = [].slice.apply(arguments);
  const kind = args[0];
  const element = document.createElement(kind);
  const props = args[1] || {}

  Object.keys(_props).forEach(function(key){
    if(key == "style"){
      Object.keys(props.style).forEach((_styleKey)=>{
        element.style[_styleKey] = props.style[_styleKey]
      })
    }else if(element[key]){
      // This is why className instead of class
      element[key] = props[key]
  })

  args.slice(2, args.length).forEach(function(innerItem){
    if(typeof innerItem== 'string'){
      element.innerHTML = (element.innerHTML || "") + innerItem
    }else{
      element.appendChild(innerItem)
    }
  })

  return element;
}
