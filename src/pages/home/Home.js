import React from "react"
import UsersList from "./components/UserList"
import UserForm from "./components/UserForm"

class Home extends React.Component {
  state = {
    users: []
  }

  onSubmit = (user) => {
    this.setState({
      users: [user, ...this.state.users]
    })
    // console.log(user)
    // console.log(this.state.users)
  }

  render() {
    const { users } = this.state

    return (
      <div className="col-md-10 mx-auto">
        {/* <h1 className="py-2" align="center">
          This is HomePage.
        </h1> */}
        <h6 className="py-2" align="center"> Here goes validation with Final Form</h6>
        <UserForm onSubmit={this.onSubmit} />
        <UsersList users={users} />
      </div>
    )
  }
}

export default Home
