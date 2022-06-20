import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {

    const [error, setError] = useState()
    const navigate = useNavigate()
    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/loginAdmin")
        } catch (e) {
            console.error(e)
            setError("Failed to log out")
        }
    }
    
    return (
        <>
            <p className={"errmsg"} aria-live="assertive">{error}</p>
            <div>Home</div>
            {currentUser && currentUser.email}
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home