import UserInfo from './UserInfo';

function ProfilePage() {
    const userData = useContext(UserContext);

  return <UserInfo userData={userData} />;
}

export default ProfilePage;