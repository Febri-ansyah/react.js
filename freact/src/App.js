import React from 'react';
import Logo from './logo.svg';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Project from './Pages/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const myLogo = React.createElement('img', {src:Logo, className:'navLogo'});
  const myMenu = React.createElement('ul', {className:'navMain'},
  [
    React.createElement('li', {key:'home', className:'navChild'}, React.createElement('a',{href:'/'}, 'Home')),
    React.createElement('li', {key:'profile', className:'navChild'}, React.createElement('a',{href:'/profile'}, 'Profile')),
    React.createElement('li', {key:'project', className:'navChild'}, React.createElement('a',{href:'/project'}, 'Project'))
  ]);

  return (
    <Router>
      <div className='container'>
        {myMenu}
        {myLogo}
		<Routes>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/profile' element={<Profile/>}/>
			<Route exact path='/project' element={<Project/>}/>
		</Routes>
      </div>
    </Router>
  );
}

export default App;
