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

function App() {

  return (
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
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
}

export default App
