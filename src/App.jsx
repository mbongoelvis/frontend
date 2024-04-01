import './App.css'
import { Signin } from './Pages/Signin'
import { Signup } from './Pages/Signup';
import { UserPage } from './dashboard/UserPage';
import { LinkPage } from './dashboard/LinkPage';
import { UserInfo } from './dashboard/UserInfo';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/"  element={<UserPage />}>
          <Route path="linksetup" element={<LinkPage />} />
          <Route path="userinfo" element={<UserInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
