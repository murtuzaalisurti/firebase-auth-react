import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = () => {

    const { currentUser } = useAuth()
    const navigate = useNavigate()
    console.log(!currentUser)

    useEffect(() => {
        if(!currentUser) {
            navigate('/loginAdmin', {replace: true})
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute