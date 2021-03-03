import UsersBox from "./UsersBox";
import CompaniesBox from "./CompaniesBox";

import "../css/ResultBox.css";

function ResultBox() {
  return (
    <div className="result-box">
      <UsersBox />
      <CompaniesBox />
    </div>
  );
}

export default ResultBox;
