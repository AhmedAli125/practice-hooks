import React, {useEffect, useState} from 'react'

function ConditionalEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        document.title = `Document Title Changed ${count} times`
         console.log('Title Updated')
    }, [count])   //the second parameter is used as a conditional rendering argument that if changed the re-render occurs

    return (
        <div>
            <h1>Conditional Effect Hook</h1>
            <input type='text' value={name} onChange={ e => setName(e.target.value)} />
            <button onClick={() => setCount(prevState => prevState + 1)}>Clicked {count} Times</button>     
            

            <h2>Entered Name is = {name}</h2>
        </div>
    )
}

export default ConditionalEffect
