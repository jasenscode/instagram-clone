import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faPlusSquare, faCompass, faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faHome, faPaperPlane, faPlusSquare, faCompass, faHeart, faUserCircle);

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
