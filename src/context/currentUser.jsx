import { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import jwt_decode from 'jwt-decode'
import { getUser } from '../service/apiClient'
import { useLocation, useNavigate, redirect } from 'react-router-dom'

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
    const { token, user } = useAuth()
    const [currentUser, setCurrentUser] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setCurrentUser({ ...user.user })
            return
        }

        async function getUserFromToken() {
            if (token) {
                const { userId } = jwt_decode(token)
                const userDetails = await getUser(userId)

                if (userDetails.status === 'success') {
                    setCurrentUser({ ...userDetails.data.user.user })
                    return
                }
            }
            setCurrentUser(null)
            return
        }
        if (token) {
            getUserFromToken()
        }
    }, [token, user, location.pathname])

    useEffect(() => {
        if (
            token &&
            currentUser &&
            !currentUser?.firstName &&
                (location.pathname !== '/welcome' || location.pathname !== 'verification')
        ) {
            navigate('/welcome')
        }

        if (location.pathname === '/welcome' && currentUser?.firstName) {
            navigate('/')
        }
    }, [token, currentUser, location.pathname])

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
