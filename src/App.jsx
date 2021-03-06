import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ImageContainer from "./containers/ImageContainer/ImageContainer";
import NumbersData from "./components/NumbersData/NumbersData";
import PostsNav from "./components/PostsNav/PostsNav";
import Highlights from "./components/Highlights/Highlights";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import Bio from "./components/Bio/Bio";
import { profileData } from "./data/data.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUserCircle, faBorderAll, faVideo, faIdCardAlt, faCheckCircle, faEllipsisH, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faPlusSquare, faCompass, faHeart, faPlayCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faHome, faPaperPlane, faPlusSquare, faCompass, faHeart, faUserCircle, faBorderAll, faPlayCircle, faVideo, faIdCardAlt, faCheckCircle, faEllipsisH, faAngleDown);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ProfileHeader headerData={profileData} />
      <Bio bioData={profileData} />
      <Highlights highlights={profileData.highlights} />
      <NumbersData numbers={profileData} />
      <PostsNav />
      <ImageContainer imgArr={profileData.posts} />
    </div>
  );
};

export default App;
