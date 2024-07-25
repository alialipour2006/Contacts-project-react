import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./component/Home"
import Logout from "./component/Logout"
import Login from "./component/Login"
import Register from "./component/Register"
import Crate1 from "./component/Crate1"
import Editcon from "./component/Editcon"


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/contacts' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/logout' Component={Logout} />
        <Route path='/crate' Component={Crate1} />
        <Route path='/Edit' Component={Editcon} />
        <Route
          path="*"
          element={<Navigate to="/contacts" replace={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
