import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";
import "../css/UserCompany.css";

function UserCompany() {
  const { showUsers } = useContext(AppContext);
  const { showCompany } = useContext(AppContext);
  const { borderUser } = useContext(AppContext);
  const { borderCompany } = useContext(AppContext);

  const { usersFound } = useContext(AppContext);
  const { companiesFound } = useContext(AppContext);


  function handleShowUsers() {
    showUsers();
  }

  function handleShowCompany() {
    showCompany();
  }
  return (
    <div className="main-user-company">
      <div className="user-company">
        <div className="user" id={borderUser} onClick={handleShowUsers}>
          <h2>USER ({usersFound})</h2>
          <div className="border user-border"></div>
        </div>
        <div className="company" id={borderCompany} onClick={handleShowCompany}>
          <h2>COMPANIES ({companiesFound})</h2>
          <div className="border company-border"></div>
        </div>
      </div>

      <div className="border main-border"></div>
    </div>
  );
}

export default UserCompany;
