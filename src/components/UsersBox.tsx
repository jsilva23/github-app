/* eslint-disable array-callback-return */
import UserContribution from "./UserContribution";
import UserFound from "./UserFound";
import "../css/resultBoxes.css";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { User } from "../user";

function UsersBox() {
  const [users, setUsers] = useState<Array<User>>([]);
  const { newInputValue } = useContext(AppContext);

  console.log(newInputValue.length);

  useEffect(() => {
    if (newInputValue.length !== 0) {
      axios

        .get(
          `https://api.github.com/search/users?q=${newInputValue}+type:user`,
          {}
        )
        .then((response) => {
          console.log(response.data.items);
          return setUsers(response.data.items);
        })
        .catch((err) => console.error(err));
    }
  }, [newInputValue]);

  return (
    <div className="results">
      <h2>USER ({users.length})</h2>
      <div className="border"></div>
      <UserContribution />
      {users.map((user: User, i) => (
        <UserFound key={i} user={user} />
      ))}
      <button>SHOW MORE</button>
    </div>
  );
}

export default UsersBox;
