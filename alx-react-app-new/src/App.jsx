import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Header from "./components/Header";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
        <Counter/>
        <MainContent/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
