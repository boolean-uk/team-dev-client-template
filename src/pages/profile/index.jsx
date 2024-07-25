import Card from '../../components/card'
import UserDetails from '../../components/UserDetails';
import './profile.css'

const Profile = () => {
  return (
    <main>
    <h2>Profile</h2>
    <Card>
      <UserDetails header={true}/>

    </Card>
    </main>
    
  );
};

export default Profile;
