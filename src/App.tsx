import React, {useContext} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import AuthContext from "./store/auth-context";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";
import ProductRegister from "./components/product/ProductRegister";

function App() {

    const authCtx = useContext(AuthContext);
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              {/*<Route path="/product/:id" element={<ProductPage/>}/>*/}
              {/*<Route path="/upload" element={<Uploadpage/>}/>*/}
              <Route path="/signup/" element={authCtx.isLoggedIn ? <Navigate to='/' /> : <CreateAccountPage />} />
              <Route path="/login/*"
                     element={authCtx.isLoggedIn ? <Navigate to='/' /> : <AuthPage />}
              />
              <Route path="/profile/" element={!authCtx.isLoggedIn ? <Navigate to='/' /> : <ProfilePage />} />
              <Route path="/productRegister/" element={!authCtx.isLoggedIn ? <Navigate to='/' /> : <ProductRegister />} />
          </Routes>

      </Layout>
  );
}

export default App;
