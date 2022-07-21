import React, { useState } from 'react'

export const LiveSearch = () => {

const list = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
]

const [filterList, setFilterList] = useState(list)
const [inputChange, setInputChange] = useState('')

const handleSubmit = (e) => {
    setInputChange(e.target.value)

    if(e.target.value === '') setFilterList(list);
    else 
        setFilterList(filterList.filter((item) =>
        item.toLowerCase().includes(inputChange.toLowerCase()
        )
        )
    )
}

  return (
    <div>
        <div>
            Search: <input name='query' type="text" onChange={handleSubmit}></input>
        </div>
        <div>
        { filterList && filterList.map((item) => <div>{item}</div>)}
        </div> 
    </div>

  )
}
