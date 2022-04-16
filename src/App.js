
import './App.css';
import Header from './Components/sharedfile/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/HomePage/Home';
import Login from './Components/LoginOrRegister/Login';
import Register from './Components/LoginOrRegister/Register';
import NotFound from './Components/NotFoundPage/NotFound';
import Coursepage from './Components/course/Coursepage';
import Library from './Components/Checkout/Checkout';
import RequireAuth from './Components/othersFile/RequireAuth';
import CourseDetails from './Components/course/CourseDetails';
import React, { createContext } from 'react';
import useCourse from './hooks/useCourse';
import Checkout from './Components/Checkout/Checkout';


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route path='/course' element={<Coursepage/>}/>
     
      
      <Route path='/course/:id' element={  <CourseDetails></CourseDetails>}/>
        
      <Route path='/checkout' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }/>
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
