import React, { useState, useEffect } from "react";
import items from "./data";
import Home from "./views//Home";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from "./routes/";
import Bitcoin from "./components/Body/MiniBodies/Bitcoin";
import Login from "./components/login/Login";

const allCategories = [...new Set(items.map((item) => item))];
// const allClasses = [ ...new Set(items.map((item)=>  item.class
//   ))]

function App() {
  // const [categories, setCategories] = useState(allCategories)
  // const [classes, setClasses] = useState(allClasses)

  return (
    <div>
      {/* <Home categories={categories}/> */}
      {/* <Bitcoin/> */}

      {/* <Login/> */}
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
