import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/animation.css";
import "./styles/slick.css";
import { ToastContainer } from "react-toastify";
import RouteApp from "./router/RouteApp";
function App() {
  return (
    <>
      <RouteApp />
      <ToastContainer />
    </>
  );
}

export default App;
