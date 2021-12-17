import './App.css';
import LandigPageTiles from './components/landing-page';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Login from './components/login';
import TicketDashBoard from './components/ticket-dashboard';

function App() {
  return (
    <div className="App">


      <Routes>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandigPageTiles />} />
        <Route path="/tickets" element={<TicketDashBoard />} />
        {/* <Route path="/crew" >
          <Crew />
        </Route>
        <Route path="/technology" >
          <Technology />
        </Route> */}
        {/* <Route path="/">
          <LandigPageTiles />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
