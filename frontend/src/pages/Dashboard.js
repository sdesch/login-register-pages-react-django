import React from 'react'
import { useAuth } from '../context/AuthContex';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="home-page-container">
      <h1 className="welcome-message">Welcome to your Dashboard!</h1>
      <div className="info-messages">
        <p className="info-message">
          English: Only you have access here, {user.username}.
        </p>
        <p className="info-message">
          Spanish: Aqui, solamente tienes acceso tú, {user.username}.
        </p>
      </div>
    </div>
  )
}

export default Dashboard