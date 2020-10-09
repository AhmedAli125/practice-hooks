import React from 'react';
import GetPosts from './components/HttpComponent/GetPosts';
import UseStateForm from './components/hooksComponents/UseStateForm';
import UseStateArray from './components/hooksComponents/UseStateArray';
import './App.css'

function App() {
  return (
    <div>
      {/* <GetPosts /> */}
      {/* <UseStateForm /> */}
      <UseStateArray />
    </div>
  );
}

export default App;
