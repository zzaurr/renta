import { useEffect, useState } from "react"


export const Custom = () => {
    const jsonUrl =  'https://jsonplaceholder.typicode.com/todos'

    const [custom, setCustom] = useState([])

    const fetchCustom = async () => {
        const response = await fetch(jsonUrl)
        const json = await response.json()
        setCustom(json)
    } 

    useEffect(() => {
        fetchCustom()
    }, [])

    return (
        <>
            <div className="cards">
                {
                    custom.map((cust) => {
                        // const ststus = cust.completed
                    return (
                        <div className="blog_card" key={cust.id}>
                            <p>Пользователь: {cust.userId} </p>
                            <p>Задание: {cust.title} </p>
                            <p>Статус: {cust.completed ?('невыполнен') : ('выполнен') } </p>
                        </div> )
                    })
                }
            </div>
        </>
    )

}