import Card from "../../components/card";
import UserDetails from "../../components/UserDetails";
import UserProfileIcon from "../../components/UserProfileIcon";
import "./profile.css";

const Profile = () => {
  return (
    <main>
      <h2>Profile</h2>
      <Card>
        <div className="user-detail-card">
          <UserProfileIcon />
          <UserDetails header={true} />
        </div>
      </Card>
    </main>
  );
};

export default Profile;
