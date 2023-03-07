import './App.css';
import List from './Components/List';
import { Login } from './Pages/Login';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { Registration } from './Pages/Registration';
import { ForgetPassword } from './Pages/ForgetPassword';
import  Dashboard  from './Pages/Dashboard';
import {Routeprivate} from './Pages/Routeprivate';

function App() {


  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='register' element={<Registration />}/>
    <Route path='password-reset' element={<ForgetPassword />}/>


    {/* <Route path='dashboard' element={
      <Routeprivate>
        <Dashboard/>
      </Routeprivate>
    }/> */}

    </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
