import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing page/landingpage";
import LogIn from "./Pages/LogIn Page/login";
import Testpage from "./Pages/Test Page/testpage";
import FinshPage from "./Pages/Finish Page/finishpage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<LogIn />} />
        <Route path="/landingpage" element = {<LandingPage />} />
        <Route path="/testpage" element = {<Testpage />} />
        <Route path="/finishpage" element = {<FinshPage />} />
      </Routes>
    </>
  );
}

export default App;
