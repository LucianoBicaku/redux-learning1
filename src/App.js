import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';
import Favourites from './Components/Favourites';
import Recipies from './Components/Recipies';
import HomePage from './Components/HomePage';
import { createStore } from 'redux'
import allreducers from './reducers'
import { Provider } from 'react-redux'

//store
const store = createStore(
  allreducers
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/recipies" component={Recipies}></Route>
          <Route exact path="/favourites" component={Favourites}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route >
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

const Notfound = () => { return <div>NotFound</div> };

export default App;
