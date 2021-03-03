import CompanyPeople from "./CompanyPeople";
import CompanyFound from "./CompanyFound";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../user";

function CompaniesBox() {
  const [companies, setCompany] = useState<Array<User>>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/search/users?q=psantos+type:user", {})
      .then((response) => setCompany(response.data.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="results">
      <h2>COMPANIES (2)</h2>
      <div className="border"></div>
      <CompanyPeople />
      {companies.map((company: User, i) => (
        <CompanyFound key={i} company={company} />
      ))}
      <button>SHOW MORE</button>
    </div>
  );
}

export default CompaniesBox;
