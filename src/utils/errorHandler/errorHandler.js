
export const loginErrorHandler = (err, setErr) => {
    let error = err.toString()
    if (error.includes('badly formatted')) error = "Wrong e-mail/password!"
    if (error.includes('password is invalid')) error = "Wrong e-mail/password!"
    if (error.includes('no user record')) error = "No user found!"
    if (error.includes('temporarily disabled')) error = "Access temporarily disabled due to many failed attempts."
    setErr(error)
}

export const registerErrorHandler = (err, setErr) => {
    let error = err.toString()
    if (error.includes('badly formatted')) error = "Wrong e-mail format"
    if (error.includes('6 characters')) error = "Password should be at least 6 characters"
    if (error.includes('address is already in use')) error = "E-mail already in use!"
    // mismatch passwords error handling is @auth.content
    setErr(error)
}