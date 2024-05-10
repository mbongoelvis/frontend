import './App.css'
import { Signin } from './Pages/Signin'
import { Signup } from './Pages/Signup';
import { UserPage } from './dashboard/UserPage';
import { LinkPage } from './dashboard/LinkPage';
import { UserInfo } from './dashboard/UserInfo';
import { Route, Routes } from 'react-router-dom'
import { Preview } from './Pages/Preview';
import { ProtectRoute } from '../utility/ProtectRoute';
import { PageNotFound } from '../404/PageNotFound';
import { userContext } from '../userContext';
import { useState } from 'react';

function App() {
  // creating all the require states
  const [Profile, setProfile] = useState("")
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [UpdateProfile, setUpdateProfile] = useState({
    "profilePicture": "",
    "firstName": "",
    "lastName": "",
    "email": ""
  })
  const [Link, setLink] = useState("")
 
  return (
    <userContext.Provider value={{}} >
    <div>
      <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" exact element={<PageNotFound />} />
        <Route element={<ProtectRoute />}>
          <Route path="/dashboard" element={<UserPage />}>
            <Route path="linksetup" element={<LinkPage />} />
            <Route path="userinfo" element={<UserInfo />} />
          </Route>
        </Route>
        <Route path="/:userId" element={<Preview />} />
      </Routes>
      </div>
      </userContext.Provider>
  );
}

export default App
