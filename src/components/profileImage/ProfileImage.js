import ProfileCircle from "../../components/profileCircle";

const ProfileImg = ({ profile }) => {
  if (profile.profileImageUrl === "") {
    return <ProfileCircle
      initials={`${profile.firstName[0]} ${profile.lastName[0]}`}
    />
  }
  else {
    return (
      <img className="profile-icon" src={profile.profileImageUrl} alt="profile Image"></img>
    );
  }
};

export default ProfileImg;