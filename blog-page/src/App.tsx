import {Header, Wip} from "./component/common"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About, Blog, Home} from "./component/pages";
import React from "react";


function App() {
  return (
      <div>
          <Router>
              <Header/>
              <Switch>
                  <Route path={"/"} exact  component={Home}/>
                  <Route path= {"/blog"} component={Blog}/>
                  <Route path={"/about"}  component={About}/>
                  <Route path={"/contact"}  component={Wip}/>
              </Switch>
          </Router>
      </div>
        );
}

export default App;
