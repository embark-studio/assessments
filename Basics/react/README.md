# React
## Implement and Explain in your own code:

## Webpack is a suggested prerequisite and is heavily used in these examples, you will not be able to successfully finish the assessment without it.

### React is Javascript
Background:
```jsx
<div />
```

#### React
```javascript
React.createElement('div')
```

#### Built In
```javascript
document.createElement('div')

```

### Build basic JSX runtime yourself

Your code should be able to run this:
```javascript
React.createElement(
  type,
  {className: "blue", style: {color: "blue"}},
  React.createElement('div',{}, "Inner Content"),
  "Other Inner Content"
)
```

```javascript
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
```

### Caveats
#### className vrs class
```jsx
<div className="your-classname" />
```
#### Closing Tags
##### This will not compile correctly
```jsx
<div>
```
##### This will
```jsx
<div />
```

### Components

#### Functional Component
```jsx
const ExampleComponentOne = (props)=>(
  <div>
    {props.firstName}
  </div>
)
export default ExampleComponent;
```

#### Class Component
```jsx
import {Component} from 'react';
import ExampleComponentOne from './ExampleComponentOne'

class ExampleComponentTwo extends Component{
  render(){
    return (
      <div>
        <ExampleComponentOne firstName='John' />
      </div>
    )
  }
)

export default ExampleComponent;
```

#### Using Functional Component Raw
```jsx
  <div>
    {ExampleComponentOne({firstName: 'John'})}
  </div>
```

#### Binding instance methods
```javascript
import {Component} from 'react'
class ExampleControlledComponent extends Component {
  constructor(){
    super()
    
    /************************************
     * Must be bound to this for context
     ************************************/
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
```

#### Handling State
```jsx
import {Component} from 'react'
class ExampleControlledComponent extends Component {
  constructor(){
    super()
    this.state = {value: ''}

  }
  handleChange(e){
    this.setState({value: e.target.value})
  }
  render(){
    <input value={this.state.value} onChange={this.handleChange}/>
  }
}
```

#### Do not use CLASS functions to return JSX
```jsx
class BadExample extends Component {
  hereIsSomeJSX(){
    return <div>here is jsx</div>
  }
  render(){
    return (
      <div>
        {this.hereIsSomeJSX()}
      </div>
    )
  }
}
```

## React is Javascript
### Loops
```jsx
const ListItem = (props)=>(
  <div>
    {props.people.map((person)=>(
      <div>{person.firstName}</div>
    ))}
  </div>
)
```

### Filter
```jsx
const ListItem = (props)=>{
  const people = props.people.filter((person)=>(
    person.firstName
  ))
  // First Name is not null
  return (
    <div>
      {people.map((person)=>(
        <div>{person.firstName}</div>
      ))}
    </div>
  )
}
```
### If Statement Types
Remember that if statements cannot be used inside jsx

#### If true
```jsx
const ShowContent = (props)=>(
  <div>
    {props.shouldShow && (
      <div>
        If Shown Content
      </div>
    )}
  </div>
)
```

#### If false
```jsx
const NotShowContent = (props)=>(
  <div>
    {props.shouldShow || (
      <div>
        If Shown Content
      </div>
    )}
  </div>
)
```

#### If true show one if false show another
```jsx
const ShowNotShow = (props)=>(
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
```

#### Correct Organization of Component Folder
```
/ComponentName
  /index.jsx
  /style.scss
```