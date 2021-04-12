import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
      {/* Search page */}
    </div>
  );
}

export default App;
