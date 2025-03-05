import React, { useEffect } from 'react'
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
import Template from './Template';

const Dashboard = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/'); // Navigates to the home page
  };
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      goToHome()
    }
  },[])
  return (
    <>
    <section className='navbar'>
         <nav>
            <img src={JSON.parse(localStorage.getItem('user'))?.picture} alt="profile" />
            <ul>
                <li>{JSON.parse(localStorage.getItem('user'))?.name}</li>
                <li>templates</li>
                <li>mytemplate</li>
            </ul>
         </nav>
    </section>
    <Template/>
    </>
  )
}

export default Dashboard