import ProfilePage from './ProfilePage';
import UserContext from './src/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.provider userData={userData}>
    <ProfilePage userData={userData} />;

    </UserContext.provider>
    
  )

}

export default App;




// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import WelcomeMessage from "./components/WelcomeMessage.jsx";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent.jsx";
// import Footer from "./components/Footer.jsx";
// import UserProfile from "./components/UserProfile.jsx";


// function App() {
//   const [count, setCount] = useState(0);

//   return (

//     <UserContext.provider userData={userData}>
//     <ProfilePage userData={userData} />;

//     </UserContext.provider>
//     // <>
//     //   <div>
//     //     <WelcomeMessage />
//     //     <Header />
//     //     <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
//     //     <MainContent/>
//     //     <Footer/>
//     //   </div>
//     // </>
//   );
// }

// export default App;
