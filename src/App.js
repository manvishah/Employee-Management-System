import logo from './logo.svg';
import './App.css';
import Confirm from './components/Confirm'
import SignIn from './components/SignIn'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AdminLogin from './components/AdminLogin';
function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Confirm />}/>
       <Route path="/admin" element={<SignIn />}/>
       <Route path="/employee" element={<SignIn />}/>
       <Route path="/adminLogin" element={<AdminLogin />}/>

     </Routes>
    </Router>
  );
}

export default App;
