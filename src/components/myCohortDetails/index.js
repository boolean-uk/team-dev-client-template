import ProfileCircle from "../profileCircle";
import UserCard from "../userCard";
import Card from "../card";
import "./style.css";
import { useTranslation } from "react-i18next";

const MyCohortDetails = ({ users }) => {
  const {t} = useTranslation()
  return (
    <Card>
      <h3 className="my-cohort-details--header">{t("myCohort")}</h3>

      <section className="my-cohort-details--cohort">
        <ProfileCircle initials="<>" />
        <div className="my-cohort-details--cohort-info">
          <b>{t("softwareDevelopment")}, {t("cohort")} 1 </b>
          <p>August 2023 - March 2024</p>
        </div>
      </section>

      <ul className="my-cohort-details--list">
        {users.map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </ul>
    </Card>
  );
};

export default MyCohortDetails;
