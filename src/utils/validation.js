
const validateEmail = (email) => {
    if (email.length > 254) return false
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

const validatePassword = (password) => {
    const regex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
    return regex.test(password)
}

export {
    validateEmail,
    validatePassword
}