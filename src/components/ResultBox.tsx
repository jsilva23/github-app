import UserCompany from "./UserCompany";
import UsersBox from "./UsersBox";
import CompaniesBox from "./CompaniesBox";
import { AppContext } from "../contexts/AppContext";

import "../css/ResultBox.css";
import { useContext } from "react";

function ResultBox() {
  const { viewUsers } = useContext(AppContext);
  const { viewCompany } = useContext(AppContext);
  const { initialScream } = useContext(AppContext);

  if (initialScream) {
    return (
      <div className="initial-box">
        <i className="fas fa-search"></i>
        <p>Enter a login, name or company you are looking for.</p>
      </div>
    );
  } else {
    return (
      <div className="result-box">
        <UserCompany />
        <div className="result">
          <UsersBox name={viewUsers} />
          <CompaniesBox name={viewCompany} />
        </div>
      </div>
    );
  }
}

export default ResultBox;
