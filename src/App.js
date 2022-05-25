
import './App.css';
import CreateUser from './componants/CreateUser/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './LogIn/Login';




function App() {
  return (
    <div className="">
     

      <Routes>
        <Route path='/' element={<CreateUser></CreateUser>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
