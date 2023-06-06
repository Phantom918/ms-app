import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import AppLayout from './pages/menu/AppLayout';
import UserInfo from './pages/user/UserInfo';
import UserDetail from './pages/user/UserDetail';

function App() {


  return (
    <Router>
      <div id='root'>
        <Routes>
          {/* 帖子列表 */}
          <Route exact path="/" element={<AppLayout />} >
            <Route path="userInfo" element={<UserInfo />} />
            <Route path="userDetail" element={<UserDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
