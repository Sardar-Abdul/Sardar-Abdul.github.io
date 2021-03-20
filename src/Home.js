import React, { useState, useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        fetchData();
    }, [])


    const [users, setUsers] = useState([])

    const fetchData= async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json()
        setUsers(data)
    }

    return(
        <div className = 'home'>
            <h2>Here are users on our website: </h2>
            {users.map(user => (<h3 key = {user.id}>{user.name}</h3>)) }
        </div>
    )
}

export default Home;