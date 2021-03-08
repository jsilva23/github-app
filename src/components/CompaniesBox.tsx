import CompanyFound from "./CompanyFound";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import { User } from "../contexts/user";
import "../css/UserBox.css";

interface Visibility {
  name: string;
}

function CompaniesBox(props: Visibility) {
  const [companies, setCompany] = useState<Array<User>>([]);
  const { newInputValue } = useContext(AppContext);

  const { sendcompaniesFound } = useContext(AppContext);

  useEffect(() => {
    if (newInputValue.length !== 0) {
      axios
        .get(
          `https://api.github.com/search/users?q=${newInputValue}+type:user`,
          {}
        )
        .then((response) => setCompany(response.data.items))
        .catch((err) => console.error(err));
    }
  }, [newInputValue]);

  sendcompaniesFound(companies.length);

  if (companies.length > 0) {
    return (
      <div className={props.name}>
        <div className="results">
          <samp>
            COMPANY <i className="fas fa-angle-down"></i>
          </samp>
          <samp>
            PEOPLE <i className="fas fa-angle-down"></i>
          </samp>
        </div>

        {companies.map((company: User, i) => (
          <CompanyFound key={i} company={company} />
        ))}
        <button className="showMore">SHOW MORE</button>
      </div>
    );
  } else {
    return (
      <div className={props.name}>
        <h1 style={{ textAlign: "center", fontSize: "80px", color: "#aab9c4" }}>
          {companies.length}
        </h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Hmm... We didn't find any company...
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

export default CompaniesBox;
