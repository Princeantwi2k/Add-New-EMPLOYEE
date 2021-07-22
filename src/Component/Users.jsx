import React from "react";
import User from "./User";

const Users = (props) => {
  return (
    <>
      {props.usersDater.map((user, id) => {
        return (
          <User
            userinfo={user}
            key={id}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </>
  );
};

export default Users;
