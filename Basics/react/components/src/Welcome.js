import React , { Component } from 'react';

//Either true or false
const random = Math.random() < 0.5;

//Component class that holds if statements
class WelcomeHeader extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    console.log('Clicked')
  }

  render() {
    const actors = [
      {
        firstName: 'Bill',
        lastName: 'Murray'
      },
      {
        firstName: 'Jeff',
        lastName: 'Goldbloom'
      },
      {
        firstName: 'Willem',
        lastName: 'Defoe'
      }
    ];

    const ListItem = (props)=>{
      const people = props.people.filter((actors)=>(
        actors.firstName
      ))
      // First Name is not null
      return (
        <ul>
          {people.map((actors)=>(
            <li>{actors.firstName}</li>
          ))}
        </ul>
      )
    }

    return (
      <div className="App">
        <a href='#' onClick={this.handleClick}>
          Good to see you again, <IansJacksExample firstName={this.props.name} />
        </a>

        <br />

        {/* Ternary if statement */ }
        {random ? (
          <p className="App-intro">
            {IansJacksExample({firstName : this.props.name})}, I got rendered because the ternary statement is true
          </p>
        ) : (
          <p className="App-intro">
            {IansJacksExample({firstName : this.props.name})}, I got rendered because the ternary statement is false
          </p>
        )}

        {/* Conditional if statement (true) */}
        {random && (
          <p className="App-intro">
            I got rendered because the conditional statement is true
          </p>
        )}

        {/*Conditional if statement (false) */}
        {random || (
          <p className="App-intro">
            I got rendered because the conditional statement is false
          </p>
        )}

        <ListItem people={actors} />
      </div>
    )
  }
}

const IansJacksExample = (props)=>(
  <div>
    {props.firstName}
  </div>
)

export default WelcomeHeader;
