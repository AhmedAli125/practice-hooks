import React from 'react';
import GetPosts from './components/HttpComponent/GetPosts';
import UseStateForm from './components/hooksComponents/UseStateForm';
import UseStateArray from './components/hooksComponents/UseStateArray';
import CondtionalEffect from './components/hooksComponents/ConditionalEffect';
import ConditionalEffect from './components/hooksComponents/ConditionalEffect';
import FetchDataHook from './components/hooksComponents/FetchDataHook'


import FirstLevel from './components/hooksComponents/useContext/FirstLevel'

import UserContext from './components/hooksComponents/useContext/UserContext'   //new code


import './App.css'



// export const UserContext = React.createContext()
function App() {

  const [userName, setUserName] = React.useState('')
  // console.log(UserContext);

  return (
    <div>
      {/* <GetPosts /> */}
      {/* <UseStateForm /> */}
      {/* <UseStateArray /> */}
      {/* <ConditionalEffect /> */}
      {/* <FetchDataHook /> */}

      {/* <input type='text' value={userName} onChange={e=>setUserName(e.target.value)} />

      <UserContext.Provider value={userName}>
        <FirstLevel />
      </UserContext.Provider> */}

      {/* <UserContext.Provider value={userName}>
        <FirstLevel />
      </UserContext.Provider> */}


    </div>
  );
}

export default App;
