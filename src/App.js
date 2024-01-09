import React,{useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import Post from "./store/postContext";

function App() {

  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div className="full-body">
      <Post>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Create />} path="/create" />
          <Route element={<View />} path="/view" />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
