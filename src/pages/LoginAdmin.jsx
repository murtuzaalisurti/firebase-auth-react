import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const LoginAdmin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(currentUser) {
            navigate('/')
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch(e) {
            console.log(e)
            setError("Failed to sign in")
        }

        setLoading(false)
    }

    return (
        <>
            <section>
                <p className={"errmsg"} aria-live="assertive">{error}</p>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        ref={passwordRef}
                    />

                    <button disabled={loading}>Log In</button>
                </form>
                <p>
                    Not registered?<br />
                    <span className="line">
                        <Link to="/registerAdmin">Sign Up</Link>
                    </span>
                </p>
            </section>
        </>
    )
}

export default LoginAdmin