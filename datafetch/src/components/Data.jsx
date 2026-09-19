import React, { useEffect, useState } from 'react'

const Data = () => {
  const [d, setD] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        )

        const data = await api.json()

        console.log('My Data = ', data)

        setD(data)
      } catch (error) {
        console.log('Error = ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {d.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Completed: {item.completed ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  )
}

export default Data