import React from 'react'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import Googlelogin from './components/GoogleLogin';
import Pagenotfound from './components/Pagenotfound';
import Dashboard from './components/Dashboard';
import Editor from './components/Editor';
import Tempviewer from './components/Tempviewer';
// import AI from './components/ai/AI';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Googlelogin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/editor' element={<Editor/>}/>
        <Route path='/view' element={<Tempviewer/>}/>
        {/* <Route path='/ai' element={<AI/>}/> */}

        <Route path='*' element={<Pagenotfound/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
