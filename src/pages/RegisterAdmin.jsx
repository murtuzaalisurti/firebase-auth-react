import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const RegisterAdmin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
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

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/loginAdmin")
        } catch(e) {
            console.log(e)
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <section>
                <p className={"errmsg"} aria-live="assertive">{error}</p>
                <h1>Register</h1>
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

                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        required
                        ref={passwordConfirmRef}
                    />

                    <button disabled={loading}>Sign Up</button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                        <Link to="/loginAdmin">Sign In</Link>
                    </span>
                </p>
            </section>
        </>
    )
}

export default RegisterAdmin