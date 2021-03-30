import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import tbonestockImg from "../images/T-bone-Stock.png";
import Header from "../pages/header/Heder";
import IndexPage from "../pages/index/IndexPage";
import DetailPage from "../pages/detail/DetailPage";


function App() {
  return(
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/detail" component={DetailPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
