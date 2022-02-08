import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ImageContainer from "./containers/ImageContainer/ImageContainer";
import { profileData } from "./data/data.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faPlusSquare, faCompass, faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faHome, faPaperPlane, faPlusSquare, faCompass, faHeart, faUserCircle);

const App = () => {
  console.log(profileData);

  return (
    <div className="App">
      <Navbar />
      <ImageContainer imgArr={profileData.posts} />
    </div>
  );
};

export default App;
