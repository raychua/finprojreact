import React from "react";
import "../App.css";
import createPerson from "./CreatePerson";
import createFinRecord from "./CreateFinRecord";
import updateFinRecord from "./UpdateFinRecord";
import mainDisplay from "./MainDisplay";
import success from "./Success";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";

class TopMenu extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="TopMenu">
          <div className="dropdown">
            <button className="dropbtn">
              <NavLink to="/home">Home</NavLink>
            </button>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Person</button>
            <div className="dropdown-content">
              <NavLink to="/person/create">Create New Person</NavLink>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Finance Record</button>
            <div className="dropdown-content">
              <NavLink to="/finrecord/create">Create Finance Record</NavLink>
            </div>
          </div>
        </div>

        <div className="DisplayBody">
          <Switch>
            <Route exact path="/" component={mainDisplay} />
            <Route exact path="/login" component={null} />
            <Route exact path="/home" component={mainDisplay} />
            <Route exact path="/person/create" component={createPerson} />
            <Route exact path="/finrecord/create" component={createFinRecord} />
            <Route
              exact
              path="/finrecord/update/:id"
              component={updateFinRecord}
            />
            <Route exact path="/finrecords/success" component={success} />
            <Route exact path="/person/success" component={success} />
            <Route path="/404" render={() => <div>Page Not Found</div>} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default TopMenu;
