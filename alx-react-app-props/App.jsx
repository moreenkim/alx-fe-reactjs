import ProfilePage from './src/components/ProfilePage';
import UserContext from './src/components/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.provider userData={userData}>
    <ProfilePage userData={userData} />;

    </UserContext.provider>
    
  )

}

export default App;