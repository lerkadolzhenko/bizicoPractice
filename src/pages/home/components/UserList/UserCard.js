import React from "react"

let UserCard = ({ user }) => {
  // console.log(user);
  return (
    <div className="card border-primary my-4">
      <div className="card-header">
        {user.firstName} {user.lastName}
        <small className="text-muted"> From: {user.country}</small>
      </div>
      <div className="card-body">
        <p className="card-text">{user.comment}</p>
        <p className="card-text">
          <small className="text-muted">{user.email}</small>
        </p>
      </div>
    </div>
  )
}

export default UserCard
