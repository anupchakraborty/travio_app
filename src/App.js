import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddDestinations from './Pages/AddDestinations/AddDestinations';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Destinations from './Pages/Home/Destinations/Destinations';
import AboutTravels from './Pages/Home/AboutTravels/AboutTravels';
import Bookings from './Pages/Booking/Booking';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutTravels></AboutTravels>
            </Route>
            <Route path="/adddestination">
              <AddDestinations></AddDestinations>
            </Route>
            <Route path="/destinations">
              <Destinations></Destinations>
            </Route>
            <Route path="/booking/:destinationId">
              <Bookings></Bookings>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
