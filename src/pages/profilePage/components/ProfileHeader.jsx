import { useContext } from 'react';
import { ProfileContext } from '..';
import ProfileCircle from '../../../components/profileCircle';

const ProfileHeader = () => {
  const { initials, profile } = useContext(ProfileContext);
  return (
    <section className="profile-info-header">
      <ProfileCircle initials={initials} />
      <div className="profile-info">
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
        <p>{profile.role}</p>
      </div>
    </section>
  );
};

export default ProfileHeader;
