import './App.css';
import React from 'react';
import GoalList from './components/GoalList';
import Awais from './components/frame.svg';

function App() {
  return (
    <div className="course-goals">
      <h2>Kurs mål</h2>
      <img scr={Awais} alt="QR code" />
      <img scr="/components/frame.svg" alt="QR code" />
      <GoalList />
      
     
    </div>
  );
}

export default App;
