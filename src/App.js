import './App.css';
import Gallery from './components/Gallery/Gallery';
import { useState } from 'react';
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore';
import { v4 } from 'uuid';

function App() {
 

  return (
    <>
    <div className="App">
      <Gallery/>
    </div>
    <span style={{fontWeight:'600',fontSize:'16px',justifySelf:'center',marginLeft:'40%',paddingBlock:'30px'}}>Created by <a href='https://github.com/GuladiMeskhi'>Guladi Meskhi</a> - devChallenges.io</span>
    </>
  );
}

export default App;
