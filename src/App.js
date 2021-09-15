import AddEvent from './components/AddEvent';
import EventList from './components/EventList';
import FindEvent from './components/FindEvent';
import UpdateEvent from './components/UpdateEvent';
import DeleteEvent from './components/DeleteEvent';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div  className="event-app">
        <ul>
          <li>
            <Link to="/home">Events</Link>
          </li>
          <li>
            <Link to="/add">Add event</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
          <li>
            <Link to="/find">Find Event</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/add">
            <AddEvent/>
          </Route>
          <Route path="/update">
            <UpdateEvent/>
          </Route>
          <Route path="/home">
            <EventList/>
          </Route>
          <Route path="/delete">
            <DeleteEvent/>
          </Route>
          <Route path="/find">
            <FindEvent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
