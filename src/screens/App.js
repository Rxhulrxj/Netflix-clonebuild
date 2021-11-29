import {
  originals,
  action,
  Horror,
  Comedy,
  Romance,
  documentaries,
  populartv,
  tvonair,
} from "../urls";
import "../screens/App.css";
import Banner from "../Components/Banner/Banner";
import NavBar from "../Components/NavBar/NavBar";
import Rowpost from "../Components/Rowpost/Rowpost";
import Footer from "./Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="AppLoading">
        <div className="AppLoadingContents">
          <Spinner
            name="line-scale-pulse-out-rapid"
            color="purple"
            fadeIn="none"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={populartv} title="Popular Series" isSmall />
      <Rowpost url={tvonair} title="TV Shows OnAir" isSmall />
      <Rowpost url={action} title="Action Movies" isSmall />
      <Rowpost url={Horror} title="Horror Movies" isSmall />
      <Rowpost url={Comedy} title="Comedy Movies" isSmall />
      <Rowpost url={Romance} title="Romantic Movies" isSmall />
      <Rowpost url={documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
