import React, {useState} from 'react'

const UseStateForm = () => {

    const [ person, setPerson ] = useState({firstName: '', lastName:''});

    return (
        <div>
            <form>
                <div>
                    <input type='text'
                        value={person.firstName}
                        onChange={e => setPerson({...person, firstName:e.target.value})}
                    />
                </div>
                <div>
                    <input type='text'
                        value={person.lastName}
                        onChange={e => setPerson({...person , lastName:e.target.value})}
                    />
                </div>
            </form>

            <h1>First Name = {person.firstName}</h1>
            <h1>Last Name = {person.lastName}</h1>
        </div>
    )
}

export default UseStateForm
