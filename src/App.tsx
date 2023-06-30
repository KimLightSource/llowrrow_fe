import React, {useContext} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import AuthContext from './store/auth-context';
import {Navigate, Route, Routes} from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  const authCtx = useContext(AuthContext);
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup/" element={authCtx.isLoggedIn ? <Navigate to='/' /> : <CreateAccountPage />} />
          <Route path="/login/*"
                 element={authCtx.isLoggedIn ? <Navigate to='/' /> : <AuthPage />}
          />
          <Route path="/profile/" element={!authCtx.isLoggedIn ? <Navigate to='/' /> : <ProfilePage />} />
        </Routes>
      </Layout>
  );
}

export default App;
