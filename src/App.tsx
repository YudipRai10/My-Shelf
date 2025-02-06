import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import SingleBook from "./Page/SingleBook/SingleBook";
import MyShelf from "./Page/MyShelf/MyShelf";
import Search from "./Page/Search/Search";
import Welcome from "./Page/Welcome/Welcome";
import Register from "./Page/Register/Register";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "./Layout/MainLayout";

function App(): React.ReactElement {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:bookid" element={<SingleBook />} />
          <Route path="/my_shelf" element={<MyShelf />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
