import "../css/userData.css";
import { User } from "../contexts/user";

interface CompanyCardProps {
  company: User;
}

function CompanyFound({ company }: CompanyCardProps) {
  return (
    <div className="found-box">
      <div className="user-img">
        <img src={company.avatar_url} alt="" />
      </div>
      <div className="user-data">
        <div className="user-name">
          <h1>{company.login}</h1>
          <span>{company.name}</span>
        </div>

        <span>12</span>
      </div>
    </div>
  );
}

export default CompanyFound;
