import React from "react"
import UserCard from "./UserCard";

let UsersList = ({users}) => {
  return (
    <div className='py-3'>
      {users.map((user) => {
        return <UserCard key={user.email} user={user} />;
      })}
    </div>
  );
}

export default UsersList
