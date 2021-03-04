import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./layouts/HomePage/HomePage";


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
    </Router>
  );
};

export default App;
