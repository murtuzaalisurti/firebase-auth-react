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
                        {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                    </label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={user}
                        required
                        // aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                    // onFocus={() => setUserFocus(true)}
                    // onBlur={() => setUserFocus(false)}
                    />
                    {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p> */}


                    <label htmlFor="password">
                        Password:
                        {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} /> */}
                        {/* <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                    </label>
                    <input
                        type="password"
                        id="password"
                        // onChange={(e) => setPwd(e.target.value)}
                        //                         value={pwd}
                        required
                        ref={passwordRef}
                        // aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                    // onFocus={() => setPwdFocus(true)}
                    // onBlur={() => setPwdFocus(false)}
                    />
                    {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p> */}

                    <button disabled={loading}>Log In</button>
                </form>
                <p>
                    Not registered?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link to="/registerAdmin">Sign Up</Link>
                    </span>
                </p>
            </section>
        </>
    )
}

export default LoginAdmin