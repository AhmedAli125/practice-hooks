import React from 'react';
// import GetPosts from './components/HttpComponent/GetPosts';
// import UseStateForm from './components/hooksComponents/UseStateForm';
// import UseStateArray from './components/hooksComponents/UseStateArray';
// import CondtionalEffect from './components/hooksComponents/ConditionalEffect';
// import ConditionalEffect from './components/hooksComponents/ConditionalEffect';
// import FetchDataHook from './components/hooksComponents/FetchDataHook'
// import FirstLevel from './components/hooksComponents/useContext/FirstLevel'
// import UserContext from './components/hooksComponents/useContext/UserContext'   //new code
import WeatherAppContainer from './components/weather-app/WeatherAppContainer'
// import './App.css'
function App() {
// export const UserContext = React.createContext()

  // const [userName, setUserName] = React.useState('')
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

      <WeatherAppContainer />
    </div>
  );
}

export default App;
