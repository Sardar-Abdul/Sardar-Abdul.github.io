import React, {useState, useEffect} from 'react'

const About = () => {

    useEffect(() => {
        fetchData();
    }, [])


    const [users, setUsers] = useState([])

    const fetchData= async() => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json()
        setUsers(data)
    }

    return (
        <div className = 'about'>
            <h2>Here are posts on our website: </h2>
            {users.map(user => (<h3 key = {user.id}>{user.body}</h3>)) }
        </div>
    )
}

export default About
