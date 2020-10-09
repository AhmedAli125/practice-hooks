import React, {useState} from 'react'

function UseStateArray() {
    const [items, setItems] = useState([]);
    
    const addItem = () => {
        setItems([...items,
        {
            id: items.length,
            value: items.length + 1
        }
        ])
    }

    const clearItems = () => {
        setItems([])
    }

    const decItems = () => {
        setItems([...items, items.splice(items.length, 1)])
    }

    
    return (
        <div>
            <button onClick={addItem}>Add Items</button>
            <button onClick={clearItems}>Clear Items</button>
            <button onClick={decItems}>Decrement Items</button>
            <ul>
                {
                    items.map(item => <li><h3>{item.value}</h3></li>)
                }
            </ul>
        </div>
    )
}

export default UseStateArray
