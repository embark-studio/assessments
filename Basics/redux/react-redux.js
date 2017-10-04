import {connect, createProvider} from 'react-redux'

const ExampleComponent = (props)=>(
  <div>
    {props.users.map((user)=>(
      <div>{user.firstName}</div>
    ))}
  </div>
)
export default connect ((state)=>{
  users: state.users
})(ExampleComponent)

class MainExampleComponent extends Component {

}
