import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import Header from './components/Header';
import Dashboard from "./components/Dashboard"
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import Logout from "./components/Logout"
import { AuthProvider } from './components/AuthContext';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import PostDetails from './components/PostDetails';

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const clientId = "393050996180-qie6tod23it1n3jqbajiitkp11670s69.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      }).then(() => {
        console.log('GAPI client initialized');
      }).catch(error => {
        console.error('Error initializing GAPI client', error);
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/updatepost" element={<UpdatePost />} />
          <Route path="/postdetails/:title" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
