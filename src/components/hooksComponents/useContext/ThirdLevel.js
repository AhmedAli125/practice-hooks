import React from 'react'
import UserContext from './UserContext'
// import {UserContext} from '../../../App'

function ThirdLevel() {

    const userName = React.useContext(UserContext);
    // const userName = React.useContext(UserContext);
    console.log(userName);
    return (
        <div>
            <h1>This 3rd Level = {userName}</h1>
        </div>
    )
}

export default ThirdLevel
