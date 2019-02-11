import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Myads from "./components/Myads";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Chat from "./components/Chat";
import Subasta from "./components/Subasta";

function App() {
  return (
    <div>
      <Nav/>
      <Myads/>
      <Filter/>
      <Card/>
      <Form/>
      <Registration/>
      <Login/>
      <Chat/>
      <Footer/>
      <Search/>
      <Subasta/>
    </div>
  );
}

export default App;
