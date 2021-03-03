import "../css/userData.css";
import { User } from "../user";
import axios from "axios";
import { useEffect, useState } from "react";

interface UserCardProps {
  user: User;
}

interface CurrentUser {
  name: string;
}

function UserFound({ user }: UserCardProps) {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.login}/events/public`, {})
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="found-box">
      <div className="user-img">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="user-data">
        <div className="user-name">
          <h1>{user.login}</h1>
          <span>{currentUser?.name}</span>
        </div>

        <span>2</span>
      </div>
    </div>
  );
}

export default UserFound;
