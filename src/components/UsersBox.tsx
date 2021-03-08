/* eslint-disable array-callback-return */
import UserFound from "./UserFound";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { User } from "../contexts/user";
import "../css/UserBox.css";

interface Visibility {
  name: string;
}

function UsersBox(props: Visibility) {
  const [users, setUsers] = useState<Array<User>>([]);
  const { newInputValue } = useContext(AppContext);

  const { sendUsersFound } = useContext(AppContext);

  useEffect(() => {
    if (newInputValue.length !== 0) {
      axios

        .get(
          `https://api.github.com/search/users?q=${newInputValue}+type:user`,
          {}
        )
        .then((response) => setUsers(response.data.items))
        .catch((err) => console.error(err));
    }
  }, [newInputValue]);

  sendUsersFound(users.length);
  
  if (users.length > 0) {
    return (
      <div className={props.name}>
        <div className="results">
          <samp>
            USER <i className="fas fa-angle-down"></i>
          </samp>
          <samp>
            CONTRIBUTIONS <i className="fas fa-angle-down"></i>
          </samp>
        </div>
        {users.map((user: User, i) => (
          <UserFound key={i} user={user} />
        ))}

        <button className="showMore">SHOW MORE</button>
      </div>
    );
  } else {
    return (
      <div className={props.name}>
        <h1 style={{ textAlign: "center", fontSize: "80px", color: "#aab9c4" }}>
          {users.length}
        </h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Hmm... We didn't find any users...
        </p>
        <span
          style={{
            display: "block",
            textAlign: "center",
            fontSize: "20px",
            color: "#b435b8",
          }}
        >
          RESET
        </span>
      </div>
    );
  }
}

export default UsersBox;
