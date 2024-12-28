import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Inbox from './Components/Inbox';
import Starred from './Components/Starred';
import Snnozed from './Components/Snnozed';
import Sent from './Components/Sent';
import Draft from './Components/Draft';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MailBody from './Components/MailBody';
import Login from './Components/Login';

export default function App() {
  const [showCompose, setShowCompose] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <div className="">
      <BrowserRouter>
        <div className="flex flex-col relative">
          <div className="w-full h-[61px] sticky z-20 top-0 left-0">
            <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
          </div>
          <div className="flex pt-2">
            <Sidebar showCompose={showCompose} setShowCompose={setShowCompose} />
            <Routes>
              <Route path="/" element={<Inbox />} />
              <Route path="/Inbox" element={<Inbox />} />
              <Route path="/Starred" element={<Starred />} />
              <Route path="/Snnozed" element={<Snnozed />} />
              <Route path="/Sent" element={<Sent />} />
              <Route path="/Draft" element={<Draft />} />
              <Route path="/email/:id" element={<MailBody />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Sent showCompose={showCompose} setShowCompose={setShowCompose} />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
}
